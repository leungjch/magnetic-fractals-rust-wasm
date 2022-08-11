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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D)\n/* harmony export */ });\nvar Rgb = /** @class */ (function () {\n    function Rgb(r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    }\n    Rgb.prototype.to_string = function () {\n        return \"rgb(\" + this.r + \",\" + this.g + \",\" + this.b + \")\";\n    };\n    return Rgb;\n}());\n\nvar Vec2D = /** @class */ (function () {\n    function Vec2D(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Vec2D;\n}());\n\nvar Magnet = /** @class */ (function () {\n    function Magnet(strength, pos, color) {\n        this.strength = strength;\n        this.pos = pos;\n        this.color = color;\n    }\n    return Magnet;\n}());\n\n\n\n//# sourceURL=webpack://client-ts/./src/utils.ts?");

/***/ })

});