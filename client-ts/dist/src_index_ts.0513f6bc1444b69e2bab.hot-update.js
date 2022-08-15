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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! magnetic-pendulum-rs */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs.js\");\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n\n\nvar FRACTAL_SIZE = 512;\nvar universe = new magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.Universe(64, 64, 500);\nvar width = universe.width() * 20;\nvar height = universe.height() * 20;\nvar fractal_generator = new magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.FractalGenerator(FRACTAL_SIZE, FRACTAL_SIZE);\nvar fractal_background = new ImageData(width, height);\nvar state = {\n    type: 'pendulum',\n    tension: 0.8,\n    friction: 1.0,\n    mass: 1.0,\n    show_velocity: false,\n    show_tension: false,\n    steps: 50,\n    magnet_strength: 50,\n    magnet_radius: 2,\n    emitter_interval: 50,\n    show_fractal: true,\n};\nvar reset_button = {\n    clear: function () {\n        universe.clear_magnets();\n        universe.clear_pendulums();\n        universe.clear_emitters();\n        ctx.rect(0, 0, width, height);\n        ctx.fillStyle = \"black\";\n        ctx.fill();\n    }\n};\nvar generate_fractal_button = {\n    generate_fractal: function () {\n        fractal_generator.generate(universe, state.tension, state.friction, state.mass);\n        update_fractal_background();\n    }\n};\nvar gui = new dat_gui__WEBPACK_IMPORTED_MODULE_1__.GUI();\ngui.add(state, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'emitter': 'emitter' });\nvar pendulum_folder = gui.addFolder(\"Pendulum settings\");\npendulum_folder.add(state, 'mass', 0.01, 10.0).name(\"Mass\");\npendulum_folder.add(state, 'tension', 0, 5).name(\"Tension\");\npendulum_folder.add(state, 'friction', 0, 1.0, 0.001).name(\"Friction\");\nvar magnet_folder = gui.addFolder(\"Magnet settings\");\nmagnet_folder.add(state, 'magnet_strength', -500, 500).name(\"Magnet strength\");\nmagnet_folder.add(state, \"magnet_radius\", 0.1, 5, 0.01).name(\"Magnet radius\");\nvar emitter_folder = gui.addFolder(\"Emitter settings\");\nemitter_folder.add(state, \"emitter_interval\", 5, 150, 5);\ngui.add(state, 'steps', 0, 200).name(\"Render speed\").onChange(function (new_steps) { universe.set_steps(new_steps); });\ngui.add(state, \"show_velocity\").name(\"Show velocity\");\ngui.add(state, \"show_tension\").name(\"Show tension\");\ngui.add(state, \"show_fractal\").name(\"Show fractal\");\ngui.add(reset_button, 'clear').name(\"Clear all\");\ngui.add(generate_fractal_button, \"generate_fractal\").name(\"Generate fractal\");\nfunction canvas_to_universe_coords(canvas_x, canvas_y) {\n    var x = canvas_x / width * universe.width();\n    var y = canvas_y / height * universe.height();\n    return [x, y];\n}\nfunction universe_to_canvas_coords(x, y) {\n    var canvas_x = x / universe.width() * width;\n    var canvas_y = y / universe.height() * height;\n    return [canvas_x, canvas_y];\n}\nfunction getCursorPosition(canvas, event) {\n    var rect = canvas.getBoundingClientRect();\n    var canvas_x = event.clientX - rect.left;\n    var canvas_y = event.clientY - rect.top;\n    var _a = canvas_to_universe_coords(canvas_x, canvas_y), x = _a[0], y = _a[1];\n    return [x, y];\n}\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\ncanvas.addEventListener('mousedown', function (e) {\n    var _a = getCursorPosition(canvas, e), x = _a[0], y = _a[1];\n    if (state.type == \"pendulum\") {\n        universe.create_pendulum(x, y, state.tension, state.friction, state.mass);\n    }\n    if (state.type == \"magnet\") {\n        universe.create_magnet(x, y, state.magnet_strength, state.magnet_radius);\n    }\n    if (state.type == \"emitter\") {\n        universe.create_emitter(x, y, state.emitter_interval, state.friction, state.tension, state.mass);\n    }\n});\nvar t = 0;\nfunction renderLoop() {\n    universe.tick();\n    draw(universe, t);\n    t += 1;\n    t %= 120;\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe, t) {\n    // ctx.globalCompositeOperation = 'destination-over';\n    ctx.clearRect(0, 0, width, height); // clear canvas\n    // Get pendulums info from wasm memory\n    var pendulums_ptr = universe.pendulums();\n    var pendulum_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.Pendulum.size_of();\n    var pendulums_n = universe.pendulums_len();\n    var dv_pendulums = new DataView(/* non-default import from non-esm module */undefined.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);\n    if (state.show_fractal) {\n        ctx.putImageData(fractal_background, 0, 0);\n    }\n    // Read magnets from wasm memory\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    // console.log(\"magnets_n\", magnets_n, memory, magnets_ptr)\n    var dv_magnets = new DataView(/* non-default import from non-esm module */undefined.buffer, magnets_ptr, magnets_n * magnet_sizeof);\n    // Render magnets from wasm memory\n    for (var i = 0; i < magnets_n; i++) {\n        var magnet = getMagnet(dv_magnets, i * magnet_sizeof);\n        var _a = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y), canvas_x = _a[0], canvas_y = _a[1];\n        ctx.beginPath();\n        ctx.strokeStyle = \"rgba(1, 1, 1, 1)\";\n        ctx.fillStyle = magnet.color.to_string();\n        ctx.arc(canvas_x, canvas_y, magnet.radius * 20, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.stroke();\n    }\n    // Render pendulums from wasm memory\n    for (var i = 0; i < pendulums_n; i++) {\n        var pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);\n        var _b = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y), canvas_x = _b[0], canvas_y = _b[1];\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.arc(canvas_x, canvas_y, 5, 0, Math.PI * 2);\n        ctx.fill();\n        // Show tension\n        if (state.show_tension) {\n            ctx.beginPath();\n            ctx.lineWidth = Math.sqrt(Math.pow(pendulum.f_tension.x, 2) + Math.pow(pendulum.f_tension.y, 2));\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(width / 2, height / 2);\n            ctx.stroke();\n            ctx.lineWidth = 1;\n        }\n        // Show velocities\n        if (state.show_velocity) {\n            var _c = universe_to_canvas_coords(pendulum.vel.x, pendulum.vel.y), canvas_vel_x = _c[0], canvas_vel_y = _c[1];\n            ctx.beginPath();\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(canvas_x - canvas_vel_x / 10, canvas_y - canvas_vel_y / 10);\n            ctx.stroke();\n        }\n    }\n}\n;\nfunction update_fractal_background() {\n    ctx.clearRect(0, 0, width, height); // clear canvas\n    // Render the fractal as a background\n    var img_ptr = fractal_generator.get_pointer();\n    var rgb_sizeof = magnetic_pendulum_rs__WEBPACK_IMPORTED_MODULE_2__.Rgb.size_of();\n    var img_len = fractal_generator.get_length();\n    var dv_img = new DataView(/* non-default import from non-esm module */undefined.buffer, img_ptr, img_len * rgb_sizeof);\n    // Get image data\n    var fractal_width = fractal_generator.get_width();\n    var fractal_height = fractal_generator.get_height();\n    var pixel_width = width / fractal_width;\n    for (var i = 0; i < fractal_height; i++) {\n        for (var j = 0; j < fractal_width; j++) {\n            var rgb = getRgb(dv_img, rgb_sizeof * (i * fractal_width + j));\n            ctx.fillStyle = rgb.to_string();\n            ctx.strokeStyle = \"rgba(1, 1, 1, 0)\";\n            ctx.fillRect(j * pixel_width, i * pixel_width, pixel_width, pixel_width);\n        }\n    }\n    // save the background so that we do not have to redraw/read from wasm memory each frame\n    fractal_background = ctx.getImageData(0, 0, width, height);\n}\nfunction getMagnet(dv, ptr) {\n    var offset = ptr;\n    var strength = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var radius = dv.getFloat64(offset, true);\n    offset += 8;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Magnet(strength, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), radius, new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getPendulum(dv, ptr) {\n    var offset = ptr;\n    var pos_start_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_start_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var mass = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var k = dv.getFloat64(offset, true);\n    offset += 8;\n    var friction = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var isStationary = dv.getUint8(offset) == 1 ? true : false;\n    offset += 1;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Pendulum(new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_start_x, pos_start_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(vel_x, vel_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(acc_x, acc_y), mass, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(ten_x, ten_y), k, friction, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(mag_x, mag_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(fnet_x, fnet_y), isStationary, new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getRgb(dv, ptr) {\n    var offset = ptr;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b);\n}\nfunction run() {\n}\n// Render the fractal for the first time\ngenerate_fractal_button.generate_fractal();\n// Run the render loop\nrequestAnimationFrame(renderLoop);\n\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs.js":
/*!***********************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Emitter\": () => (/* binding */ Emitter),\n/* harmony export */   \"FractalGenerator\": () => (/* binding */ FractalGenerator),\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"greet\": () => (/* binding */ greet),\n/* harmony export */   \"initSync\": () => (/* binding */ initSync)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nlet wasm;\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.buffer !== wasm.memory.buffer) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().slice(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    wasm.greet();\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass Emitter {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emitter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_emitter_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get clock() {\n        const ret = wasm.__wbg_get_emitter_clock(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set clock(arg0) {\n        wasm.__wbg_set_emitter_clock(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get tension() {\n        const ret = wasm.__wbg_get_emitter_tension(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set tension(arg0) {\n        wasm.__wbg_set_emitter_tension(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get friction() {\n        const ret = wasm.__wbg_get_emitter_friction(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set friction(arg0) {\n        wasm.__wbg_set_emitter_friction(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get mass() {\n        const ret = wasm.__wbg_get_emitter_mass(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set mass(arg0) {\n        wasm.__wbg_set_emitter_mass(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Emitter}\n    */\n    static new(x, y, interval, tension, friction, mass) {\n        const ret = wasm.emitter_new(x, y, interval, tension, friction, mass);\n        return Emitter.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        wasm.emitter_tick(this.ptr);\n    }\n}\n/**\n*/\nclass FractalGenerator {\n\n    static __wrap(ptr) {\n        const obj = Object.create(FractalGenerator.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_fractalgenerator_free(ptr);\n    }\n    /**\n    * @param {number} image_width\n    * @param {number} image_height\n    */\n    constructor(image_width, image_height) {\n        const ret = wasm.fractalgenerator_new(image_width, image_height);\n        return FractalGenerator.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_width() {\n        const ret = wasm.fractalgenerator_get_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_height() {\n        const ret = wasm.fractalgenerator_get_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {Universe} universe\n    * @param {number} k\n    * @param {number} friction\n    * @param {number} mass\n    */\n    generate(universe, k, friction, mass) {\n        _assertClass(universe, Universe);\n        wasm.fractalgenerator_generate(this.ptr, universe.ptr, k, friction, mass);\n    }\n    /**\n    * @returns {number}\n    */\n    get_pointer() {\n        const ret = wasm.fractalgenerator_get_pointer(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_length() {\n        const ret = wasm.fractalgenerator_get_length(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Rgb}\n    */\n    get_first_element() {\n        const ret = wasm.fractalgenerator_get_first_element(this.ptr);\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    * @param {number} radius\n    */\n    constructor(pos, strength, radius) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.magnet_new(ptr0, strength, radius);\n        return Magnet.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.magnet_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction, mass) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.pendulum_new(ptr0, k, friction, mass);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.pendulum_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = wasm.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Rgb {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Rgb.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_rgb_free(ptr);\n    }\n    /**\n    * @param {number} r\n    * @param {number} g\n    * @param {number} b\n    */\n    constructor(r, g, b) {\n        const ret = wasm.rgb_new(r, g, b);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.rgb_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @param {Rgb} mix\n    * @returns {Rgb}\n    */\n    static mix_pastel(mix) {\n        _assertClass(mix, Rgb);\n        var ptr0 = mix.ptr;\n        mix.ptr = 0;\n        const ret = wasm.rgb_mix_pastel(ptr0);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @param {Rgb} mix\n    * @returns {Rgb}\n    */\n    static mix_blacken(mix) {\n        _assertClass(mix, Rgb);\n        var ptr0 = mix.ptr;\n        mix.ptr = 0;\n        const ret = wasm.rgb_mix_blacken(ptr0);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {Rgb}\n    */\n    static random_pastel() {\n        const ret = wasm.rgb_random_pastel();\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    */\n    constructor(width, height, max_iters) {\n        const ret = wasm.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        wasm.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    * @param {number} n\n    */\n    add_nums(n) {\n        wasm.universe_add_nums(this.ptr, n);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} strength\n    * @param {number} radius\n    */\n    create_magnet(x, y, strength, radius) {\n        wasm.universe_create_magnet(this.ptr, x, y, strength, radius);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    */\n    create_pendulum(x, y, tension, friction, mass) {\n        wasm.universe_create_pendulum(this.ptr, x, y, tension, friction, mass);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    */\n    create_emitter(x, y, interval, tension, friction, mass) {\n        wasm.universe_create_emitter(this.ptr, x, y, interval, tension, friction, mass);\n    }\n    /**\n    * @param {number} i\n    * @returns {number}\n    */\n    get_num(i) {\n        const ptr = this.__destroy_into_raw();\n        const ret = wasm.universe_get_num(ptr, i);\n        return ret;\n    }\n    /**\n    */\n    clear_magnets() {\n        wasm.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        wasm.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        wasm.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    clear_emitters() {\n        wasm.universe_clear_emitters(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums() {\n        const ret = wasm.universe_pendulums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets() {\n        const ret = wasm.universe_magnets(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    nums() {\n        const ret = wasm.universe_nums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums_len() {\n        const ret = wasm.universe_pendulums_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets_len() {\n        const ret = wasm.universe_magnets_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} new_steps\n    */\n    set_steps(new_steps) {\n        wasm.universe_set_steps(this.ptr, new_steps);\n    }\n    /**\n    * @param {number} new_delta\n    */\n    set_delta(new_delta) {\n        wasm.universe_set_delta(this.ptr, new_delta);\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = wasm.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        wasm.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = wasm.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        wasm.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    constructor(x, y) {\n        const ret = wasm.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} v\n    * @returns {number}\n    */\n    static magnitude(v) {\n        _assertClass(v, Vec2D);\n        var ptr0 = v.ptr;\n        v.ptr = 0;\n        const ret = wasm.vec2d_magnitude(ptr0);\n        return ret;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = wasm.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} from_coords\n    * @param {number} to_width\n    * @param {number} to_height\n    * @param {number} from_width\n    * @param {number} from_height\n    * @returns {Vec2D}\n    */\n    static convert_coords(from_coords, to_width, to_height, from_width, from_height) {\n        _assertClass(from_coords, Vec2D);\n        var ptr0 = from_coords.ptr;\n        from_coords.ptr = 0;\n        const ret = wasm.vec2d_convert_coords(ptr0, to_width, to_height, from_width, from_height);\n        return Vec2D.__wrap(ret);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction getImports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_alert_bc509be1fa53a025 = function(arg0, arg1) {\n        alert(getStringFromWasm0(arg0, arg1));\n    };\n    imports.wbg.__wbg_process_e56fd54cf6319b6c = function(arg0) {\n        const ret = getObject(arg0).process;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_object = function(arg0) {\n        const val = getObject(arg0);\n        const ret = typeof(val) === 'object' && val !== null;\n        return ret;\n    };\n    imports.wbg.__wbg_versions_77e21455908dad33 = function(arg0) {\n        const ret = getObject(arg0).versions;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {\n        takeObject(arg0);\n    };\n    imports.wbg.__wbg_node_0dd25d832e4785d5 = function(arg0) {\n        const ret = getObject(arg0).node;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_string = function(arg0) {\n        const ret = typeof(getObject(arg0)) === 'string';\n        return ret;\n    };\n    imports.wbg.__wbg_require_0db1598d9ccecb30 = function() { return handleError(function (arg0, arg1, arg2) {\n        const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_crypto_b95d7173266618a9 = function(arg0) {\n        const ret = getObject(arg0).crypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_msCrypto_5a86d77a66230f81 = function(arg0) {\n        const ret = getObject(arg0).msCrypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_getRandomValues_b14734aa289bc356 = function() { return handleError(function (arg0, arg1) {\n        getObject(arg0).getRandomValues(getObject(arg1));\n    }, arguments) };\n    imports.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd = function() {\n        const ret = module;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_randomFillSync_91e2b39becca6147 = function() { return handleError(function (arg0, arg1, arg2) {\n        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n    }, arguments) };\n    imports.wbg.__wbg_newnoargs_971e9a5abe185139 = function(arg0, arg1) {\n        const ret = new Function(getStringFromWasm0(arg0, arg1));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_call_33d7bcddbbfa394a = function() { return handleError(function (arg0, arg1) {\n        const ret = getObject(arg0).call(getObject(arg1));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_self_fd00a1ef86d1b2ed = function() { return handleError(function () {\n        const ret = self.self;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_window_6f6e346d8bbd61d7 = function() { return handleError(function () {\n        const ret = window.window;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_globalThis_3348936ac49df00a = function() { return handleError(function () {\n        const ret = globalThis.globalThis;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_global_67175caf56f55ca9 = function() { return handleError(function () {\n        const ret = __webpack_require__.g.global;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbindgen_is_undefined = function(arg0) {\n        const ret = getObject(arg0) === undefined;\n        return ret;\n    };\n    imports.wbg.__wbg_buffer_34f5ec9f8a838ba0 = function(arg0) {\n        const ret = getObject(arg0).buffer;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_new_cda198d9dbc6d7ea = function(arg0) {\n        const ret = new Uint8Array(getObject(arg0));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_set_1a930cfcda1a8067 = function(arg0, arg1, arg2) {\n        getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n    };\n    imports.wbg.__wbg_length_51f19f73d6d9eff3 = function(arg0) {\n        const ret = getObject(arg0).length;\n        return ret;\n    };\n    imports.wbg.__wbg_newwithlength_66e5530e7079ea1b = function(arg0) {\n        const ret = new Uint8Array(arg0 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_subarray_270ff8dd5582c1ac = function(arg0, arg1, arg2) {\n        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {\n        const ret = getObject(arg0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n    imports.wbg.__wbindgen_memory = function() {\n        const ret = wasm.memory;\n        return addHeapObject(ret);\n    };\n\n    return imports;\n}\n\nfunction initMemory(imports, maybe_memory) {\n    imports.wbg.memory = maybe_memory || new WebAssembly.Memory({initial:18,maximum:16384,shared:true});\n}\n\nfunction finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedUint8Memory0 = new Uint8Array();\n\n    wasm.__wbindgen_start();\n    return wasm;\n}\n\nfunction initSync(bytes, maybe_memory) {\n    const imports = getImports();\n\n    initMemory(imports, maybe_memory);\n\n    const module = new WebAssembly.Module(bytes);\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n}\n\nasync function init(input, maybe_memory) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = getImports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    initMemory(imports, maybe_memory);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs.js?");

/***/ })

});