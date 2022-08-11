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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js\");\n/* harmony import */ var magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__, magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// wasm.greet();\nvar universe = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Universe[\"new\"](512, 512, 100);\nuniverse.add_magnet(magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Magnet[\"new\"](magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Vec2D[\"new\"](0.0, 0.0), 1.0));\nuniverse.add_magnet(magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Magnet[\"new\"](magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Vec2D[\"new\"](0.0, 0.0), 1.0));\nvar width = universe.width();\nvar height = universe.height();\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nfunction renderLoop() {\n    universe.tick();\n    draw(universe);\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe) {\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    console.log(\"SIZEOF IS\", magnet_sizeof, magnets_ptr);\n    console.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory);\n    var magnets = new Uint8Array(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.memory.buffer, magnets_ptr, magnet_sizeof);\n    console.log(\"DONE\");\n    for (var i = 0; i < magnets_n; i++) {\n        var magnet = magnets[i];\n        console.log(magnet);\n    }\n}\n;\nrequestAnimationFrame(renderLoop);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});