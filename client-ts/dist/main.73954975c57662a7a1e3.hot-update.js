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

eval("\n// // A dependency graph that contains any wasm must all be imported\n// // asynchronously. This `bootstrap.js` file does the single async import, so\n// // that no one else needs to worry about it again.\nPromise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_dat_gui_build_dat_gui_module_js\"), __webpack_require__.e(\"src_index_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index.ts */ \"./src/index.ts\"))\n  .catch(e => console.error(\"Error importing `index.ts`:\", e));\n\n\n// import * as wasm from \"magnetic-pendulum-wasm\"\n// import { memory } from \"magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm\";\n\n// wasm.greet();\n// const universe = wasm.Universe.new(512,512,100);\n// const width = universe.width()\n// const height = universe.height()\n// const canvas = document.getElementById('magnetic-pendulum-canvas')\n// canvas.width = width;\n// canvas.height = height;\n\n// const ctx = canvas.getContext('2d');\n// ctx.fillStyle=\"#000000\"\n// // requestAnimationFrame(renderLoop)\n\n\n\n//# sourceURL=webpack://client-ts/./src/bootstrap.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5dc891557360c54fd664")
/******/ })();
/******/ 
/******/ }
);