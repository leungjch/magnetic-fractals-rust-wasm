/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("main",{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// // A dependency graph that contains any wasm must all be imported\n// // asynchronously. This `bootstrap.js` file does the single async import, so\n// // that no one else needs to worry about it again.\nPromise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_magnetic-pendulum-wasm_magnetic_pendulum_wasm_js\"), __webpack_require__.e(\"src_index_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index.ts */ \"./src/index.ts\"))\n  .catch(e => console.error(\"Error importing `index.ts`:\", e));\n\n\n//# sourceURL=webpack://client-ts/./src/bootstrap.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("291d9e281d9e7f891550")
/******/ })();
/******/ 
/******/ }
);