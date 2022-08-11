"use strict";
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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm.js\");\n/* harmony import */ var magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\nmagnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// // A dependency graph that contains any wasm must all be imported\n// // asynchronously. This `bootstrap.js` file does the single async import, so\n// // that no one else needs to worry about it again.\n// import(\"./index.ts\")\n//   .catch(e => console.error(\"Error importing `index.ts`:\", e));\n\n\n// import * as wasm from \"magnetic-pendulum-wasm\"\n// import { memory } from \"magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm\";\n\n// wasm.greet();\n// const universe = wasm.Universe.new(512,512,100);\n// const width = universe.width()\n// const height = universe.height()\n// const canvas = document.getElementById('magnetic-pendulum-canvas')\n// canvas.width = width;\n// canvas.height = height;\n\n// const ctx = canvas.getContext('2d');\n// ctx.fillStyle=\"#000000\"\n// // requestAnimationFrame(renderLoop)\n\n\n\n\n// wasm.greet();\nconst universe = new magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Universe(512,512,100);\n\n// universe.add_magnet(new wasm.Magnet(\n//     new wasm.Vec2D(0.0, 0.0),\n//     1.0\n// ));\nmagnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.grow(1)\n\nuniverse.add_nums(12)\n\nconst width = universe.width()\nconst height = universe.height()\nconsole.log(width,height)\nconst canvas =  document.getElementById('magnetic-pendulum-canvas')\ncanvas.width = width;\ncanvas.height = height;\n\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\nfunction renderLoop() {\n  universe.tick();\n\n  draw(universe);\n\n  requestAnimationFrame(renderLoop);\n};\n\nfunction draw(universe) {\n  const magnets_ptr = universe.magnets()\n  const nums_ptr = universe.nums();\n  const magnet_sizeof = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Magnet.size_of()\n  const magnets_n = universe.magnets_len();\n  console.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer.byteLength)\n  console.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory)\n  console.log(\"SIZEOF IS\", nums_ptr, 1)\n  const magnets = new Uint8Array(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, nums_ptr, 1)\n  console.log(magnets[0])\n};\n\n// requestAnimationFrame(renderLoop);\n\n\nconst image = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Image[\"new\"](10);\nconsole.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory)\nconsole.log(\"ptr is\", image.get_pointer())\nconst buf = new Uint8ClampedArray(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, image.get_pointer(), 10);\n\nfor (let i = 0; i < 10; i++) {\n  console.log(buf[i])\n  buf[i] = 255;\n}\n\nconsole.log(image.get_length());\nconsole.log(image.get_first_element(), buf[0]);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/bootstrap.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("055ef3803ebbd2e82706")
/******/ })();
/******/ 
/******/ }
);