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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nmagnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nmagnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n// //import { memory } from \"magnetic-pendulum-wasm/magnetic_pendulum_bg\";\n// const universe = Universe.new(128,128,100);\n// const width = universe.width()\n// const height = universe.height()\n// const canvas = <HTMLCanvasElement> document.getElementById('magnetic-pendulum-canvas')\n// canvas.width = width;\n// canvas.height = height;\n// const ctx = canvas.getContext('2d');\n// // requestAnimationFrame(renderLoop)\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js":
/*!******************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"__wbg_alert_2c19ebef6d41a706\": () => (/* binding */ __wbg_alert_2c19ebef6d41a706),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"greet\": () => (/* binding */ greet)\n/* harmony export */ });\n/* harmony import */ var _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./magnetic_pendulum_wasm_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    * @returns {Magnet}\n    */\n    static new(pos, strength) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_new(ptr0, strength);\n        return Magnet.__wrap(ret);\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_new(ptr0, k, friction);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    * @returns {Universe}\n    */\n    static new(width, height, max_iters) {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_magnets() {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @returns {Vec2D}\n    */\n    static new(x, y) {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = _magnetic_pendulum_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n}\n\nfunction __wbg_alert_2c19ebef6d41a706(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm":
/*!********************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"5f9e2635e7f84327f148\", {\n\t\t\"./magnetic_pendulum_wasm_bg.js\": {\n\t\t\t\"__wbg_alert_2c19ebef6d41a706\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_2c19ebef6d41a706,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./magnetic_pendulum_wasm_bg.js */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"5f9e2635e7f84327f148\", {\n\t\t\"./magnetic_pendulum_wasm_bg.js\": {\n\t\t\t\"__wbg_alert_2c19ebef6d41a706\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_2c19ebef6d41a706,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && !queue.d) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = 1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f0ca382464552cb7073a")
/******/ })();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ (() => {
/******/ 	__webpack_require__.hmd = (module) => {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: () => {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/wasm loading */
/******/ (() => {
/******/ 	__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 		if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 			return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		}
/******/ 		return req
/******/ 			.then((x) => (x.arrayBuffer()))
/******/ 			.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 			.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 	};
/******/ })();
/******/ 
/******/ }
);