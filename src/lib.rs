#[allow(unused)]
mod jsonrpc_types;
#[allow(unused)]
mod openrpc_types;

mod axum_like;
mod axum_like2;
mod axum_like3;
mod into_rpc_service;
mod parser;
mod signature;
mod towery;
mod util;

use std::{
    future::{ready, Future, Ready},
    marker::PhantomData,
    pin::Pin,
    sync::Arc,
    task::{ready, Context, Poll},
};

use dyn_clone::DynClone;
use futures::future::{BoxFuture, Either};
use into_rpc_service::IntoRpcService;
use openrpc_types::{ContentDescriptor, Method, ParamStructure};
use parser::Parser;
use pin_project_lite::pin_project;
use schemars::{gen::SchemaGenerator, JsonSchema};
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use signature::{GetReturningSignature, Signature};

use crate::util::Optional;

struct MyCtx<BS> {
    db: BS,
}

struct MyBlockstore {}

trait Blockstore {}
impl Blockstore for MyBlockstore {}
impl<T> Blockstore for &T where T: Blockstore {}

async fn concat(
    _ctx: Arc<MyCtx<impl Blockstore>>, // TODO(aatifsyed): take &MyCtx<BS> here
    lhs: String,
    rhs: String,
) -> Result<String, jsonrpsee::types::ErrorObjectOwned> {
    Ok(lhs + &rhs)
}

struct WrappedModule<Ctx> {
    inner: jsonrpsee::server::RpcModule<Ctx>,
    schema_generator: SchemaGenerator,
    methods: Vec<Method>,
}

impl<Ctx> WrappedModule<Ctx>
// where
//     BS: Blockstore + Send + Sync + 'static,
{
    // fn serve0(&mut self) {
    //     let method_name = "concat";
    //     let calling_convention = ParamStructure::ByPosition;
    //     let param_names = ["lhs", "rhs"];
    //     let ret_name = "ret";
    //     type T0 = String;
    //     type T1 = String;
    //     type R = String;

    //     self.inner
    //         .register_async_method(method_name, move |params, ctx| async move {
    //             let params = params
    //                 .as_str()
    //                 .map(serde_json::from_str)
    //                 .transpose()
    //                 .map_err(|e| error2error(jsonrpc_types::Error::invalid_params(e, None)))?;
    //             let mut parser =
    //                 Parser::new(params, &param_names, calling_convention).map_err(error2error)?;
    //             concat(
    //                 &ctx,
    //                 parser.parse().map_err(error2error)?,
    //                 parser.parse().map_err(error2error)?,
    //             )
    //             .await
    //         })
    //         .unwrap();
    //     let method = Method {
    //         name: String::from(method_name),
    //         params: openrpc_types::Params::new([
    //             ContentDescriptor {
    //                 name: String::from(param_names[0]),
    //                 schema: T0::json_schema(&mut self.schema_generator),
    //                 required: T0::optional(),
    //             },
    //             ContentDescriptor {
    //                 name: String::from(param_names[1]),
    //                 schema: T1::json_schema(&mut self.schema_generator),
    //                 required: T1::optional(),
    //             },
    //         ])
    //         .unwrap(),
    //         param_structure: calling_convention,
    //         result: Some(ContentDescriptor {
    //             name: String::from(ret_name),
    //             schema: R::json_schema(&mut self.schema_generator),
    //             required: R::optional(),
    //         }),
    //     };
    //     self.methods.push(method);
    // }
    fn serve1<const ARITY: usize, F, Args, R>(
        &mut self,
        method_name: &'static str, // parity...
        calling_convention: ParamStructure,
        param_names: [&'static str; ARITY],
        f: F,
    ) where
        F: Wrap<ARITY, Ctx, Args, R>,
        Ctx: Send + Sync + 'static,
    {
        self.inner
            .register_async_method(method_name, f.wrap(param_names, calling_convention))
            .unwrap();
    }
}

fn test<BS>(wrapped: &mut WrappedModule<MyCtx<BS>>)
where
    BS: Blockstore + Send + Sync + 'static,
{
    wrapped.serve1("concat", ParamStructure::Either, ["lhs", "rhs"], concat);
}

// pub fn register_async_method<R, Fun, Fut>(
//     &mut self,
//     method_name: &'static str,
//     callback: Fun,
// ) -> Result<&mut MethodCallback, RegisterMethodError>
// where
//     R: IntoResponse + 'static,
//     Fut: Future<Output = R> + Send,
//     Fun: (Fn(Params<'static>, Arc<Context>) -> Fut) + Clone + Send + Sync + 'static,

trait Wrap<const ARITY: usize, Ctx, Args, R> {
    type Future: Future<Output = Result<serde_json::Value, jsonrpsee::types::ErrorObjectOwned>>
        + Send;
    fn wrap(
        self,
        param_names: [&'static str; ARITY],
        calling_convention: ParamStructure,
    ) -> impl Clone
           + Send
           + Sync
           + 'static
           + Fn(jsonrpsee::types::Params<'static>, Arc<Ctx>) -> Self::Future;
}

impl<F, T0, T1, Ctx, Fut, R> Wrap<2, Ctx, (T0, T1), R> for F
where
    F: Clone + Send + Sync + 'static + Fn(Arc<Ctx>, T0, T1) -> Fut,
    Ctx: Send + Sync + 'static,
    T0: for<'de> Deserialize<'de> + Clone,
    T1: for<'de> Deserialize<'de> + Clone,
    Fut: Future<Output = Result<R, jsonrpsee::types::ErrorObjectOwned>> + Send + Sync + 'static,
    R: Serialize,
{
    type Future = Either<
        Ready<Result<Value, jsonrpsee::types::ErrorObjectOwned>>,
        AndThenDeserializeResponse<Fut>,
    >;

    fn wrap(
        self,
        param_names: [&'static str; 2],
        calling_convention: ParamStructure,
    ) -> impl Clone
           + Send
           + Sync
           + 'static
           + Fn(jsonrpsee::types::Params<'static>, Arc<Ctx>) -> Self::Future {
        move |params, ctx| {
            let params = match params.as_str().map(serde_json::from_str).transpose() {
                Ok(it) => it,
                Err(e) => {
                    return Either::Left(ready(Err(error2error(
                        jsonrpc_types::Error::invalid_params(e, None),
                    ))))
                }
            };
            let mut parser = match Parser::new(params, &param_names, calling_convention) {
                Ok(it) => it,
                Err(e) => return Either::Left(ready(Err(error2error(e)))),
            };

            let t0 = match parser.parse() {
                Ok(it) => it,
                Err(e) => return Either::Left(ready(Err(error2error(e)))),
            };
            let t1 = match parser.parse() {
                Ok(it) => it,
                Err(e) => return Either::Left(ready(Err(error2error(e)))),
            };
            Either::Right(AndThenDeserializeResponse {
                inner: self(ctx, t0, t1),
            })
        }
    }
}

pin_project! {
    #[derive(Clone)]
    pub struct AndThenDeserializeResponse<F> {
        #[pin]
        inner: F
    }
}

// I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee,
// I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee,
// I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee,
// I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee,
// I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee,
// I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee, I love jsonrpsee.

impl<R, F> Future for AndThenDeserializeResponse<F>
where
    F: Future<Output = Result<R, jsonrpsee::types::ErrorObjectOwned>>,
    R: Serialize,
{
    type Output = Result<Value, jsonrpsee::types::ErrorObjectOwned>;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        Poll::Ready(
            serde_json::to_value(ready!(self.project().inner.poll(cx))?)
                .map_err(|e| {
                    jsonrpc_types::Error::internal_error(
                        "error deserializing return value for handler",
                        json!({
                            "type": std::any::type_name::<R>(),
                            "error": e.to_string()
                        }),
                    )
                })
                .map_err(error2error),
        )
    }
}

// type BoxCloneFuture<T> = Pin<Box<dyn CloneFuture<Output = T> + Send>>;

// trait CloneFuture: Future + DynClone {}
// impl<T> CloneFuture for T where T: Future + DynClone {}

// impl<F, T0, T1, Ctx, Fut, R> Wrap<2, (T0, T1), Ctx, Fut, R> for F
// where
//     F: Fn(&Ctx, T0, T1) -> Fut + Clone + Send + Sync + 'static,
//     Ctx: Send + Sync + 'static,
//     T0: for<'de> Deserialize<'de> + Clone,
//     T1: for<'de> Deserialize<'de> + Clone,
//     Fut: Future<Output = Result<R, jsonrpsee::types::ErrorObjectOwned>> + Send + Sync + 'static,
//     R: Serialize,
// {
//     fn wrap(
//         self,
//         param_names: [&'static str; 2],
//         calling_convention: ParamStructure,
//     ) -> impl (Fn(
//         jsonrpsee::types::Params<'static>,
//         Arc<Ctx>,
//     )
//         -> BoxCloneFuture<Result<serde_json::Value, jsonrpsee::types::ErrorObjectOwned>>) {
//         move |params, ctx| {
//             let f = self.clone();
//             Box::pin(async move {
//                 let params = params
//                     .as_str()
//                     .map(serde_json::from_str)
//                     .transpose()
//                     .map_err(|e| error2error(jsonrpc_types::Error::invalid_params(e, None)))?;
//                 let mut parser =
//                     Parser::new(params, &param_names, calling_convention).map_err(error2error)?;

//                 let t0 = parser.parse().map_err(error2error)?;
//                 let t1 = parser.parse().map_err(error2error)?;
//                 match f(&ctx, t0, t1).await {
//                     Ok(it) => match serde_json::to_value(it) {
//                         Ok(it) => Ok(it),
//                         Err(e) => Err(error2error(jsonrpc_types::Error::internal_error(e, None))),
//                     },
//                     Err(e) => Err(e),
//                 }
//             })
//         }
//     }
// }

fn error2error(ours: jsonrpc_types::Error) -> jsonrpsee::types::ErrorObjectOwned {
    let jsonrpc_types::Error {
        code,
        message,
        data,
    } = ours;
    jsonrpsee::types::ErrorObject::owned(code as i32, message, data)
}

fn signature_and_service<const ARITY: usize, Handler, Args>(
    handler: Handler,
    param_names: [&'static str; ARITY],
    return_name: &str,
    calling_convention: ParamStructure,
    schema_generator: &mut SchemaGenerator,
) -> (Signature, Handler::RpcService)
where
    Handler: IntoRpcService<ARITY, Args>,
    Handler: GetReturningSignature<ARITY, Args>,
{
    let signature = Handler::get_returning_signature(
        param_names,
        return_name,
        calling_convention,
        schema_generator,
    );
    let service = handler.into_rpc_service(param_names, calling_convention);
    (signature, service)
}

#[cfg(test)]
mod tests {
    use super::*;

    use pretty_assertions::assert_eq;
    use schemars::gen::SchemaSettings;
    use serde_json::json;
    use util::{call, examples, from_value};

    /// User presents a freestanding function, and this library produces:
    /// - a [tower::Service] for that function, including parameter validation
    /// - an OpenRPC method definition
    #[test]
    fn test() {
        let mut gen = SchemaGenerator::new(SchemaSettings::openapi3());
        let (sig, mut svc) = signature_and_service(
            examples::len,
            ["string", "method"],
            "len",
            ParamStructure::Either,
            &mut gen,
        );
        assert_eq!(call(&mut svc, from_value!(["hello"])), Ok(json!(5)));
        assert_eq!(
            call(
                &mut svc,
                from_value!({"string": "hello", "method": "bytes"})
            ),
            Ok(json!(5))
        );
        assert_eq!(
            serde_json::to_value(sig.into_method("len")).unwrap(),
            json!({
                "name": "len",
                "paramStructure": "either",
                "params": [
                    {
                        "name": "string",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "method",
                        "required": false,
                        "schema": {
                            "$ref": "#/components/schemas/LenMethod",
                            "nullable": true
                        }
                    }
                ],
                "result": {
                    "name": "len",
                    "required": true,
                    "schema": {
                        "format": "uint",
                        "minimum": 0.0,
                        "type": "integer"
                    }
                }
            })
        );
        assert_eq!(
            serde_json::to_value(gen.definitions()).unwrap(),
            json!({
                "LenMethod": {
                    "enum": [
                        "bytes",
                        "chars"
                    ],
                    "type": "string"
                }
            })
        );
    }
}
