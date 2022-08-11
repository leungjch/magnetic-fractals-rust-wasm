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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nmagnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// wasm.greet();\nvar universe = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.Universe[\"new\"](512, 512, 100);\nvar width = universe.width();\nvar height = universe.height();\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nfunction renderLoop() { }\n(function () {\n    universe.tick();\n    draw();\n    requestAnimationFrame(renderLoop);\n});\nfunction draw() { }\n(function () {\n    var magnets = universe.magnets();\n    for (var _i = 0, magnets_1 = magnets; _i < magnets_1.length; _i++) {\n        var magnet = magnets_1[_i];\n    }\n});\nrequestAnimationFrame(renderLoop);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});