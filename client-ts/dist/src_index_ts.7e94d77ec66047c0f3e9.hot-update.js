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
/***/ (() => {

eval("throw new Error(\"Module parse failed: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\nError: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)\\n    at /home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/dependencies/HarmonyDetectionParserPlugin.js:54:11\\n    at Hook.eval [as call] (eval at create (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:16)\\n    at Hook.CALL_DELEGATE [as _call] (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/tapable/lib/Hook.js:14:14)\\n    at JavascriptParser.walkAwaitExpression (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/javascript/JavascriptParser.js:2342:29)\\n    at JavascriptParser.walkExpression (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/javascript/JavascriptParser.js:2272:10)\\n    at JavascriptParser.walkVariableDeclaration (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/javascript/JavascriptParser.js:2126:33)\\n    at JavascriptParser.walkStatement (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/javascript/JavascriptParser.js:1620:10)\\n    at JavascriptParser.walkStatements (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/javascript/JavascriptParser.js:1481:9)\\n    at JavascriptParser.parse (/home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/javascript/JavascriptParser.js:3375:9)\\n    at /home/leungjch/Documents/repos/rust-magnetic-pendulum/client-ts/node_modules/webpack/lib/NormalModule.js:1087:26\");\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ }),

/***/ "./src/load_wasm.ts":
/*!**************************!*\
  !*** ./src/load_wasm.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadWasm\": () => (/* binding */ loadWasm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar wasm;\nvar loadWasm = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (wasm) {\n                    return [2 /*return*/, wasm];\n                }\n                return [4 /*yield*/, __webpack_require__.e(/*! import() */ \"vendors-node_modules_magnetic-pendulum-wasm_magnetic_pendulum_wasm_js\").then(__webpack_require__.bind(__webpack_require__, /*! magnetic-pendulum-wasm */ \"./node_modules/magnetic-pendulum-wasm/magnetic_pendulum_wasm.js\"))];\n            case 1:\n                wasm = _a.sent();\n                return [2 /*return*/, wasm];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://client-ts/./src/load_wasm.ts?");

/***/ })

});