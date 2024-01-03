(function() {var type_impls = {
"rustyline":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Editor%3CH,+FileHistory%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#600-610\">source</a><a href=\"#impl-Editor%3CH,+FileHistory%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"rustyline/trait.Helper.html\" title=\"trait rustyline::Helper\">Helper</a>&gt; <a class=\"struct\" href=\"rustyline/struct.Editor.html\" title=\"struct rustyline::Editor\">Editor</a>&lt;H, <a class=\"type\" href=\"rustyline/history/type.DefaultHistory.html\" title=\"type rustyline::history::DefaultHistory\">DefaultHistory</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#602-604\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Create an editor with the default configuration</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_config\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#607-609\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.with_config\" class=\"fn\">with_config</a>(config: <a class=\"struct\" href=\"rustyline/config/struct.Config.html\" title=\"struct rustyline::config::Config\">Config</a>) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Create an editor with a specific configuration.</p>\n</div></details></div></details>",0,"rustyline::DefaultEditor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Editor%3CH,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#612-928\">source</a><a href=\"#impl-Editor%3CH,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"rustyline/trait.Helper.html\" title=\"trait rustyline::Helper\">Helper</a>, I: <a class=\"trait\" href=\"rustyline/history/trait.History.html\" title=\"trait rustyline::history::History\">History</a>&gt; <a class=\"struct\" href=\"rustyline/struct.Editor.html\" title=\"struct rustyline::Editor\">Editor</a>&lt;H, I&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_history\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#614-630\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.with_history\" class=\"fn\">with_history</a>(config: <a class=\"struct\" href=\"rustyline/config/struct.Config.html\" title=\"struct rustyline::config::Config\">Config</a>, history: I) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Create an editor with a custom history impl.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.readline\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#638-640\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.readline\" class=\"fn\">readline</a>(&amp;mut self, prompt: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>This method will read a line from STDIN and will display a <code>prompt</code>.</p>\n<p>It uses terminal-style interaction if <code>stdin</code> is connected to a\nterminal.\nOtherwise (e.g., if <code>stdin</code> is a pipe or the terminal is not supported),\nit uses file-style interaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.readline_with_initial\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#649-651\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.readline_with_initial\" class=\"fn\">readline_with_initial</a>(\n    &amp;mut self,\n    prompt: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    initial: (&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>)\n) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>This function behaves in the exact same manner as <code>readline</code>, except\nthat it pre-populates the input area.</p>\n<p>The text that resides in the input area is given as a 2-tuple.\nThe string on the left of the tuple is what will appear to the left of\nthe cursor and the string on the right is what will appear to the\nright of the cursor.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_history\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#801-803\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.load_history\" class=\"fn\">load_history</a>&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(&amp;mut self, path: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;P</a>) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Load the history from the specified file.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.save_history\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#806-808\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.save_history\" class=\"fn\">save_history</a>&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(&amp;mut self, path: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;P</a>) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Save the history in the specified file.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_history\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#811-813\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.append_history\" class=\"fn\">append_history</a>&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    path: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;P</a>\n) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Append new entries in the specified file.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_history_entry\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#816-818\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.add_history_entry\" class=\"fn\">add_history_entry</a>&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt;(\n    &amp;mut self,\n    line: S\n) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Add a new entry in the history.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear_history\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#821-823\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.clear_history\" class=\"fn\">clear_history</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Clear history.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.history_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#826-828\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.history_mut\" class=\"fn\">history_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a></h4></section></summary><div class=\"docblock\"><p>Return a mutable reference to the history object.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.history\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#831-833\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.history\" class=\"fn\">history</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;I</a></h4></section></summary><div class=\"docblock\"><p>Return an immutable reference to the history object.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_helper\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#837-839\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.set_helper\" class=\"fn\">set_helper</a>(&amp;mut self, helper: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;H&gt;)</h4></section></summary><div class=\"docblock\"><p>Register a callback function to be called for tab-completion\nor to show hints to the user at the right of the prompt.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.helper_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#842-844\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.helper_mut\" class=\"fn\">helper_mut</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Return a mutable reference to the helper.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.helper\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#847-849\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.helper\" class=\"fn\">helper</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;H</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Return an immutable reference to the helper.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bind_sequence\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#854-861\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.bind_sequence\" class=\"fn\">bind_sequence</a>&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"rustyline/enum.Event.html\" title=\"enum rustyline::Event\">Event</a>&gt;, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"rustyline/enum.EventHandler.html\" title=\"enum rustyline::EventHandler\">EventHandler</a>&gt;&gt;(\n    &amp;mut self,\n    key_seq: E,\n    handler: R\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"rustyline/enum.EventHandler.html\" title=\"enum rustyline::EventHandler\">EventHandler</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Bind a sequence to a command.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unbind_sequence\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#866-869\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.unbind_sequence\" class=\"fn\">unbind_sequence</a>&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"rustyline/enum.Event.html\" title=\"enum rustyline::Event\">Event</a>&gt;&gt;(\n    &amp;mut self,\n    key_seq: E\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"rustyline/enum.EventHandler.html\" title=\"enum rustyline::EventHandler\">EventHandler</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Remove a binding for the given sequence.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#888-893\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.iter\" class=\"fn\">iter</a>&lt;'a&gt;(\n    &amp;'a mut self,\n    prompt: &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt; + 'a</h4></section></summary><div class=\"docblock\"><p>Returns an iterator over edited lines.\nIterator ends at <a href=\"rustyline/error/enum.ReadlineError.html#variant.Eof\" title=\"variant rustyline::error::ReadlineError::Eof\">EOF</a>.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>rl = rustyline::DefaultEditor::new()<span class=\"question-mark\">?</span>;\n<span class=\"kw\">for </span>readline <span class=\"kw\">in </span>rl.iter(<span class=\"string\">&quot;&gt; &quot;</span>) {\n    <span class=\"kw\">match </span>readline {\n        <span class=\"prelude-val\">Ok</span>(line) =&gt; {\n            <span class=\"macro\">println!</span>(<span class=\"string\">&quot;Line: {}&quot;</span>, line);\n        }\n        <span class=\"prelude-val\">Err</span>(err) =&gt; {\n            <span class=\"macro\">println!</span>(<span class=\"string\">&quot;Error: {:?}&quot;</span>, err);\n            <span class=\"kw\">break</span>;\n        }\n    }\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#897-904\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.dimensions\" class=\"fn\">dimensions</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>)&gt;</h4></section></summary><div class=\"docblock\"><p>If output stream is a tty, this function returns its width and height as\na number of characters.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear_screen\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#907-914\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.clear_screen\" class=\"fn\">clear_screen</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Clear the screen.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_external_printer\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#917-919\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.create_external_printer\" class=\"fn\">create_external_printer</a>(\n    &amp;mut self\n) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;&lt;PosixTerminal as Term&gt;::ExternalPrinter&gt;</h4></section></summary><div class=\"docblock\"><p>Create an external printer</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_cursor_visibility\" class=\"method\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#922-927\">source</a><h4 class=\"code-header\">pub fn <a href=\"rustyline/struct.Editor.html#tymethod.set_cursor_visibility\" class=\"fn\">set_cursor_visibility</a>(\n    &amp;mut self,\n    visible: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>\n) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;PosixTerminal as Term&gt;::CursorGuard&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Change cursor visibility</p>\n</div></details></div></details>",0,"rustyline::DefaultEditor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Editor%3CH,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#956-963\">source</a><a href=\"#impl-Debug-for-Editor%3CH,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"rustyline/trait.Helper.html\" title=\"trait rustyline::Helper\">Helper</a>, I: <a class=\"trait\" href=\"rustyline/history/trait.History.html\" title=\"trait rustyline::history::History\">History</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"rustyline/struct.Editor.html\" title=\"struct rustyline::Editor\">Editor</a>&lt;H, I&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#957-962\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rustyline::DefaultEditor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Configurer-for-Editor%3CH,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#930-954\">source</a><a href=\"#impl-Configurer-for-Editor%3CH,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"rustyline/trait.Helper.html\" title=\"trait rustyline::Helper\">Helper</a>, I: <a class=\"trait\" href=\"rustyline/history/trait.History.html\" title=\"trait rustyline::history::History\">History</a>&gt; <a class=\"trait\" href=\"rustyline/config/trait.Configurer.html\" title=\"trait rustyline::config::Configurer\">Configurer</a> for <a class=\"struct\" href=\"rustyline/struct.Editor.html\" title=\"struct rustyline::Editor\">Editor</a>&lt;H, I&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.config_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#931-933\">source</a><a href=\"#method.config_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#tymethod.config_mut\" class=\"fn\">config_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"rustyline/config/struct.Config.html\" title=\"struct rustyline::config::Config\">Config</a></h4></section></summary><div class='docblock'><code>Config</code> accessor.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_max_history_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#935-938\">source</a><a href=\"#method.set_max_history_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_max_history_size\" class=\"fn\">set_max_history_size</a>(&amp;mut self, max_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Set the maximum length for the history.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_history_ignore_dups\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#940-943\">source</a><a href=\"#method.set_history_ignore_dups\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_history_ignore_dups\" class=\"fn\">set_history_ignore_dups</a>(&amp;mut self, yes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>) -&gt; <a class=\"type\" href=\"rustyline/type.Result.html\" title=\"type rustyline::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Tell if lines which match the previous history entry are saved or not\nin the history list. <a href=\"rustyline/config/trait.Configurer.html#method.set_history_ignore_dups\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_history_ignore_space\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#945-948\">source</a><a href=\"#method.set_history_ignore_space\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_history_ignore_space\" class=\"fn\">set_history_ignore_space</a>(&amp;mut self, yes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class='docblock'>Tell if lines which begin with a space character are saved or not in\nthe history list. <a href=\"rustyline/config/trait.Configurer.html#method.set_history_ignore_space\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_color_mode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/lib.rs.html#950-953\">source</a><a href=\"#method.set_color_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_color_mode\" class=\"fn\">set_color_mode</a>(&amp;mut self, color_mode: <a class=\"enum\" href=\"rustyline/config/enum.ColorMode.html\" title=\"enum rustyline::config::ColorMode\">ColorMode</a>)</h4></section></summary><div class='docblock'>Forces colorization on or off. <a href=\"rustyline/config/trait.Configurer.html#method.set_color_mode\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_completion_type\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#494-496\">source</a><a href=\"#method.set_completion_type\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_completion_type\" class=\"fn\">set_completion_type</a>(&amp;mut self, completion_type: <a class=\"enum\" href=\"rustyline/config/enum.CompletionType.html\" title=\"enum rustyline::config::CompletionType\">CompletionType</a>)</h4></section></summary><div class='docblock'>Set <code>completion_type</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_completion_prompt_limit\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#500-502\">source</a><a href=\"#method.set_completion_prompt_limit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_completion_prompt_limit\" class=\"fn\">set_completion_prompt_limit</a>(&amp;mut self, completion_prompt_limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class='docblock'>The number of possible completions that determines when the user is\nasked whether the list of possibilities should be displayed.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_keyseq_timeout\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#505-507\">source</a><a href=\"#method.set_keyseq_timeout\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_keyseq_timeout\" class=\"fn\">set_keyseq_timeout</a>(&amp;mut self, keyseq_timeout_ms: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.i32.html\">i32</a>)</h4></section></summary><div class='docblock'>Timeout for ambiguous key sequences in milliseconds.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_edit_mode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#510-516\">source</a><a href=\"#method.set_edit_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_edit_mode\" class=\"fn\">set_edit_mode</a>(&amp;mut self, edit_mode: <a class=\"enum\" href=\"rustyline/config/enum.EditMode.html\" title=\"enum rustyline::config::EditMode\">EditMode</a>)</h4></section></summary><div class='docblock'>Choose between Emacs or Vi mode.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_auto_add_history\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#521-523\">source</a><a href=\"#method.set_auto_add_history\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_auto_add_history\" class=\"fn\">set_auto_add_history</a>(&amp;mut self, yes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class='docblock'>Tell if lines are automatically added to the history. <a href=\"rustyline/config/trait.Configurer.html#method.set_auto_add_history\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_bell_style\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#526-528\">source</a><a href=\"#method.set_bell_style\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_bell_style\" class=\"fn\">set_bell_style</a>(&amp;mut self, bell_style: <a class=\"enum\" href=\"rustyline/config/enum.BellStyle.html\" title=\"enum rustyline::config::BellStyle\">BellStyle</a>)</h4></section></summary><div class='docblock'>Set bell style: beep, flash or nothing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_behavior\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#540-542\">source</a><a href=\"#method.set_behavior\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_behavior\" class=\"fn\">set_behavior</a>(&amp;mut self, behavior: <a class=\"enum\" href=\"rustyline/config/enum.Behavior.html\" title=\"enum rustyline::config::Behavior\">Behavior</a>)</h4></section></summary><div class='docblock'>Whether to use stdio or not <a href=\"rustyline/config/trait.Configurer.html#method.set_behavior\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_tab_stop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#547-549\">source</a><a href=\"#method.set_tab_stop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_tab_stop\" class=\"fn\">set_tab_stop</a>(&amp;mut self, tab_stop: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class='docblock'>Horizontal space taken by a tab. <a href=\"rustyline/config/trait.Configurer.html#method.set_tab_stop\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_check_cursor_position\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#554-556\">source</a><a href=\"#method.set_check_cursor_position\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_check_cursor_position\" class=\"fn\">set_check_cursor_position</a>(&amp;mut self, yes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class='docblock'>Check if cursor position is at leftmost before displaying prompt. <a href=\"rustyline/config/trait.Configurer.html#method.set_check_cursor_position\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_indent_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#560-562\">source</a><a href=\"#method.set_indent_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.set_indent_size\" class=\"fn\">set_indent_size</a>(&amp;mut self, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class='docblock'>Indentation size for indent/dedent commands <a href=\"rustyline/config/trait.Configurer.html#method.set_indent_size\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.enable_bracketed_paste\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustyline/config.rs.html#567-569\">source</a><a href=\"#method.enable_bracketed_paste\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rustyline/config/trait.Configurer.html#method.enable_bracketed_paste\" class=\"fn\">enable_bracketed_paste</a>(&amp;mut self, enabled: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class='docblock'>Enable or disable bracketed paste on unix platform <a href=\"rustyline/config/trait.Configurer.html#method.enable_bracketed_paste\">Read more</a></div></details></div></details>","Configurer","rustyline::DefaultEditor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()