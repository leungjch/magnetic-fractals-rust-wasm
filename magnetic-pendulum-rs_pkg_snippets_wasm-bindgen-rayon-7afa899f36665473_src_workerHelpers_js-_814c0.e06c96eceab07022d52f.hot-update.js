"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("magnetic-pendulum-rs_pkg_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js-_814c0",{

/***/ "../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js":
/*!*****************************************************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startWorkers\": () => (/* binding */ startWorkers)\n/* harmony export */ });\n/**\n * Copyright 2021 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n// Note: we use `wasm_bindgen_worker_`-prefixed message types to make sure\n// we can handle bundling into other files, which might happen to have their\n// own `postMessage`/`onmessage` communication channels.\n//\n// If we didn't take that into the account, we could send much simpler signals\n// like just `0` or whatever, but the code would be less resilient.\n\nfunction waitForMsgType(target, type) {\n  return new Promise(resolve => {\n    target.addEventListener('message', function onMsg({ data }) {\n      if (data == null || data.type !== type) return;\n      target.removeEventListener('message', onMsg);\n      resolve(data);\n    });\n  });\n}\n\nwaitForMsgType(self, 'wasm_bindgen_worker_init').then(async data => {\n  // # Note 1\n  // Our JS should have been generated in\n  // `[out-dir]/snippets/wasm-bindgen-rayon-[hash]/workerHelpers.js`,\n  // resolve the main module via `../../..`.\n  //\n  // This might need updating if the generated structure changes on wasm-bindgen\n  // side ever in the future, but works well with bundlers today. The whole\n  // point of this crate, after all, is to abstract away unstable features\n  // and temporary bugs so that you don't need to deal with them in your code.\n  //\n  // # Note 2\n  // This could be a regular import, but then some bundlers complain about\n  // circular deps.\n  //\n  // Dynamic import could be cheap if this file was inlined into the parent,\n  // which would require us just using `../../..` in `new Worker` below,\n  // but that doesn't work because wasm-pack unconditionally adds\n  // \"sideEffects\":false (see below).\n  //\n  // OTOH, even though it can't be inlined, it should be still reasonably\n  // cheap since the requested file is already in cache (it was loaded by\n  // the main thread).\n  const pkg = await Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../..'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n  await pkg.default(data.module, data.memory);\n  postMessage({ type: 'wasm_bindgen_worker_ready' });\n  pkg.wbg_rayon_start_worker(data.receiver);\n});\n\n// Note: this is never used, but necessary to prevent a bug in Firefox\n// (https://bugzilla.mozilla.org/show_bug.cgi?id=1702191) where it collects\n// Web Workers that have a shared WebAssembly memory with the main thread,\n// but are not explicitly rooted via a `Worker` instance.\n//\n// By storing them in a variable, we can keep `Worker` objects around and\n// prevent them from getting GC-d.\nlet _workers;\n\nasync function startWorkers(module, memory, builder) {\n  const workerInit = {\n    type: 'wasm_bindgen_worker_init',\n    module,\n    memory,\n    receiver: builder.receiver()\n  };\n\n  _workers = await Promise.all(\n    Array.from({ length: builder.numThreads() }, async () => {\n      // Self-spawn into a new Worker.\n      //\n      // TODO: while `new URL('...', import.meta.url) becomes a semi-standard\n      // way to get asset URLs relative to the module across various bundlers\n      // and browser, ideally we should switch to `import.meta.resolve`\n      // once it becomes a standard.\n      //\n      // Note: we could use `../../..` as the URL here to inline workerHelpers.js\n      // into the parent entry instead of creating another split point -\n      // this would be preferable from optimization perspective -\n      // however, Webpack then eliminates all message handler code\n      // because wasm-pack produces \"sideEffects\":false in package.json\n      // unconditionally.\n      //\n      // The only way to work around that is to have side effect code\n      // in an entry point such as Worker file itself.\n      const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"magnetic-pendulum-rs_pkg_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js\"), __webpack_require__.b), {\n        type: undefined\n      });\n      worker.postMessage(workerInit);\n      await waitForMsgType(worker, 'wasm_bindgen_worker_ready');\n      return worker;\n    })\n  );\n  builder.build();\n}\n\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dbb1876eeaae519366b8")
/******/ })();
/******/ 
/******/ }
);