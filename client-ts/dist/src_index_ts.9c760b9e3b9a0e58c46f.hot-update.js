"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("src_index_ts",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js\");\n/* harmony import */ var magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// wasm.greet();\nvar universe = new magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Universe(512, 512, 100);\n// universe.add_magnet(new wasm.Magnet(\n//     new wasm.Vec2D(0.0, 0.0),\n//     1.0\n// ));\n// memory.grow(1)\n// universe.add_nums(12)\n// const width = universe.width()\n// const height = universe.height()\n// console.log(width,height)\n// const canvas = <HTMLCanvasElement> document.getElementById('magnetic-pendulum-canvas')\n// canvas.width = width;\n// canvas.height = height;\n// const ctx = canvas.getContext('2d');\n// ctx.fillStyle = \"green\";\n// ctx.fillRect(0, 0, canvas.width, canvas.height);\n// function renderLoop() {\n//   universe.tick();\n//   draw(universe);\n//   requestAnimationFrame(renderLoop);\n// };\n// function draw(universe: wasm.Universe ) {\n//   const magnets_ptr = universe.magnets()\n//   const nums_ptr = universe.nums();\n//   const magnet_sizeof = wasm.Magnet.size_of()\n//   const magnets_n = universe.magnets_len();\n//   console.log(memory.buffer.byteLength)\n//   console.log(memory)\n//   console.log(\"SIZEOF IS\", nums_ptr, 1)\n//   const magnets = new Uint8Array(memory.buffer, nums_ptr, 1)\n//   console.log(magnets[0])\n// };\n// // requestAnimationFrame(renderLoop);\nvar image = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Image[\"new\"](10);\nconsole.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory);\nconsole.log(\"ptr is\", image.get_pointer());\nvar buf = new Uint8ClampedArray(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, image.get_pointer(), 10);\nfor (var i = 0; i < 10; i++) {\n    buf[i] = 255;\n}\nconsole.log(image.get_length());\nconsole.log(image.get_first_element(), buf[0]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});