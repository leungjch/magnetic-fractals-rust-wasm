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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_feature_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-feature-detect */ \"./node_modules/wasm-feature-detect/dist/esm/index.js\");\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n\n\nconst PATH_TO_PKG = \"magnetic-pendulum-wasm/\"\nasync function importModule() {\n  console.log(\"Hello filename\")\n\n  if (!(await (0,wasm_feature_detect__WEBPACK_IMPORTED_MODULE_0__.threads)())) {\n    console.log(\"No threads\")\n    return;\n  }\n  let path = PATH_TO_PKG + \"magnetic_pendulum_wasm.js\";\n  console.log(\"Getting filename\", path)\n\n  const thread = await __webpack_require__.e(/*! import() */ \"magnetic-pendulum-rs_pkg_magnetic_pendulum_wasm_js\").then(__webpack_require__.bind(__webpack_require__, /*! magnetic-pendulum-wasm/magnetic_pendulum_wasm.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js\"));\n  await thread.default();\n  await thread.initThreadPool(navigator.hardwareConcurrency);\n  console.log(\"Got thread pool init\")\n  return comlink__WEBPACK_IMPORTED_MODULE_1__.proxy({\n    sum_of_squares: thread.sum_of_squares,\n  });\n}\n\ncomlink__WEBPACK_IMPORTED_MODULE_1__.expose({\n  thread: importModule(),\n});\n\n\n//# sourceURL=webpack://client-ts/./src/wasm-worker.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d83ea0f40fe2ed44264")
/******/ })();
/******/ 
/******/ }
);