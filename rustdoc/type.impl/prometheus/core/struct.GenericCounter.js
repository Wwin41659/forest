(function() {var type_impls = {
"prometheus":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericCounter%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#38-88\">source</a><a href=\"#impl-GenericCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"prometheus/core/trait.Atomic.html\" title=\"trait prometheus::core::Atomic\">Atomic</a>&gt; <a class=\"struct\" href=\"prometheus/core/struct.GenericCounter.html\" title=\"struct prometheus::core::GenericCounter\">GenericCounter</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#40-43\">source</a><h4 class=\"code-header\">pub fn <a href=\"prometheus/core/struct.GenericCounter.html#tymethod.new\" class=\"fn\">new</a>&lt;S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;, S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(\n    name: S1,\n    help: S2\n) -&gt; <a class=\"type\" href=\"prometheus/type.Result.html\" title=\"type prometheus::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Create a <a href=\"prometheus/core/struct.GenericCounter.html\" title=\"struct prometheus::core::GenericCounter\"><code>GenericCounter</code></a> with the <code>name</code> and <code>help</code> arguments.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_opts\" class=\"method\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#46-48\">source</a><h4 class=\"code-header\">pub fn <a href=\"prometheus/core/struct.GenericCounter.html#tymethod.with_opts\" class=\"fn\">with_opts</a>(opts: <a class=\"struct\" href=\"prometheus/core/struct.Opts.html\" title=\"struct prometheus::core::Opts\">Opts</a>) -&gt; <a class=\"type\" href=\"prometheus/type.Result.html\" title=\"type prometheus::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Create a <a href=\"prometheus/core/struct.GenericCounter.html\" title=\"struct prometheus::core::GenericCounter\"><code>GenericCounter</code></a> with the <code>opts</code> options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inc_by\" class=\"method\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#61-64\">source</a><h4 class=\"code-header\">pub fn <a href=\"prometheus/core/struct.GenericCounter.html#tymethod.inc_by\" class=\"fn\">inc_by</a>(&amp;self, v: P::<a class=\"associatedtype\" href=\"prometheus/core/trait.Atomic.html#associatedtype.T\" title=\"type prometheus::core::Atomic::T\">T</a>)</h4></section></summary><div class=\"docblock\"><p>Increase the given value to the counter.</p>\n<h5 id=\"panics\"><a href=\"#panics\">Panics</a></h5>\n<p>Panics in debug build if the value is &lt; 0.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inc\" class=\"method\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#68-70\">source</a><h4 class=\"code-header\">pub fn <a href=\"prometheus/core/struct.GenericCounter.html#tymethod.inc\" class=\"fn\">inc</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Increase the counter by 1.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#74-76\">source</a><h4 class=\"code-header\">pub fn <a href=\"prometheus/core/struct.GenericCounter.html#tymethod.get\" class=\"fn\">get</a>(&amp;self) -&gt; P::<a class=\"associatedtype\" href=\"prometheus/core/trait.Atomic.html#associatedtype.T\" title=\"type prometheus::core::Atomic::T\">T</a></h4></section></summary><div class=\"docblock\"><p>Return the counter value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#80-82\">source</a><h4 class=\"code-header\">pub fn <a href=\"prometheus/core/struct.GenericCounter.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Restart the counter, resetting its value back to 0.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.local\" class=\"method\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#85-87\">source</a><h4 class=\"code-header\">pub fn <a href=\"prometheus/core/struct.GenericCounter.html#tymethod.local\" class=\"fn\">local</a>(&amp;self) -&gt; <a class=\"struct\" href=\"prometheus/core/struct.GenericLocalCounter.html\" title=\"struct prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;</h4></section></summary><div class=\"docblock\"><p>Return a <a href=\"prometheus/core/struct.GenericLocalCounter.html\" title=\"struct prometheus::core::GenericLocalCounter\"><code>GenericLocalCounter</code></a> for single thread usage.</p>\n</div></details></div></details>",0,"prometheus::counter::Counter","prometheus::counter::IntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Metric-for-GenericCounter%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#100-104\">source</a><a href=\"#impl-Metric-for-GenericCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"prometheus/core/trait.Atomic.html\" title=\"trait prometheus::core::Atomic\">Atomic</a>&gt; <a class=\"trait\" href=\"prometheus/core/trait.Metric.html\" title=\"trait prometheus::core::Metric\">Metric</a> for <a class=\"struct\" href=\"prometheus/core/struct.GenericCounter.html\" title=\"struct prometheus::core::GenericCounter\">GenericCounter</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.metric\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#101-103\">source</a><a href=\"#method.metric\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"prometheus/core/trait.Metric.html#tymethod.metric\" class=\"fn\">metric</a>(&amp;self) -&gt; <a class=\"struct\" href=\"prometheus/proto/struct.Metric.html\" title=\"struct prometheus::proto::Metric\">Metric</a></h4></section></summary><div class='docblock'>Return the protocol Metric.</div></details></div></details>","Metric","prometheus::counter::Counter","prometheus::counter::IntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericCounter%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#18\">source</a><a href=\"#impl-Debug-for-GenericCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"prometheus/core/trait.Atomic.html\" title=\"trait prometheus::core::Atomic\">Atomic</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"prometheus/core/struct.GenericCounter.html\" title=\"struct prometheus::core::GenericCounter\">GenericCounter</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#18\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","prometheus::counter::Counter","prometheus::counter::IntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Collector-for-GenericCounter%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#90-98\">source</a><a href=\"#impl-Collector-for-GenericCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"prometheus/core/trait.Atomic.html\" title=\"trait prometheus::core::Atomic\">Atomic</a>&gt; <a class=\"trait\" href=\"prometheus/core/trait.Collector.html\" title=\"trait prometheus::core::Collector\">Collector</a> for <a class=\"struct\" href=\"prometheus/core/struct.GenericCounter.html\" title=\"struct prometheus::core::GenericCounter\">GenericCounter</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.desc\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#91-93\">source</a><a href=\"#method.desc\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"prometheus/core/trait.Collector.html#tymethod.desc\" class=\"fn\">desc</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;<a class=\"struct\" href=\"prometheus/core/struct.Desc.html\" title=\"struct prometheus::core::Desc\">Desc</a>&gt;</h4></section></summary><div class='docblock'>Return descriptors for metrics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.collect\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#95-97\">source</a><a href=\"#method.collect\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"prometheus/core/trait.Collector.html#tymethod.collect\" class=\"fn\">collect</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"prometheus/proto/struct.MetricFamily.html\" title=\"struct prometheus::proto::MetricFamily\">MetricFamily</a>&gt;</h4></section></summary><div class='docblock'>Collect metrics.</div></details></div></details>","Collector","prometheus::counter::Counter","prometheus::counter::IntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericCounter%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#30-36\">source</a><a href=\"#impl-Clone-for-GenericCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"prometheus/core/trait.Atomic.html\" title=\"trait prometheus::core::Atomic\">Atomic</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"prometheus/core/struct.GenericCounter.html\" title=\"struct prometheus::core::GenericCounter\">GenericCounter</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/prometheus/counter.rs.html#31-35\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","prometheus::counter::Counter","prometheus::counter::IntCounter"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()