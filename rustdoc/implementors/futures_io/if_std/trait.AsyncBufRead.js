(function() {var implementors = {
"futures":[],
"futures_io":[],
"futures_lite":[["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Take.html\" title=\"struct futures_lite::io::Take\">Take</a>&lt;R&gt;"],["impl&lt;R1: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>, R2: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Chain.html\" title=\"struct futures_lite::io::Chain\">Chain</a>&lt;R1, R2&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BufReader.html\" title=\"struct futures_lite::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Empty.html\" title=\"struct futures_lite::io::Empty\">Empty</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"futures_util":[["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>]&gt;,</span>"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Empty.html\" title=\"struct futures_util::io::Empty\">Empty</a>"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Chain.html\" title=\"struct futures_util::io::Chain\">Chain</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,\n    U: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,</span>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>,</span>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Take.html\" title=\"struct futures_util::io::Take\">Take</a>&lt;R&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,</span>"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncBufRead.html\" title=\"trait futures_util::io::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufWriter.html\" title=\"struct futures_util::io::BufWriter\">BufWriter</a>&lt;W&gt;"]],
"tokio_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncBufRead.html\" title=\"trait futures_io::if_std::AsyncBufRead\">AsyncBufRead</a> for <a class=\"struct\" href=\"tokio_util/compat/struct.Compat.html\" title=\"struct tokio_util::compat::Compat\">Compat</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"tokio/io/async_buf_read/trait.AsyncBufRead.html\" title=\"trait tokio::io::async_buf_read::AsyncBufRead\">AsyncBufRead</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()