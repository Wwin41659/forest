(function() {var implementors = {
"icu_provider":[],
"icu_provider_adapters":[["impl&lt;D, F, M&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt; for <a class=\"struct\" href=\"icu_provider_adapters/filter/struct.RequestFilterDataProvider.html\" title=\"struct icu_provider_adapters::filter::RequestFilterDataProvider\">RequestFilterDataProvider</a>&lt;D, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"icu_provider/request/struct.DataRequest.html\" title=\"struct icu_provider::request::DataRequest\">DataRequest</a>&lt;'_&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.bool.html\">bool</a>,\n    M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,\n    D: <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt;,</span>"],["impl&lt;P, M&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt; for <a class=\"struct\" href=\"icu_provider_adapters/fallback/struct.LocaleFallbackProvider.html\" title=\"struct icu_provider_adapters::fallback::LocaleFallbackProvider\">LocaleFallbackProvider</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt;,\n    M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,</span>"],["impl&lt;M, P0, P1, F&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt; for <a class=\"struct\" href=\"icu_provider_adapters/fork/struct.ForkByErrorProvider.html\" title=\"struct icu_provider_adapters::fork::ForkByErrorProvider\">ForkByErrorProvider</a>&lt;P0, P1, F&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,\n    P0: <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt;,\n    P1: <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt;,\n    F: <a class=\"trait\" href=\"icu_provider_adapters/fork/predicates/trait.ForkByErrorPredicate.html\" title=\"trait icu_provider_adapters::fork::predicates::ForkByErrorPredicate\">ForkByErrorPredicate</a>,</span>"],["impl&lt;M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>, P0: <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt;, P1: <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt;&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt; for <a class=\"enum\" href=\"icu_provider_adapters/either/enum.EitherProvider.html\" title=\"enum icu_provider_adapters::either::EitherProvider\">EitherProvider</a>&lt;P0, P1&gt;"],["impl&lt;M&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt; for <a class=\"struct\" href=\"icu_provider_adapters/empty/struct.EmptyDataProvider.html\" title=\"struct icu_provider_adapters::empty::EmptyDataProvider\">EmptyDataProvider</a><span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,</span>"],["impl&lt;M, P, F&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt; for <a class=\"struct\" href=\"icu_provider_adapters/fork/struct.MultiForkByErrorProvider.html\" title=\"struct icu_provider_adapters::fork::MultiForkByErrorProvider\">MultiForkByErrorProvider</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,\n    P: <a class=\"trait\" href=\"icu_provider/data_provider/trait.DynamicDataProvider.html\" title=\"trait icu_provider::data_provider::DynamicDataProvider\">DynamicDataProvider</a>&lt;M&gt;,\n    F: <a class=\"trait\" href=\"icu_provider_adapters/fork/predicates/trait.ForkByErrorPredicate.html\" title=\"trait icu_provider_adapters::fork::predicates::ForkByErrorPredicate\">ForkByErrorPredicate</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()