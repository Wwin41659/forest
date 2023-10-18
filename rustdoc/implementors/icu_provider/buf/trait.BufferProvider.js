(function() {var implementors = {
"icu_provider":[],
"icu_provider_adapters":[["impl&lt;P&gt; <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a> for <a class=\"struct\" href=\"icu_provider_adapters/fallback/struct.LocaleFallbackProvider.html\" title=\"struct icu_provider_adapters::fallback::LocaleFallbackProvider\">LocaleFallbackProvider</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a>,</span>"],["impl&lt;P0: <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a>, P1: <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a>&gt; <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a> for <a class=\"enum\" href=\"icu_provider_adapters/either/enum.EitherProvider.html\" title=\"enum icu_provider_adapters::either::EitherProvider\">EitherProvider</a>&lt;P0, P1&gt;"],["impl&lt;P0, P1, F&gt; <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a> for <a class=\"struct\" href=\"icu_provider_adapters/fork/struct.ForkByErrorProvider.html\" title=\"struct icu_provider_adapters::fork::ForkByErrorProvider\">ForkByErrorProvider</a>&lt;P0, P1, F&gt;<span class=\"where fmt-newline\">where\n    P0: <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a>,\n    P1: <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a>,\n    F: <a class=\"trait\" href=\"icu_provider_adapters/fork/predicates/trait.ForkByErrorPredicate.html\" title=\"trait icu_provider_adapters::fork::predicates::ForkByErrorPredicate\">ForkByErrorPredicate</a>,</span>"],["impl <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a> for <a class=\"struct\" href=\"icu_provider_adapters/empty/struct.EmptyDataProvider.html\" title=\"struct icu_provider_adapters::empty::EmptyDataProvider\">EmptyDataProvider</a>"],["impl&lt;P, F&gt; <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a> for <a class=\"struct\" href=\"icu_provider_adapters/fork/struct.MultiForkByErrorProvider.html\" title=\"struct icu_provider_adapters::fork::MultiForkByErrorProvider\">MultiForkByErrorProvider</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a>,\n    F: <a class=\"trait\" href=\"icu_provider_adapters/fork/predicates/trait.ForkByErrorPredicate.html\" title=\"trait icu_provider_adapters::fork::predicates::ForkByErrorPredicate\">ForkByErrorPredicate</a>,</span>"],["impl&lt;D, F&gt; <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a> for <a class=\"struct\" href=\"icu_provider_adapters/filter/struct.RequestFilterDataProvider.html\" title=\"struct icu_provider_adapters::filter::RequestFilterDataProvider\">RequestFilterDataProvider</a>&lt;D, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"icu_provider/request/struct.DataRequest.html\" title=\"struct icu_provider::request::DataRequest\">DataRequest</a>&lt;'_&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.73.0/std/primitive.bool.html\">bool</a>,\n    D: <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a>,</span>"]],
"icu_provider_blob":[["impl <a class=\"trait\" href=\"icu_provider/buf/trait.BufferProvider.html\" title=\"trait icu_provider::buf::BufferProvider\">BufferProvider</a> for <a class=\"struct\" href=\"icu_provider_blob/struct.BlobDataProvider.html\" title=\"struct icu_provider_blob::BlobDataProvider\">BlobDataProvider</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()