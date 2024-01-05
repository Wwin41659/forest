// Copyright 2019-2023 ChainSafe Systems
// SPDX-License-Identifier: Apache-2.0, MIT

use crate::blocks::VRFProof;
use crate::shim::clock::BLOCKS_PER_EPOCH;
use crate::utils::encoding::blake2b_256;
use num::{
    bigint::{ParseBigIntError, Sign},
    BigInt, Integer,
};
use once_cell::sync::Lazy;
use serde_tuple::{self, Deserialize_tuple, Serialize_tuple};

const PRECISION: u64 = 256;
const MAX_WIN_COUNT: i64 = 3 * BLOCKS_PER_EPOCH as i64;

fn parse(strings: &[&str]) -> Result<Vec<BigInt>, ParseBigIntError> {
    strings
        .iter()
        .map(|s| {
            let i: BigInt = s.parse()?;
            // << 256 (Q.0 to Q.256), >> 128 to transform integer params to coefficients
            Ok(i << (PRECISION - 128))
        })
        .collect()
}

static EXP_NUM_COEF: Lazy<Vec<BigInt>> = Lazy::new(|| {
    parse(&[
        "-648770010757830093818553637600",
        "67469480939593786226847644286976",
        "-3197587544499098424029388939001856",
        "89244641121992890118377641805348864",
        "-1579656163641440567800982336819953664",
        "17685496037279256458459817590917169152",
        "-115682590513835356866803355398940131328",
        "340282366920938463463374607431768211456",
    ])
    .unwrap()
});
static EXP_DENO_COEF: Lazy<Vec<BigInt>> = Lazy::new(|| {
    parse(&[
        "1225524182432722209606361",
        "114095592300906098243859450",
        "5665570424063336070530214243",
        "194450132448609991765137938448",
        "5068267641632683791026134915072",
        "104716890604972796896895427629056",
        "1748338658439454459487681798864896",
        "23704654329841312470660182937960448",
        "259380097567996910282699886670381056",
        "2250336698853390384720606936038375424",
        "14978272436876548034486263159246028800",
        "72144088983913131323343765784380833792",
        "224599776407103106596571252037123047424",
        "340282366920938463463374607431768211456",
    ])
    .unwrap()
});

/// `expneg` accepts x in Q.256 format and computes e^-x.
/// It is most precise within [0, 1.725) range, where error is less than
/// 3.4e-30. Over the [0, 5) range its error is less than 4.6e-15.
/// Output is in Q.256 format.
fn expneg(x: &BigInt) -> BigInt {
    let num = poly_val(&EXP_NUM_COEF, x);
    let deno = poly_val(&EXP_DENO_COEF, x);

    (num << PRECISION).div_floor(&deno)
}

/// `poly_val` evaluates a polynomial given by coefficients `p` in Q.256 format
/// at point `x` in Q.256 format. Output is in Q.256.
/// Coefficients should be ordered from the highest order coefficient to the
/// lowest.
fn poly_val(poly: &[BigInt], x: &BigInt) -> BigInt {
    let mut poly_iter = poly.iter();
    let mut res = poly_iter.next().cloned().unwrap_or_default();

    for coeff in poly_iter {
        res = ((res * x) >> PRECISION) + coeff;
    }
    res
}

/// computes lambda in Q.256
#[inline]
fn lambda(power: &BigInt, total_power: &BigInt) -> BigInt {
    ((power * BLOCKS_PER_EPOCH) << PRECISION).div_floor(total_power)
}

/// Poisson inverted `CDF`
/// lambda is in Q.256 format
struct Poiss {
    lam: BigInt,
    pmf: BigInt,
    icdf: BigInt,

    k: u64,
}

impl Poiss {
    fn new(lambda: BigInt) -> Self {
        // pmf(k) = (lambda^k)*(e^lambda) / k!
        // k = 0 here, so it simplifies to just e^-lambda
        let pmf = expneg(&lambda);

        let icdf = (BigInt::from(1) << PRECISION) - &pmf;

        Self {
            lam: lambda,
            pmf,
            icdf,
            k: 0,
        }
    }
    fn next(&mut self) -> &BigInt {
        // pmf(k) = (lambda^k)*(e^lambda) / k!
        // so pmf(k) = pmf(k-1) * lambda / k
        self.k += 1;

        // calculate pmf for k
        self.pmf = self.pmf.div_floor(&BigInt::from(self.k));
        self.pmf = (&self.pmf * &self.lam) >> PRECISION;

        // calculate output
        // icdf(k) = icdf(k-1) - pmf(k)
        self.icdf -= &self.pmf;
        &self.icdf
    }
}

/// Proofs generated by a miner which determines the reward they earn.
/// This is generated from hashing a partial ticket and using the hash to
/// generate a value.
#[derive(
    Clone, Debug, PartialEq, PartialOrd, Eq, Default, Ord, Serialize_tuple, Deserialize_tuple, Hash,
)]
pub struct ElectionProof {
    pub win_count: i64,
    pub vrfproof: VRFProof,
}

impl ElectionProof {
    /// Uses `VRFProof` to compute number of wins.
    /// The algorithm is based on Algorand's Sortition with Binomial
    /// distribution replaced by Poisson distribution.
    pub fn compute_win_count(&self, power: &BigInt, total_power: &BigInt) -> i64 {
        let h = blake2b_256(self.vrfproof.as_bytes());
        let lhs = BigInt::from_bytes_be(Sign::Plus, &h);

        // We are calculating upside-down CDF of Poisson distribution with
        // rate λ=power*E/totalPower
        // Steps:
        //  1. calculate λ=power*E/totalPower
        //  2. calculate elam = exp(-λ)
        //  3. Check how many times we win:
        //    j = 0
        //    pmf = elam
        //    rhs = 1 - pmf
        //    for h(vrf) < rhs: j++; pmf = pmf * lam / j; rhs = rhs - pmf

        let lam = lambda(power, total_power);
        let mut p = Poiss::new(lam);
        let mut rhs = &p.icdf;

        let mut j: i64 = 0;
        while &lhs < rhs && j < MAX_WIN_COUNT {
            rhs = p.next();
            j += 1;
        }

        j
    }
}

#[cfg(test)]
impl quickcheck::Arbitrary for ElectionProof {
    fn arbitrary(g: &mut quickcheck::Gen) -> Self {
        let fmt_str = format!("===={}=====", u64::arbitrary(g));
        let vrfproof = VRFProof::new(fmt_str.into_bytes());
        Self {
            win_count: i64::arbitrary(g),
            vrfproof,
        }
    }
}
