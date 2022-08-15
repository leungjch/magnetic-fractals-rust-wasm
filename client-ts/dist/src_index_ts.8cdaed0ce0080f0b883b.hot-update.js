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

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D)\n/* harmony export */ });\nvar Rgb = /** @class */ (function () {\n    function Rgb(r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    }\n    Rgb.prototype.to_string = function () {\n        return \"rgb(\" + this.r + \",\" + this.g + \",\" + this.b + \")\";\n    };\n    return Rgb;\n}());\n\nvar Vec2D = /** @class */ (function () {\n    function Vec2D(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Vec2D;\n}());\n\nvar Magnet = /** @class */ (function () {\n    function Magnet(strength, pos, radius, color) {\n        this.strength = strength;\n        this.pos = pos;\n        this.radius = radius;\n        this.color = color;\n    }\n    return Magnet;\n}());\n\nvar Pendulum = /** @class */ (function () {\n    function Pendulum(pos_start, pos, vel, acc, f_tension, k, friction, f_magnetic, f_net, is_stationary, magnet_color) {\n        this.pos_start = pos_start;\n        this.pos = pos;\n        this.vel = vel;\n        this.acc = acc;\n        this.f_tension = f_tension;\n        this.k = k;\n        this.friction = friction;\n        this.f_magnetic = f_magnetic;\n        this.f_net = f_net;\n        this.is_stationary = is_stationary;\n        this.magnet_color = magnet_color;\n    }\n    return Pendulum;\n}());\n\n\n\n//# sourceURL=webpack://client-ts/./src/utils.ts?");

/***/ })

});