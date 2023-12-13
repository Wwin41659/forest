(function() {var implementors = {
"bincode":[["impl&lt;'de, 'a, R, O&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"bincode/de/struct.Deserializer.html\" title=\"struct bincode::de::Deserializer\">Deserializer</a>&lt;R, O&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"bincode/de/read/trait.BincodeRead.html\" title=\"trait bincode::de::read::BincodeRead\">BincodeRead</a>&lt;'de&gt;,\n    O: <a class=\"trait\" href=\"bincode/config/trait.Options.html\" title=\"trait bincode::config::Options\">Options</a>,</span>"]],
"config":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"config/struct.Config.html\" title=\"struct config::Config\">Config</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"config/struct.Value.html\" title=\"struct config::Value\">Value</a>"]],
"erased_serde":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + '_)"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + '_&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + '_)"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + '_)"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + '_&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;mut (dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + '_)"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + '_&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"erased_serde/trait.Deserializer.html\" title=\"trait erased_serde::Deserializer\">Deserializer</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + '_&gt;"]],
"forest_filecoin":[["impl&lt;'de, 'a, R: <a class=\"trait\" href=\"cbor4ii/core/dec/trait.Read.html\" title=\"trait cbor4ii::core::dec::Read\">Read</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"forest_filecoin/utils/encoding/fallback_de_ipld_dagcbor/struct.Deserializer.html\" title=\"struct forest_filecoin::utils::encoding::fallback_de_ipld_dagcbor::Deserializer\">Deserializer</a>&lt;R&gt;"],["impl&lt;'de, 'a, R: <a class=\"trait\" href=\"cbor4ii/core/dec/trait.Read.html\" title=\"trait cbor4ii::core::dec::Read\">Read</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"forest_filecoin/utils/encoding/fallback_de_ipld_dagcbor/struct.CidDeserializer.html\" title=\"struct forest_filecoin::utils::encoding::fallback_de_ipld_dagcbor::CidDeserializer\">CidDeserializer</a>&lt;'a, R&gt;"]],
"fvm_ipld_encoding":[],
"libipld_core":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"enum\" href=\"libipld_core/ipld/enum.Ipld.html\" title=\"enum libipld_core::ipld::Ipld\">Ipld</a>"]],
"postcard":[["impl&lt;'de, 'a, F: <a class=\"trait\" href=\"postcard/de_flavors/trait.Flavor.html\" title=\"trait postcard::de_flavors::Flavor\">Flavor</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"postcard/struct.Deserializer.html\" title=\"struct postcard::Deserializer\">Deserializer</a>&lt;'de, F&gt;"]],
"serde":[],
"serde_json":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'de <a class=\"struct\" href=\"serde_json/value/struct.RawValue.html\" title=\"struct serde_json::value::RawValue\">RawValue</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>"],["impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a <a class=\"struct\" href=\"serde_json/value/struct.Number.html\" title=\"struct serde_json::value::Number\">Number</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'de <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>"],["impl&lt;'de, 'a, R: <a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"serde_json/struct.Deserializer.html\" title=\"struct serde_json::Deserializer\">Deserializer</a>&lt;R&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>"]],
"serde_path_to_error":[["impl&lt;'a, 'b, 'de, D&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_path_to_error/struct.Deserializer.html\" title=\"struct serde_path_to_error::Deserializer\">Deserializer</a>&lt;'a, 'b, D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span>"]],
"serde_urlencoded":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_urlencoded/struct.Deserializer.html\" title=\"struct serde_urlencoded::Deserializer\">Deserializer</a>&lt;'de&gt;"]],
"serde_yaml":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_yaml/struct.Deserializer.html\" title=\"struct serde_yaml::Deserializer\">Deserializer</a>&lt;'de&gt;"],["impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a <a class=\"struct\" href=\"serde_yaml/value/struct.Number.html\" title=\"struct serde_yaml::value::Number\">Number</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'de <a class=\"struct\" href=\"serde_yaml/value/struct.TaggedValue.html\" title=\"struct serde_yaml::value::TaggedValue\">TaggedValue</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_yaml/value/struct.TaggedValue.html\" title=\"struct serde_yaml::value::TaggedValue\">TaggedValue</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'de <a class=\"enum\" href=\"serde_yaml/enum.Value.html\" title=\"enum serde_yaml::Value\">Value</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"enum\" href=\"serde_yaml/enum.Value.html\" title=\"enum serde_yaml::Value\">Value</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_yaml/value/struct.Number.html\" title=\"struct serde_yaml::value::Number\">Number</a>"]],
"toml":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"type\" href=\"toml/type.Table.html\" title=\"type toml::Table\">Table</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"enum\" href=\"toml/enum.Value.html\" title=\"enum toml::Value\">Value</a>"],["impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"toml/struct.Deserializer.html\" title=\"struct toml::Deserializer\">Deserializer</a>&lt;'a&gt;"],["impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"toml/de/struct.ValueDeserializer.html\" title=\"struct toml::de::ValueDeserializer\">ValueDeserializer</a>&lt;'a&gt;"]],
"toml_edit":[["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"toml_edit/de/struct.Deserializer.html\" title=\"struct toml_edit::de::Deserializer\">Deserializer</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"toml_edit/de/struct.ValueDeserializer.html\" title=\"struct toml_edit::de::ValueDeserializer\">ValueDeserializer</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()