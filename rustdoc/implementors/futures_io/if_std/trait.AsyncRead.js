(function() {var implementors = {
"async_fs":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_fs/struct.File.html\" title=\"struct async_fs::File\">File</a>"]],
"blocking":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"blocking/struct.Unblock.html\" title=\"struct blocking::Unblock\">Unblock</a>&lt;T&gt;"]],
"futures":[],
"futures_io":[],
"futures_lite":[["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Take.html\" title=\"struct futures_lite::io::Take\">Take</a>&lt;R&gt;"],["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.ReadHalf.html\" title=\"struct futures_lite::io::ReadHalf\">ReadHalf</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Empty.html\" title=\"struct futures_lite::io::Empty\">Empty</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Repeat.html\" title=\"struct futures_lite::io::Repeat\">Repeat</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.AssertAsync.html\" title=\"struct futures_lite::io::AssertAsync\">AssertAsync</a>&lt;T&gt;"],["impl&lt;R1: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>, R2: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Chain.html\" title=\"struct futures_lite::io::Chain\">Chain</a>&lt;R1, R2&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Bytes.html\" title=\"struct futures_lite::io::Bytes\">Bytes</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BufReader.html\" title=\"struct futures_lite::io::BufReader\">BufReader</a>&lt;R&gt;"]],
"futures_util":[["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReadHalf.html\" title=\"struct futures_util::io::ReadHalf\">ReadHalf</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Empty.html\" title=\"struct futures_util::io::Empty\">Empty</a>"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>]&gt;,</span>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,</span>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Take.html\" title=\"struct futures_util::io::Take\">Take</a>&lt;R&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Repeat.html\" title=\"struct futures_util::io::Repeat\">Repeat</a>"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Chain.html\" title=\"struct futures_util::io::Chain\">Chain</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,\n    U: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,</span>"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufWriter.html\" title=\"struct futures_util::io::BufWriter\">BufWriter</a>&lt;W&gt;"]],
"libp2p_core":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_core/muxing/struct.SubstreamBox.html\" title=\"struct libp2p_core::muxing::SubstreamBox\">SubstreamBox</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_core/transport/dummy/struct.DummyStream.html\" title=\"struct libp2p_core::transport::dummy::DummyStream\">DummyStream</a>"]],
"libp2p_noise":[["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_noise/struct.Output.html\" title=\"struct libp2p_noise::Output\">Output</a>&lt;T&gt;"]],
"libp2p_swarm":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_swarm/struct.Stream.html\" title=\"struct libp2p_swarm::Stream\">Stream</a>"]],
"libp2p_tcp":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_tcp/tokio/struct.TcpStream.html\" title=\"struct libp2p_tcp::tokio::TcpStream\">TcpStream</a>"]],
"libp2p_yamux":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_yamux/struct.Stream.html\" title=\"struct libp2p_yamux::Stream\">Stream</a>"]],
"multistream_select":[["impl&lt;TInner&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"multistream_select/struct.Negotiated.html\" title=\"struct multistream_select::Negotiated\">Negotiated</a>&lt;TInner&gt;<span class=\"where fmt-newline\">where\n    TInner: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"piper":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"piper/struct.Reader.html\" title=\"struct piper::Reader\">Reader</a>"]],
"rw_stream_sink":[["impl&lt;S&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"rw_stream_sink/struct.RwStreamSink.html\" title=\"struct rw_stream_sink::RwStreamSink\">RwStreamSink</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    &lt;S as <a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>&gt;::<a class=\"associatedtype\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_core::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>]&gt;,</span>"]],
"tokio_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_util/compat/struct.Compat.html\" title=\"struct tokio_util::compat::Compat\">Compat</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,</span>"]],
"yamux":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"yamux/struct.Stream.html\" title=\"struct yamux::Stream\">Stream</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()