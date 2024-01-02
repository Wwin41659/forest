(function() {var type_impls = {
"backoff":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExponentialBackoffBuilder%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#175-230\">source</a><a href=\"#impl-ExponentialBackoffBuilder%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"struct\" href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html\" title=\"struct backoff::exponential::ExponentialBackoffBuilder\">ExponentialBackoffBuilder</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"backoff/trait.Clock.html\" title=\"trait backoff::Clock\">Clock</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#179-181\">source</a><h4 class=\"code-header\">pub fn <a href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_initial_interval\" class=\"method\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#184-187\">source</a><h4 class=\"code-header\">pub fn <a href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html#tymethod.with_initial_interval\" class=\"fn\">with_initial_interval</a>(&amp;mut self, initial_interval: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Self</a></h4></section></summary><div class=\"docblock\"><p>The initial retry interval.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_randomization_factor\" class=\"method\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#193-196\">source</a><h4 class=\"code-header\">pub fn <a href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html#tymethod.with_randomization_factor\" class=\"fn\">with_randomization_factor</a>(\n    &amp;mut self,\n    randomization_factor: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f64.html\">f64</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Self</a></h4></section></summary><div class=\"docblock\"><p>The randomization factor to use for creating a range around the retry interval.</p>\n<p>A randomization factor of 0.5 results in a random period ranging between 50% below and 50%\nabove the retry interval.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_multiplier\" class=\"method\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#199-202\">source</a><h4 class=\"code-header\">pub fn <a href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html#tymethod.with_multiplier\" class=\"fn\">with_multiplier</a>(&amp;mut self, multiplier: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f64.html\">f64</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Self</a></h4></section></summary><div class=\"docblock\"><p>The value to multiply the current interval with for each retry attempt.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_max_interval\" class=\"method\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#206-209\">source</a><h4 class=\"code-header\">pub fn <a href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html#tymethod.with_max_interval\" class=\"fn\">with_max_interval</a>(&amp;mut self, max_interval: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Self</a></h4></section></summary><div class=\"docblock\"><p>The maximum value of the back off period. Once the retry interval reaches this\nvalue it stops increasing.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_max_elapsed_time\" class=\"method\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#213-216\">source</a><h4 class=\"code-header\">pub fn <a href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html#tymethod.with_max_elapsed_time\" class=\"fn\">with_max_elapsed_time</a>(\n    &amp;mut self,\n    max_elapsed_time: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Self</a></h4></section></summary><div class=\"docblock\"><p>The maximum elapsed time after instantiating <a href=\"struct.ExponentialBackoff.html\"><code>ExponentialBackfff</code></a> or calling\n<a href=\"trait.Backoff.html#method.reset\"><code>reset</code></a> after which <a href=\"../trait.Backoff.html#method.reset\"><code>next_backoff</code></a> returns <code>None</code>.</p>\n</div></details><section id=\"method.build\" class=\"method\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#218-229\">source</a><h4 class=\"code-header\">pub fn <a href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html#tymethod.build\" class=\"fn\">build</a>(&amp;self) -&gt; <a class=\"struct\" href=\"backoff/exponential/struct.ExponentialBackoff.html\" title=\"struct backoff::exponential::ExponentialBackoff\">ExponentialBackoff</a>&lt;C&gt;</h4></section></div></details>",0,"backoff::ExponentialBackoffBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ExponentialBackoffBuilder%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#152\">source</a><a href=\"#impl-Debug-for-ExponentialBackoffBuilder%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html\" title=\"struct backoff::exponential::ExponentialBackoffBuilder\">ExponentialBackoffBuilder</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#152\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","backoff::ExponentialBackoffBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-ExponentialBackoffBuilder%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#162-173\">source</a><a href=\"#impl-Default-for-ExponentialBackoffBuilder%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"backoff/exponential/struct.ExponentialBackoffBuilder.html\" title=\"struct backoff::exponential::ExponentialBackoffBuilder\">ExponentialBackoffBuilder</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/backoff/exponential.rs.html#163-172\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","backoff::ExponentialBackoffBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()