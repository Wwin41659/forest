(function() {var type_impls = {
"forest_filecoin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-CborRequestResponse%3CP,+RQ,+RS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#23-31\">source</a><a href=\"#impl-Default-for-CborRequestResponse%3CP,+RQ,+RS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P, RQ, RS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"forest_filecoin/libp2p/rpc/struct.CborRequestResponse.html\" title=\"struct forest_filecoin::libp2p::rpc::CborRequestResponse\">CborRequestResponse</a>&lt;P, RQ, RS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#24-30\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","forest_filecoin::libp2p::chain_exchange::ChainExchangeCodec","forest_filecoin::libp2p::hello::codec::HelloCodec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CborRequestResponse%3CP,+RQ,+RS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#16\">source</a><a href=\"#impl-Clone-for-CborRequestResponse%3CP,+RQ,+RS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, RQ: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, RS: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"forest_filecoin/libp2p/rpc/struct.CborRequestResponse.html\" title=\"struct forest_filecoin::libp2p::rpc::CborRequestResponse\">CborRequestResponse</a>&lt;P, RQ, RS&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#16\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"forest_filecoin/libp2p/rpc/struct.CborRequestResponse.html\" title=\"struct forest_filecoin::libp2p::rpc::CborRequestResponse\">CborRequestResponse</a>&lt;P, RQ, RS&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","forest_filecoin::libp2p::chain_exchange::ChainExchangeCodec","forest_filecoin::libp2p::hello::codec::HelloCodec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Codec-for-CborRequestResponse%3CP,+RQ,+RS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#72-125\">source</a><a href=\"#impl-Codec-for-CborRequestResponse%3CP,+RQ,+RS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P, RQ, RS&gt; <a class=\"trait\" href=\"libp2p_request_response/codec/trait.Codec.html\" title=\"trait libp2p_request_response::codec::Codec\">Codec</a> for <a class=\"struct\" href=\"forest_filecoin/libp2p/rpc/struct.CborRequestResponse.html\" title=\"struct forest_filecoin::libp2p::rpc::CborRequestResponse\">CborRequestResponse</a>&lt;P, RQ, RS&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    RQ: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    RS: <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Protocol\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Protocol\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Protocol\" class=\"associatedtype\">Protocol</a> = P</h4></section></summary><div class='docblock'>The type of protocol(s) or protocol versions being negotiated.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Request\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Request\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Request\" class=\"associatedtype\">Request</a> = RQ</h4></section></summary><div class='docblock'>The type of inbound and outbound requests.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Response\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Response\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Response\" class=\"associatedtype\">Response</a> = RS</h4></section></summary><div class='docblock'>The type of inbound and outbound responses.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_request\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#82-87\">source</a><a href=\"#method.read_request\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p_request_response/codec/trait.Codec.html#tymethod.read_request\" class=\"fn\">read_request</a>&lt;'life0, 'life1, 'life2, 'async_trait, T&gt;(\n    &amp;'life0 mut self,\n    _: &amp;'life1 Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Protocol\" title=\"type libp2p_request_response::codec::Codec::Protocol\">Protocol</a>,\n    io: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'life2 mut T</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Request\" title=\"type libp2p_request_response::codec::Codec::Request\">Request</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait,\n    Self: 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,\n    'life2: 'async_trait,</span></h4></section></summary><div class='docblock'>Reads a request from the given I/O stream according to the\nnegotiated protocol.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_response\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#89-100\">source</a><a href=\"#method.read_response\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p_request_response/codec/trait.Codec.html#tymethod.read_response\" class=\"fn\">read_response</a>&lt;'life0, 'life1, 'life2, 'async_trait, T&gt;(\n    &amp;'life0 mut self,\n    _: &amp;'life1 Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Protocol\" title=\"type libp2p_request_response::codec::Codec::Protocol\">Protocol</a>,\n    io: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'life2 mut T</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Response\" title=\"type libp2p_request_response::codec::Codec::Response\">Response</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait,\n    Self: 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,\n    'life2: 'async_trait,</span></h4></section></summary><div class='docblock'>Reads a response from the given I/O stream according to the\nnegotiated protocol.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_request\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#102-112\">source</a><a href=\"#method.write_request\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p_request_response/codec/trait.Codec.html#tymethod.write_request\" class=\"fn\">write_request</a>&lt;'life0, 'life1, 'life2, 'async_trait, T&gt;(\n    &amp;'life0 mut self,\n    _: &amp;'life1 Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Protocol\" title=\"type libp2p_request_response::codec::Codec::Protocol\">Protocol</a>,\n    io: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'life2 mut T</a>,\n    req: Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Request\" title=\"type libp2p_request_response::codec::Codec::Request\">Request</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait,\n    Self: 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,\n    'life2: 'async_trait,</span></h4></section></summary><div class='docblock'>Writes a request to the given I/O stream according to the\nnegotiated protocol.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_response\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/forest_filecoin/libp2p/rpc/mod.rs.html#114-124\">source</a><a href=\"#method.write_response\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p_request_response/codec/trait.Codec.html#tymethod.write_response\" class=\"fn\">write_response</a>&lt;'life0, 'life1, 'life2, 'async_trait, T&gt;(\n    &amp;'life0 mut self,\n    _: &amp;'life1 Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Protocol\" title=\"type libp2p_request_response::codec::Codec::Protocol\">Protocol</a>,\n    io: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'life2 mut T</a>,\n    res: Self::<a class=\"associatedtype\" href=\"libp2p_request_response/codec/trait.Codec.html#associatedtype.Response\" title=\"type libp2p_request_response::codec::Codec::Response\">Response</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait,\n    Self: 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,\n    'life2: 'async_trait,</span></h4></section></summary><div class='docblock'>Writes a response to the given I/O stream according to the\nnegotiated protocol.</div></details></div></details>","Codec","forest_filecoin::libp2p::chain_exchange::ChainExchangeCodec","forest_filecoin::libp2p::hello::codec::HelloCodec"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()