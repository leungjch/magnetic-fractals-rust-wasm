"use strict";(self.webpackChunkclient_ts=self.webpackChunkclient_ts||[]).push([[796],{796:(e,n,t)=>{t.r(n),t.d(n,{default:()=>W,initSync:()=>h,initThreadPool:()=>b,sum_of_squares:()=>l,wbg_rayon_PoolBuilder:()=>m,wbg_rayon_start_worker:()=>y});var r=t(443);let o;const i=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let s=new Uint8Array;const a=new Array(32).fill(void 0);a.push(void 0,null,!0,!1);let u=a.length;function c(e){u===a.length&&a.push(a.length+1);const n=u;return u=a[n],a[n]=e,n}let _=new Uint32Array,f=0;function l(e){const n=function(e,n){const t=n(4*e.length);return(_.buffer!==o.memory.buffer&&(_=new Uint32Array(o.memory.buffer)),_).set(e,t/4),f=e.length,t}(e,o.__wbindgen_malloc),t=f;return o.sum_of_squares(n,t)}function w(e){const n=function(e){return a[e]}(e);return function(e){e<36||(a[e]=u,u=e)}(e),n}function b(e){return w(o.initThreadPool(e))}function y(e){o.wbg_rayon_start_worker(e)}class m{static __wrap(e){const n=Object.create(m.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){o.wbg_rayon_poolbuilder_build(this.ptr)}}function d(){const e={wbg:{}};return e.wbg.__wbindgen_throw=function(e,n){throw new Error((t=e,r=n,i.decode((s.buffer!==o.memory.buffer&&(s=new Uint8Array(o.memory.buffer)),s).slice(t,t+r))));var t,r},e.wbg.__wbindgen_module=function(){return c(A.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return c(o.memory)},e.wbg.__wbg_startWorkers_04f63eca19916b8f=function(e,n,t){return c((0,r.Q)(w(e),w(n),m.__wrap(t)))},e}function g(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function p(e,n){return o=e.exports,A.__wbindgen_wasm_module=n,_=new Uint32Array,s=new Uint8Array,o.__wbindgen_start(),o}function h(e,n){const t=d();g(t,n);const r=new WebAssembly.Module(e);return p(new WebAssembly.Instance(r,t),r)}async function A(e,n){void 0===e&&(e=new URL(t(439),t.b));const r=d();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),g(r,n);const{instance:o,module:i}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,r);return p(o,i)}const W=A},439:(e,n,t)=>{e.exports=t.p+"5518a32c767355dfa735.wasm"}}]);