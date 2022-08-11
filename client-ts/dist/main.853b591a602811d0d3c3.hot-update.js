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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm.js\");\n/* harmony import */ var magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'process'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'zlib'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__]);\nmagnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// // A dependency graph that contains any wasm must all be imported\n// // asynchronously. This `bootstrap.js` file does the single async import, so\n// // that no one else needs to worry about it again.\n// import(\"./index.ts\")\n//   .catch(e => console.error(\"Error importing `index.ts`:\", e));\n\n\n// import * as wasm from \"magnetic-pendulum-wasm\"\n// import { memory } from \"magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm\";\n\n// wasm.greet();\n// const universe = wasm.Universe.new(512,512,100);\n// const width = universe.width()\n// const height = universe.height()\n// const canvas = document.getElementById('magnetic-pendulum-canvas')\n// canvas.width = width;\n// canvas.height = height;\n\n// const ctx = canvas.getContext('2d');\n// ctx.fillStyle=\"#000000\"\n// // requestAnimationFrame(renderLoop)\n\n\n\n\n\n\n// wasm.greet();\nconst universe = new magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_1__.Universe(512,512,100);\n\n// universe.add_magnet(new wasm.Magnet(\n//     new wasm.Vec2D(0.0, 0.0),\n//     1.0\n// ));\nmagnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory.grow(1)\n\nuniverse.add_nums(12)\n\nconst width = universe.width()\nconst height = universe.height()\nconsole.log(width,height)\nconst canvas =  document.getElementById('magnetic-pendulum-canvas')\ncanvas.width = width;\ncanvas.height = height;\n\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = \"green\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\n\nfunction renderLoop() {\n  universe.tick();\n\n  draw(universe);\n\n  requestAnimationFrame(renderLoop);\n};\n\nfunction draw(universe) {\n  const magnets_ptr = universe.magnets()\n  const nums_ptr = universe.nums();\n  const magnet_sizeof = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_1__.Magnet.size_of()\n  const magnets_n = universe.magnets_len();\n  console.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory.buffer.byteLength)\n  console.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory)\n  console.log(\"SIZEOF IS\", nums_ptr, 1)\n  const magnets = new Uint8Array(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory.buffer, nums_ptr, 1)\n  console.log(magnets[0])\n};\n\n// requestAnimationFrame(renderLoop);\n\n\nconst image = magnetic_pendulum_wasm__WEBPACK_IMPORTED_MODULE_1__.Image[\"new\"](10);\nconsole.log(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory)\nconsole.log(\"ptr is\", image.get_pointer())\nconst buf = new Uint8ClampedArray(magnetic_pendulum_wasm_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.memory.buffer, image.get_pointer(), 10);\n\nfor (let i = 0; i < 10; i++) {\n  console.log(buf[i])\n  buf[i] = 255;\n}\n\nconsole.log(image.get_length());\nconsole.log(image.get_first_element(), buf[0]);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/./src/bootstrap.js?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.js":
/*!*************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"__wbg_alert_932cd10f98e7853f\": () => (/* binding */ __wbg_alert_932cd10f98e7853f),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"greet\": () => (/* binding */ greet)\n/* harmony export */ });\n/* harmony import */ var _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./magnetic_pendulum_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    * @returns {Magnet}\n    */\n    static new(pos, strength) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.magnet_new(ptr0, strength);\n        return Magnet.__wrap(ret);\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_new(ptr0, k, friction);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    * @returns {Universe}\n    */\n    static new(width, height, max_iters) {\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_magnets() {\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.universe_tick(this.ptr);\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @returns {Vec2D}\n    */\n    static new(x, y) {\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = _magnetic_pendulum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n}\n\nfunction __wbg_alert_932cd10f98e7853f(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.js?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm.js":
/*!***************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* binding */ Image),\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"greet\": () => (/* binding */ greet),\n/* harmony export */   \"initSync\": () => (/* binding */ initSync)\n/* harmony export */ });\n\nlet wasm;\n\nconst cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    wasm.greet();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n*/\nclass Image {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Image.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_image_free(ptr);\n    }\n    /**\n    * @param {number} length\n    * @returns {Image}\n    */\n    static new(length) {\n        const ret = wasm.image_new(length);\n        return Image.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_pointer() {\n        const ret = wasm.image_get_pointer(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_length() {\n        const ret = wasm.image_get_length(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_first_element() {\n        const ret = wasm.image_get_first_element(this.ptr);\n        return ret;\n    }\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    */\n    constructor(pos, strength) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.magnet_new(ptr0, strength);\n        return Magnet.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.magnet_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.pendulum_new(ptr0, k, friction);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = wasm.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Rgb {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Rgb.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_rgb_free(ptr);\n    }\n    /**\n    * @param {number} r\n    * @param {number} g\n    * @param {number} b\n    */\n    constructor(r, g, b) {\n        const ret = wasm.rgb_new(r, g, b);\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    */\n    constructor(width, height, max_iters) {\n        const ret = wasm.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        wasm.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    * @param {number} n\n    */\n    add_nums(n) {\n        wasm.universe_add_nums(this.ptr, n);\n    }\n    /**\n    */\n    clear_magnets() {\n        wasm.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        wasm.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        wasm.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums() {\n        const ret = wasm.universe_pendulums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets() {\n        const ret = wasm.universe_magnets(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    nums() {\n        const ret = wasm.universe_nums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums_len() {\n        const ret = wasm.universe_pendulums_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets_len() {\n        const ret = wasm.universe_magnets_len(this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = wasm.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        wasm.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = wasm.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        wasm.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    constructor(x, y) {\n        const ret = wasm.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = wasm.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction getImports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_alert_2c19ebef6d41a706 = function(arg0, arg1) {\n        alert(getStringFromWasm0(arg0, arg1));\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction initMemory(imports, maybe_memory) {\n\n}\n\nfunction finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedUint8Memory0 = new Uint8Array();\n\n\n    return wasm;\n}\n\nfunction initSync(bytes) {\n    const imports = getImports();\n\n    initMemory(imports);\n\n    const module = new WebAssembly.Module(bytes);\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n}\n\nasync function init(input) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! magnetic_pendulum_wasm_bg.wasm */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = getImports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    initMemory(imports);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm.js?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm":
/*!********************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd2486fe805d72da4544.wasm\";\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_wasm_bg.wasm?");

/***/ }),

/***/ "../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm":
/*!***************************************************************!*\
  !*** ../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"49a775c813152758413b\", {\n\t\t\"./magnetic_pendulum_bg.js\": {\n\t\t\t\"__wbg_alert_932cd10f98e7853f\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_932cd10f98e7853f,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./magnetic_pendulum_bg.js */ \"../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"49a775c813152758413b\", {\n\t\t\"./magnetic_pendulum_bg.js\": {\n\t\t\t\"__wbg_alert_932cd10f98e7853f\": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_932cd10f98e7853f,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-wasm/pkg/magnetic_pendulum_bg.wasm?");

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
/******/ 	__webpack_require__.h = () => ("d6ad23249cacaa6dbc2d")
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
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise((resolve, reject) => {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = (event) => {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	self["webpackHotUpdateclient_ts"] = (chunkId, moreModules, runtime) => {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = () => {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/******/ }
);