// Copyright 2019-2024 ChainSafe Systems
// SPDX-License-Identifier: Apache-2.0, MIT

use crate::blocks::Tipset;
use crate::cli_shared::snapshot;
use crate::db::car::forest::FOREST_CAR_FILE_EXTENSION;
use crate::db::car::{ForestCar, ManyCar};
use crate::state_manager::StateManager;
use crate::utils::db::car_stream::CarStream;
use crate::utils::io::EitherMmapOrRandomAccessFile;
use anyhow::Context as _;
use futures::TryStreamExt;
use std::ffi::OsStr;
use std::fs;
use std::io;
use std::sync::Arc;
use std::{
    path::{Path, PathBuf},
    time,
};
use tokio::io::AsyncWriteExt;
use tracing::{debug, info};
use url::Url;
use walkdir::WalkDir;

const TIPSET_KEY_LOOKBACK_ENTRIES: usize = 2000;

pub fn load_all_forest_cars<T>(store: &ManyCar<T>, forest_car_db_dir: &Path) -> anyhow::Result<()> {
    if !forest_car_db_dir.is_dir() {
        fs::create_dir_all(forest_car_db_dir)?;
    }
    for file in WalkDir::new(forest_car_db_dir)
        .max_depth(1)
        .into_iter()
        .filter_map(|entry| {
            if let Ok(entry) = entry {
                if let Some(filename) = entry.file_name().to_str() {
                    if filename.ends_with(FOREST_CAR_FILE_EXTENSION) {
                        return Some(entry.into_path());
                    }
                }
            }
            None
        })
    {
        let car = ForestCar::try_from(file.as_path())
            .with_context(|| format!("Error loading car DB at {}", file.display()))?;
        store.read_only(car.into())?;
        debug!("Loaded car DB at {}", file.display());
    }

    Ok(())
}

/// This function validates and stores the CAR binary from `from_path`(either local path or URL) into the `{DB_ROOT}/car_db/`
/// (automatically trans-code into `.forest.car.zst` format when needed), and returns its final file path and the heaviest tipset.
pub async fn import_chain_as_forest_car(
    from_path: &Path,
    forest_car_db_dir: &Path,
    consume_snapshot_file: bool,
) -> anyhow::Result<(PathBuf, Tipset)> {
    info!("Importing chain from snapshot at: {}", from_path.display());

    let stopwatch = time::Instant::now();

    let downloaded_car_temp_path =
        tempfile::NamedTempFile::new_in(forest_car_db_dir)?.into_temp_path();
    if let Ok(url) = Url::parse(&from_path.display().to_string()) {
        download_to(&url, &downloaded_car_temp_path).await?;
    } else {
        move_or_copy_file(from_path, &downloaded_car_temp_path, consume_snapshot_file)?;
    }

    let forest_car_db_path = forest_car_db_dir.join(format!(
        "{}{FOREST_CAR_FILE_EXTENSION}",
        chrono::Utc::now().timestamp_millis()
    ));

    if ForestCar::is_valid(&EitherMmapOrRandomAccessFile::open(
        &downloaded_car_temp_path,
    )?) {
        downloaded_car_temp_path.persist(&forest_car_db_path)?;
    } else {
        // Use another temp file to make sure all final `.forest.car.zst` files are complete and valid.
        let forest_car_db_temp_path =
            tempfile::NamedTempFile::new_in(forest_car_db_dir)?.into_temp_path();
        transcode_into_forest_car(&downloaded_car_temp_path, &forest_car_db_temp_path).await?;
        forest_car_db_temp_path.persist(&forest_car_db_path)?;
    }

    let ts = ForestCar::try_from(forest_car_db_path.as_path())?.heaviest_tipset()?;
    info!(
        "Imported snapshot in: {}s, heaviest tipset epoch: {}",
        stopwatch.elapsed().as_secs(),
        ts.epoch()
    );

    Ok((forest_car_db_path, ts))
}

pub async fn download_to(url: &Url, destination: &Path) -> anyhow::Result<()> {
    snapshot::download_file_with_retry(
        url,
        destination.parent().with_context(|| {
            format!(
                "Error getting the parent directory of {}",
                destination.display()
            )
        })?,
        destination
            .file_name()
            .and_then(OsStr::to_str)
            .with_context(|| format!("Error getting the file name of {}", destination.display()))?,
    )
    .await?;

    Ok(())
}

fn move_or_copy_file(from: &Path, to: &Path, consume: bool) -> io::Result<()> {
    if consume && fs::rename(from, to).is_ok() {
        Ok(())
    } else {
        fs::copy(from, to)?;
        if consume {
            fs::remove_file(from)?;
        }
        Ok(())
    }
}

async fn transcode_into_forest_car(from: &Path, to: &Path) -> anyhow::Result<()> {
    let car_stream = CarStream::new(tokio::io::BufReader::new(
        tokio::fs::File::open(from).await?,
    ))
    .await?;
    let roots = car_stream.header.roots.clone();

    let mut writer = tokio::io::BufWriter::new(tokio::fs::File::create(to).await?);
    let frames = crate::db::car::forest::Encoder::compress_stream_default(
        car_stream.map_err(anyhow::Error::from),
    );
    crate::db::car::forest::Encoder::write(&mut writer, roots, frames).await?;
    writer.shutdown().await?;

    Ok(())
}

pub fn cache_tipset_keys<DB>(
    state_manager: Arc<StateManager<DB>>,
    ts: &Tipset,
) -> anyhow::Result<()>
where
    DB: fvm_ipld_blockstore::Blockstore,
{
    let mut curr = ts.clone();
    tracing::info!("Caching tipset keys for EthAPIs");
    for _ in 0..TIPSET_KEY_LOOKBACK_ENTRIES {
        state_manager.chain_store().put_tipset_key(curr.key())?;
        if let Ok(ts) = Tipset::load_required(state_manager.blockstore(), curr.parents()) {
            curr = ts;
        } else {
            break;
        }
    }

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[tokio::test]
    async fn import_snapshot_from_file_valid() {
        import_snapshot_from_file("test-snapshots/chain4.car")
            .await
            .unwrap();
    }

    #[tokio::test]
    async fn import_snapshot_from_compressed_file_valid() {
        import_snapshot_from_file("test-snapshots/chain4.car.zst")
            .await
            .unwrap()
    }

    #[tokio::test]
    async fn import_snapshot_from_file_invalid() {
        import_snapshot_from_file("Cargo.toml").await.unwrap_err();
    }

    #[tokio::test]
    async fn import_snapshot_from_file_not_found() {
        import_snapshot_from_file("dummy.car").await.unwrap_err();
    }

    #[tokio::test]
    async fn import_snapshot_from_url_not_found() {
        import_snapshot_from_file("https://forest.chainsafe.io/dummy.car")
            .await
            .unwrap_err();
    }

    async fn import_snapshot_from_file(file_path: &str) -> anyhow::Result<()> {
        let temp = tempfile::Builder::new().tempdir()?;
        let (path, ts) =
            import_chain_as_forest_car(Path::new(file_path), temp.path(), false).await?;
        assert!(path.is_file());
        assert!(ts.epoch() > 0);
        Ok(())
    }
}
