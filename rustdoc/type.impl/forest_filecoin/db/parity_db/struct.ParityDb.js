(function() {var type_impls = {
"forest_filecoin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#83-141\">source</a><a href=\"#impl-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.to_options\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#84-94\">source</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.to_options\" class=\"fn\">to_options</a>(path: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>, config: &amp;<a class=\"struct\" href=\"forest_filecoin/db/parity_db_config/struct.ParityDbConfig.html\" title=\"struct forest_filecoin::db::parity_db_config::ParityDbConfig\">ParityDbConfig</a>) -&gt; <a class=\"struct\" href=\"parity_db/options/struct.Options.html\" title=\"struct parity_db::options::Options\">Options</a></h4></section><section id=\"method.open\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#96-102\">source</a><h4 class=\"code-header\">pub fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.open\" class=\"fn\">open</a>(path: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt;, config: &amp;<a class=\"struct\" href=\"forest_filecoin/db/parity_db_config/struct.ParityDbConfig.html\" title=\"struct forest_filecoin::db::parity_db_config::ParityDbConfig\">ParityDbConfig</a>) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;Self&gt;</h4></section><section id=\"method.wrap\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#104-109\">source</a><h4 class=\"code-header\">pub fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.wrap\" class=\"fn\">wrap</a>(db: <a class=\"struct\" href=\"parity_db/db/struct.Db.html\" title=\"struct parity_db::db::Db\">Db</a>, stats: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.choose_column\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#113-120\">source</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.choose_column\" class=\"fn\">choose_column</a>(cid: &amp;<a class=\"type\" href=\"cid/type.Cid.html\" title=\"type cid::Cid\">Cid</a>) -&gt; <a class=\"enum\" href=\"forest_filecoin/db/parity_db/enum.DbColumn.html\" title=\"enum forest_filecoin::db::parity_db::DbColumn\">DbColumn</a></h4></section></summary><div class=\"docblock\"><p>Returns an appropriate column variant based on the information\nin the Cid.</p>\n</div></details><section id=\"method.read_from_column\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#122-129\">source</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.read_from_column\" class=\"fn\">read_from_column</a>&lt;K&gt;(\n    &amp;self,\n    key: K,\n    column: <a class=\"enum\" href=\"forest_filecoin/db/parity_db/enum.DbColumn.html\" title=\"enum forest_filecoin::db::parity_db::DbColumn\">DbColumn</a>\n) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section><section id=\"method.write_to_column\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#131-140\">source</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.write_to_column\" class=\"fn\">write_to_column</a>&lt;K, V&gt;(\n    &amp;self,\n    key: K,\n    value: V,\n    column: <a class=\"enum\" href=\"forest_filecoin/db/parity_db/enum.DbColumn.html\" title=\"enum forest_filecoin::db::parity_db::DbColumn\">DbColumn</a>\n) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></div></details>",0,"forest_filecoin::db::db_engine::Db"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#270-289\">source</a><a href=\"#impl-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.dereference_operation\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#275-278\">source</a><h4 class=\"code-header\">pub fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.dereference_operation\" class=\"fn\">dereference_operation</a>(key: &amp;<a class=\"type\" href=\"cid/type.Cid.html\" title=\"type cid::Cid\">Cid</a>) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>, <a class=\"enum\" href=\"parity_db/db/enum.Operation.html\" title=\"enum parity_db::db::Operation\">Operation</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Removes a record.</p>\n<h5 id=\"arguments\"><a href=\"#arguments\">Arguments</a></h5>\n<ul>\n<li><code>key</code> - record identifier</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_operation\" class=\"method\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#286-288\">source</a><h4 class=\"code-header\">pub fn <a href=\"forest_filecoin/db/parity_db/struct.ParityDb.html#tymethod.set_operation\" class=\"fn\">set_operation</a>(\n    column: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>,\n    key: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;,\n    value: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;\n) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>, <a class=\"enum\" href=\"parity_db/db/enum.Operation.html\" title=\"enum parity_db::db::Operation\">Operation</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Updates/inserts a record.</p>\n<h5 id=\"arguments-1\"><a href=\"#arguments-1\">Arguments</a></h5>\n<ul>\n<li><code>column</code> - column identifier</li>\n<li><code>key</code> - record identifier</li>\n<li><code>value</code> - record contents</li>\n</ul>\n</div></details></div></details>",0,"forest_filecoin::db::db_engine::Db"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BitswapStoreReadWrite-for-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#236-244\">source</a><a href=\"#impl-BitswapStoreReadWrite-for-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"forest_filecoin/libp2p_bitswap/store/trait.BitswapStoreReadWrite.html\" title=\"trait forest_filecoin::libp2p_bitswap::store::BitswapStoreReadWrite\">BitswapStoreReadWrite</a> for <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Params\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Params\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"forest_filecoin/libp2p_bitswap/store/trait.BitswapStoreReadWrite.html#associatedtype.Params\" class=\"associatedtype\">Params</a> = <a class=\"struct\" href=\"libipld/store/struct.DefaultParams.html\" title=\"struct libipld::store::DefaultParams\">DefaultParams</a></h4></section></summary><div class=\"docblock\"><p><code>fvm_ipld_encoding::DAG_CBOR(0x71)</code> is covered by\n<a href=\"libipld/store/struct.DefaultParams.html\" title=\"struct libipld::store::DefaultParams\"><code>libipld::DefaultParams</code></a> under feature <code>dag-cbor</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#241-243\">source</a><a href=\"#method.insert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/libp2p_bitswap/store/trait.BitswapStoreReadWrite.html#tymethod.insert\" class=\"fn\">insert</a>(&amp;self, block: &amp;<a class=\"struct\" href=\"libipld/block/struct.Block.html\" title=\"struct libipld::block::Block\">Block</a>&lt;Self::<a class=\"associatedtype\" href=\"forest_filecoin/libp2p_bitswap/store/trait.BitswapStoreReadWrite.html#associatedtype.Params\" title=\"type forest_filecoin::libp2p_bitswap::store::BitswapStoreReadWrite::Params\">Params</a>&gt;) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>A block response needs to insert the block into the store.</div></details></div></details>","BitswapStoreReadWrite","forest_filecoin::db::db_engine::Db"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Blockstore-for-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#169-209\">source</a><a href=\"#impl-Blockstore-for-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"fvm_ipld_blockstore/trait.Blockstore.html\" title=\"trait fvm_ipld_blockstore::Blockstore\">Blockstore</a> for <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#170-178\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, k: &amp;<a class=\"type\" href=\"cid/type.Cid.html\" title=\"type cid::Cid\">Cid</a>) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Gets the block from the blockstore.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.put_keyed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#180-190\">source</a><a href=\"#method.put_keyed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#tymethod.put_keyed\" class=\"fn\">put_keyed</a>(&amp;self, k: &amp;<a class=\"type\" href=\"cid/type.Cid.html\" title=\"type cid::Cid\">Cid</a>, block: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Put a block with a pre-computed cid. <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#tymethod.put_keyed\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.put_many_keyed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#192-208\">source</a><a href=\"#method.put_many_keyed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#method.put_many_keyed\" class=\"fn\">put_many_keyed</a>&lt;D, I&gt;(&amp;self, blocks: I) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (<a class=\"type\" href=\"cid/type.Cid.html\" title=\"type cid::Cid\">Cid</a>, D)&gt;,</span></h4></section></summary><div class='docblock'>Bulk-put pre-keyed blocks into the blockstore. <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#method.put_many_keyed\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fvm_ipld_blockstore/lib.rs.html#33\">source</a><a href=\"#method.has\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#method.has\" class=\"fn\">has</a>(&amp;self, k: &amp;<a class=\"struct\" href=\"cid/cid/struct.Cid.html\" title=\"struct cid::cid::Cid\">Cid</a>&lt;64&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>, <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Checks if the blockstore has the specified block.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.put\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fvm_ipld_blockstore/lib.rs.html#40-43\">source</a><a href=\"#method.put\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#method.put\" class=\"fn\">put</a>&lt;D&gt;(&amp;self, mh_code: <a class=\"enum\" href=\"multihash/multihash_impl/enum.Code.html\" title=\"enum multihash::multihash_impl::Code\">Code</a>, block: &amp;<a class=\"struct\" href=\"fvm_ipld_blockstore/block/struct.Block.html\" title=\"struct fvm_ipld_blockstore::block::Block\">Block</a>&lt;D&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cid/cid/struct.Cid.html\" title=\"struct cid::cid::Cid\">Cid</a>&lt;64&gt;, <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Puts the block into the blockstore, computing the hash with the specified multicodec. <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#method.put\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.put_many\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/fvm_ipld_blockstore/lib.rs.html#61-65\">source</a><a href=\"#method.put_many\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#method.put_many\" class=\"fn\">put_many</a>&lt;D, I&gt;(&amp;self, blocks: I) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (<a class=\"enum\" href=\"multihash/multihash_impl/enum.Code.html\" title=\"enum multihash::multihash_impl::Code\">Code</a>, <a class=\"struct\" href=\"fvm_ipld_blockstore/block/struct.Block.html\" title=\"struct fvm_ipld_blockstore::block::Block\">Block</a>&lt;D&gt;)&gt;,</span></h4></section></summary><div class='docblock'>Bulk put blocks into the blockstore. <a href=\"fvm_ipld_blockstore/trait.Blockstore.html#method.put_many\">Read more</a></div></details></div></details>","Blockstore","forest_filecoin::db::db_engine::Db"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GarbageCollectable-for-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#291-347\">source</a><a href=\"#impl-GarbageCollectable-for-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"forest_filecoin/db/trait.GarbageCollectable.html\" title=\"trait forest_filecoin::db::GarbageCollectable\">GarbageCollectable</a> for <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_keys\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#292-310\">source</a><a href=\"#method.get_keys\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/trait.GarbageCollectable.html#tymethod.get_keys\" class=\"fn\">get_keys</a>(&amp;self) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"type\" href=\"ahash/type.HashSet.html\" title=\"type ahash::HashSet\">HashSet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;&gt;</h4></section></summary><div class='docblock'>Gets all the keys currently in the database. <a href=\"forest_filecoin/db/trait.GarbageCollectable.html#tymethod.get_keys\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_keys\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#312-346\">source</a><a href=\"#method.remove_keys\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/trait.GarbageCollectable.html#tymethod.remove_keys\" class=\"fn\">remove_keys</a>(&amp;self, keys: <a class=\"type\" href=\"ahash/type.HashSet.html\" title=\"type ahash::HashSet\">HashSet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Removes all the keys marked for deletion. <a href=\"forest_filecoin/db/trait.GarbageCollectable.html#tymethod.remove_keys\">Read more</a></div></details></div></details>","GarbageCollectable","forest_filecoin::db::db_engine::Db"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BitswapStoreRead-for-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#211-234\">source</a><a href=\"#impl-BitswapStoreRead-for-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"forest_filecoin/libp2p_bitswap/store/trait.BitswapStoreRead.html\" title=\"trait forest_filecoin::libp2p_bitswap::store::BitswapStoreRead\">BitswapStoreRead</a> for <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#212-229\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/libp2p_bitswap/store/trait.BitswapStoreRead.html#tymethod.contains\" class=\"fn\">contains</a>(&amp;self, cid: &amp;<a class=\"type\" href=\"cid/type.Cid.html\" title=\"type cid::Cid\">Cid</a>) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>A have query needs to know if the block store contains the block.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#231-233\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/libp2p_bitswap/store/trait.BitswapStoreRead.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, cid: &amp;<a class=\"type\" href=\"cid/type.Cid.html\" title=\"type cid::Cid\">Cid</a>) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>A block query needs to retrieve the block from the store.</div></details></div></details>","BitswapStoreRead","forest_filecoin::db::db_engine::Db"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DBStatistics-for-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#246-266\">source</a><a href=\"#impl-DBStatistics-for-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"forest_filecoin/db/trait.DBStatistics.html\" title=\"trait forest_filecoin::db::DBStatistics\">DBStatistics</a> for <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_statistics\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#247-265\">source</a><a href=\"#method.get_statistics\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/trait.DBStatistics.html#method.get_statistics\" class=\"fn\">get_statistics</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></div></details>","DBStatistics","forest_filecoin::db::db_engine::Db"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SettingsStore-for-ParityDb\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#143-167\">source</a><a href=\"#impl-SettingsStore-for-ParityDb\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"forest_filecoin/db/trait.SettingsStore.html\" title=\"trait forest_filecoin::db::SettingsStore\">SettingsStore</a> for <a class=\"struct\" href=\"forest_filecoin/db/parity_db/struct.ParityDb.html\" title=\"struct forest_filecoin::db::parity_db::ParityDb\">ParityDb</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_bin\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#144-146\">source</a><a href=\"#method.read_bin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/trait.SettingsStore.html#tymethod.read_bin\" class=\"fn\">read_bin</a>(&amp;self, key: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Reads binary field from the Settings store. This should be used for\nnon-serializable data. For serializable data, use <a href=\"forest_filecoin/db/trait.SettingsStoreExt.html#tymethod.read_obj\" title=\"method forest_filecoin::db::SettingsStoreExt::read_obj\"><code>SettingsStoreExt::read_obj</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_bin\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#148-150\">source</a><a href=\"#method.write_bin\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/trait.SettingsStore.html#tymethod.write_bin\" class=\"fn\">write_bin</a>(&amp;self, key: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>, value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Writes binary field to the Settings store. This should be used for\nnon-serializable data. For serializable data, use <a href=\"forest_filecoin/db/trait.SettingsStoreExt.html#tymethod.write_obj\" title=\"method forest_filecoin::db::SettingsStoreExt::write_obj\"><code>SettingsStoreExt::write_obj</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exists\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#152-157\">source</a><a href=\"#method.exists\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/trait.SettingsStore.html#tymethod.exists\" class=\"fn\">exists</a>(&amp;self, key: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>Returns <code>Ok(true)</code> if key exists in store.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.setting_keys\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/db/parity_db.rs.html#159-166\">source</a><a href=\"#method.setting_keys\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"forest_filecoin/db/trait.SettingsStore.html#tymethod.setting_keys\" class=\"fn\">setting_keys</a>(&amp;self) -&gt; <a class=\"type\" href=\"anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;</h4></section></summary><div class='docblock'>Returns all setting keys.</div></details></div></details>","SettingsStore","forest_filecoin::db::db_engine::Db"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()