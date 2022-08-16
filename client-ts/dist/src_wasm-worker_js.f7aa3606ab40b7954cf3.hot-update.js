"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("src_wasm-worker_js",{

/***/ "./src/wasm-worker.js":
/*!****************************!*\
  !*** ./src/wasm-worker.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_feature_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-feature-detect */ \"./node_modules/wasm-feature-detect/dist/esm/index.js\");\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n\n\n\n\nasync function initHandlers() {\n  let [singleThread, multiThread] = await Promise.all([\n    (async () => {\n      const singleThread = await Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module '.magnetic-pendulum-wasm/magnetic_pendulum_wasm.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n      await singleThread.default();\n      return wrapExports(singleThread);\n    })(),\n    (async () => {\n      // If threads are unsupported in this browser, skip this handler.\n      if (!(await (0,wasm_feature_detect__WEBPACK_IMPORTED_MODULE_0__.threads)())) return;\n      const multiThread = await Promise.all(/*! import() */[__webpack_require__.e(\"magnetic-pendulum-rs_pkg_magnetic_pendulum_wasm_js\"), __webpack_require__.e(\"magnetic-pendulum-rs_pkg_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js-_814c1\")]).then(__webpack_require__.bind(__webpack_require__, /*! magnetic-pendulum-wasm/magnetic_pendulum_wasm.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js\"));\n      await multiThread.default();\n      await multiThread.initThreadPool(navigator.hardwareConcurrency);\n      return wrapExports(multiThread);\n    })()\n  ]);\n\n  return comlink__WEBPACK_IMPORTED_MODULE_1__.proxy({\n    singleThread,\n    supportsThreads: !!multiThread,\n    multiThread\n  });\n}\n\ncomlink__WEBPACK_IMPORTED_MODULE_1__.expose({\n  handlers: initHandlers()\n});\n\nasync function importModule() {\n  console.log(\"Hello filename\")\n\n  if (!(await (0,wasm_feature_detect__WEBPACK_IMPORTED_MODULE_0__.threads)())) {\n    console.log(\"No threads\")\n    return;\n  }\n  let path = PATH_TO_PKG + \"magnetic_pendulum_wasm.js\";\n \n  const thread = await Promise.all(/*! import() */[__webpack_require__.e(\"magnetic-pendulum-rs_pkg_magnetic_pendulum_wasm_js\"), __webpack_require__.e(\"magnetic-pendulum-rs_pkg_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js-_814c1\")]).then(__webpack_require__.bind(__webpack_require__, /*! magnetic-pendulum-wasm/magnetic_pendulum_wasm.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js\"));\n  await thread.default();\n  await thread.initThreadPool(navigator.hardwareConcurrency);\n  console.log(\"Got thread pool init\")\n  return comlink__WEBPACK_IMPORTED_MODULE_1__.proxy({\n    sum_of_squares: thread.sum_of_squares,\n    generate_fractal: thread.generate_fractal\n  });\n}\n\ncomlink__WEBPACK_IMPORTED_MODULE_1__.expose({\n  thread: importModule(),\n});\n\n// Wrap wasm-bindgen exports (the `generate` function) to add time measurement.\nfunction wrapExports({ generate_fractal }) {\n  return ({ width, height, universe }) => {\n    const start = performance.now();\n    const rawImageData = generate_fractal(width, height, universe);\n    const time = performance.now() - start;\n    return {\n      // Little perf boost to transfer data to the main thread w/o copying.\n      rawImageData: comlink__WEBPACK_IMPORTED_MODULE_1__.transfer(rawImageData, [rawImageData.buffer]),\n      time\n    };\n  };\n}\n\n\n//# sourceURL=webpack://client-ts/./src/wasm-worker.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("168852fbf5ac8eb105e6")
/******/ })();
/******/ 
/******/ }
);