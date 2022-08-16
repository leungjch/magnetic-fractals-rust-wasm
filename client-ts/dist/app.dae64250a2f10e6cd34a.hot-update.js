"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("app",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var magnetic_pendulum_wasm_magnetic_pendulum_wasm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! magnetic-pendulum-wasm/magnetic_pendulum_wasm.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n\nlet memory;\nconst output = await (0,magnetic_pendulum_wasm_magnetic_pendulum_wasm_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nmemory = output.memory;\n// // Get \n// let handlers = await Comlink.wrap(\n//   new Worker(new URL('./wasm-worker.js', import.meta.url), {\n//     type: 'module'\n//   })\n// // @ts-ignore\n// ).handlers;\n// console.log(\"handlers is\", handlers)\n\nlet FRACTAL_SIZE = 256;\nlet SCALE = 16;\nconst universe = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(64, 64, 500);\nconst width = universe.width() * SCALE;\nconst height = universe.height() * SCALE;\nconst fractal_generator = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(FRACTAL_SIZE, FRACTAL_SIZE);\nlet fractal_background = new ImageData(FRACTAL_SIZE, FRACTAL_SIZE);\nconst canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\nvar state = {\n    type: 'pendulum',\n    tension: 0.8,\n    friction: 1.0,\n    mass: 1.0,\n    show_velocity: false,\n    show_tension: false,\n    steps: 50,\n    magnet_strength: 50,\n    magnet_radius: 2,\n    emitter_interval: 50,\n    show_fractal: true,\n};\nvar reset_button = {\n    clear: function () {\n        universe.clear_magnets();\n        universe.clear_pendulums();\n        universe.clear_emitters();\n        ctx.rect(0, 0, width, height);\n        ctx.fillStyle = \"black\";\n        ctx.fill();\n    }\n};\nvar generate_fractal_button = {\n    generate_fractal: function () {\n        // fractal_generator.generate(universe, state.tension, state.friction, state.mass)\n        // update_fractal_background();\n        // let handler = handlers['multiThread']\n        // let {rawImageData, time } = handler({\n        //           width,\n        //           height,\n        //           universe\n        //         });\n        // const imgData = new ImageData(rawImageData,FRACTAL_SIZE, FRACTAL_SIZE);\n        // ctx.putImageData(imgData, 0,0)\n        const raw_image_data = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(FRACTAL_SIZE, FRACTAL_SIZE, universe, state.tension, state.friction, state.mass);\n        console.log(\"data len is\", raw_image_data.length, fractal_background.data.length);\n        fractal_background = new ImageData(raw_image_data, FRACTAL_SIZE, FRACTAL_SIZE);\n        console.log(fractal_background);\n        ctx.putImageData(fractal_background, 0, 0);\n    }\n};\nvar gui = new dat_gui__WEBPACK_IMPORTED_MODULE_3__.GUI();\ngui.add(state, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'emitter': 'emitter' });\nvar pendulum_folder = gui.addFolder(\"Pendulum settings\");\npendulum_folder.add(state, 'mass', 0.01, 10.0).name(\"Mass\");\npendulum_folder.add(state, 'tension', 0, 5).name(\"Tension\");\npendulum_folder.add(state, 'friction', 0, 1.0, 0.001).name(\"Friction\");\nvar magnet_folder = gui.addFolder(\"Magnet settings\");\nmagnet_folder.add(state, 'magnet_strength', -500, 500).name(\"Magnet strength\");\nmagnet_folder.add(state, \"magnet_radius\", 0.1, 5, 0.01).name(\"Magnet radius\");\nvar emitter_folder = gui.addFolder(\"Emitter settings\");\nemitter_folder.add(state, \"emitter_interval\", 5, 150, 5);\ngui.add(state, 'steps', 0, 200).name(\"Render speed\").onChange((new_steps) => { universe.set_steps(new_steps); });\ngui.add(state, \"show_velocity\").name(\"Show velocity\");\ngui.add(state, \"show_tension\").name(\"Show tension\");\ngui.add(state, \"show_fractal\").name(\"Show fractal\");\ngui.add(reset_button, 'clear').name(\"Clear all\");\ngui.add(generate_fractal_button, \"generate_fractal\").name(\"Generate fractal\");\nfunction canvas_to_universe_coords(canvas_x, canvas_y) {\n    const x = canvas_x / width * universe.width();\n    const y = canvas_y / height * universe.height();\n    return [x, y];\n}\nfunction universe_to_canvas_coords(x, y) {\n    const canvas_x = x / universe.width() * width;\n    const canvas_y = y / universe.height() * height;\n    return [canvas_x, canvas_y];\n}\nfunction getCursorPosition(canvas, event) {\n    const rect = canvas.getBoundingClientRect();\n    const canvas_x = event.clientX - rect.left;\n    const canvas_y = event.clientY - rect.top;\n    const [x, y] = canvas_to_universe_coords(canvas_x, canvas_y);\n    return [x, y];\n}\nconsole.log(width, height);\ncanvas.addEventListener('mousedown', function (e) {\n    const [x, y] = getCursorPosition(canvas, e);\n    if (state.type == \"pendulum\") {\n        universe.create_pendulum(x, y, state.tension, state.friction, state.mass);\n    }\n    if (state.type == \"magnet\") {\n        universe.create_magnet(x, y, state.magnet_strength, state.magnet_radius);\n    }\n    if (state.type == \"emitter\") {\n        universe.create_emitter(x, y, state.emitter_interval, state.friction, state.tension, state.mass);\n    }\n});\nlet t = 0;\nfunction renderLoop() {\n    universe.tick();\n    draw(universe, t);\n    t += 1;\n    t %= 120;\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe, t) {\n    // ctx.globalCompositeOperation = 'destination-over';\n    ctx.clearRect(0, 0, width, height); // clear canvas\n    // Show the fractal background\n    if (state.show_fractal) {\n        ctx.putImageData(fractal_background, 0, 0);\n    }\n    // Read magnets from wasm memory\n    const magnets_ptr = universe.magnets();\n    const magnet_sizeof = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    const magnets_n = universe.magnets_len();\n    // console.log(\"magnets_n\", magnets_n, memory, magnets_ptr)\n    let dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);\n    // Render magnets from wasm memory\n    for (let i = 0; i < magnets_n; i++) {\n        let magnet = getMagnet(dv_magnets, i * magnet_sizeof);\n        const [canvas_x, canvas_y] = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y);\n        ctx.beginPath();\n        ctx.strokeStyle = \"rgba(1, 1, 1, 1)\";\n        ctx.fillStyle = magnet.color.to_string();\n        ctx.arc(canvas_x, canvas_y, magnet.radius * SCALE, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.stroke();\n    }\n    // Get pendulums info from wasm memory\n    const pendulums_ptr = universe.pendulums();\n    const pendulum_sizeof = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnetic-pendulum-wasm'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    const pendulums_n = universe.pendulums_len();\n    let dv_pendulums = new DataView(memory.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);\n    // Render pendulums from wasm memory\n    for (let i = 0; i < pendulums_n; i++) {\n        const pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);\n        const [canvas_x, canvas_y] = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y);\n        ctx.strokeStyle = \"#FFFFFF\";\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.arc(canvas_x, canvas_y, 5, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.stroke();\n        // Show tension\n        if (state.show_tension) {\n            ctx.beginPath();\n            ctx.lineWidth = Math.sqrt(Math.pow(pendulum.f_tension.x, 2) + Math.pow(pendulum.f_tension.y, 2));\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(width / 2, height / 2);\n            ctx.stroke();\n            ctx.lineWidth = 1;\n        }\n        // Show velocities\n        if (state.show_velocity) {\n            const [canvas_vel_x, canvas_vel_y] = universe_to_canvas_coords(pendulum.vel.x, pendulum.vel.y);\n            ctx.beginPath();\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(canvas_x - canvas_vel_x / 10, canvas_y - canvas_vel_y / 10);\n            ctx.stroke();\n        }\n    }\n}\n;\n// function update_fractal_background() {\n//   ctx.clearRect(0, 0, width, height); // clear canvas\n//   // Render the fractal as a background\n//   const img_ptr = fractal_generator.get_pointer()\n//   const rgb_sizeof = wasm.Rgb.size_of()\n//   const img_len = fractal_generator.get_length();\n//   let dv_img = new DataView(memory.buffer, img_ptr, img_len * rgb_sizeof);\n//   // Get image data\n//   let fractal_width = fractal_generator.get_width();\n//   let fractal_height = fractal_generator.get_height();\n//   let pixel_width = width / fractal_width;\n//   ctx.strokeStyle = \"rgba(1, 1, 1, 0)\";\n//   for (let i = 0; i < fractal_height; i++) {\n//     for (let j = 0; j < fractal_width; j++) {\n//       let rgb = getRgb(dv_img, rgb_sizeof * (i * fractal_width + j));\n//       ctx.fillStyle = rgb.to_string();\n//       ctx.fillRect(j * pixel_width, i * pixel_width, pixel_width, pixel_width)\n//     }\n//   }\n//   // save the background so that we do not have to redraw/read from wasm memory each frame\n//   fractal_background = ctx.getImageData(0, 0, width, height);\n// }\nfunction getMagnet(dv, ptr) {\n    let offset = ptr;\n    let strength = dv.getFloat64(offset, true);\n    offset += 8;\n    let pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let radius = dv.getFloat64(offset, true);\n    offset += 8;\n    let color_r = dv.getUint8(offset);\n    offset += 1;\n    let color_g = dv.getUint8(offset);\n    offset += 1;\n    let color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Magnet(strength, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), radius, new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getPendulum(dv, ptr) {\n    let offset = ptr;\n    let pos_start_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let pos_start_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let vel_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let vel_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let acc_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let acc_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let mass = dv.getFloat64(offset, true);\n    offset += 8;\n    let ten_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let ten_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let k = dv.getFloat64(offset, true);\n    offset += 8;\n    let friction = dv.getFloat64(offset, true);\n    offset += 8;\n    let mag_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let mag_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let fnet_x = dv.getFloat64(offset, true);\n    offset += 8;\n    let fnet_y = dv.getFloat64(offset, true);\n    offset += 8;\n    let isStationary = dv.getUint8(offset) == 1 ? true : false;\n    offset += 1;\n    let color_r = dv.getUint8(offset);\n    offset += 1;\n    let color_g = dv.getUint8(offset);\n    offset += 1;\n    let color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Pendulum(new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_start_x, pos_start_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(vel_x, vel_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(acc_x, acc_y), mass, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(ten_x, ten_y), k, friction, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(mag_x, mag_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(fnet_x, fnet_y), isStationary, new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getRgb(dv, ptr) {\n    let offset = ptr;\n    let color_r = dv.getUint8(offset);\n    offset += 1;\n    let color_g = dv.getUint8(offset);\n    offset += 1;\n    let color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b);\n}\n// Render the fractal for the first time\n// generate_fractal_button.generate_fractal();\n// Run the render loop\nrequestAnimationFrame(renderLoop);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js":
/*!*************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Emitter\": () => (/* binding */ Emitter),\n/* harmony export */   \"FractalGenerator\": () => (/* binding */ FractalGenerator),\n/* harmony export */   \"Magnet\": () => (/* binding */ Magnet),\n/* harmony export */   \"Pendulum\": () => (/* binding */ Pendulum),\n/* harmony export */   \"Rgb\": () => (/* binding */ Rgb),\n/* harmony export */   \"Universe\": () => (/* binding */ Universe),\n/* harmony export */   \"Vec2D\": () => (/* binding */ Vec2D),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"generate_fractal\": () => (/* binding */ generate_fractal),\n/* harmony export */   \"greet\": () => (/* binding */ greet),\n/* harmony export */   \"initSync\": () => (/* binding */ initSync),\n/* harmony export */   \"initThreadPool\": () => (/* binding */ initThreadPool),\n/* harmony export */   \"sum_of_squares\": () => (/* binding */ sum_of_squares),\n/* harmony export */   \"wbg_rayon_PoolBuilder\": () => (/* binding */ wbg_rayon_PoolBuilder),\n/* harmony export */   \"wbg_rayon_start_worker\": () => (/* binding */ wbg_rayon_start_worker)\n/* harmony export */ });\n/* harmony import */ var _snippets_wasm_bindgen_rayon_7afa899f36665473_src_workerHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js */ \"../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nlet wasm;\n\nconst cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.buffer !== wasm.memory.buffer) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().slice(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nfunction greet() {\n    wasm.greet();\n}\n\nlet cachedUint32Memory0 = new Uint32Array();\n\nfunction getUint32Memory0() {\n    if (cachedUint32Memory0.buffer !== wasm.memory.buffer) {\n        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);\n    }\n    return cachedUint32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray32ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 4);\n    getUint32Memory0().set(arg, ptr / 4);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n/**\n* @param {Int32Array} numbers\n* @returns {number}\n*/\nfunction sum_of_squares(numbers) {\n    const ptr0 = passArray32ToWasm0(numbers, wasm.__wbindgen_malloc);\n    const len0 = WASM_VECTOR_LEN;\n    const ret = wasm.sum_of_squares(ptr0, len0);\n    return ret;\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.buffer !== wasm.memory.buffer) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nlet cachedUint8ClampedMemory0 = new Uint8ClampedArray();\n\nfunction getUint8ClampedMemory0() {\n    if (cachedUint8ClampedMemory0.buffer !== wasm.memory.buffer) {\n        cachedUint8ClampedMemory0 = new Uint8ClampedArray(wasm.memory.buffer);\n    }\n    return cachedUint8ClampedMemory0;\n}\n\nfunction getClampedArrayU8FromWasm0(ptr, len) {\n    return getUint8ClampedMemory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n* @param {number} image_width\n* @param {number} image_height\n* @param {Universe} universe\n* @param {number} k\n* @param {number} friction\n* @param {number} mass\n* @returns {Uint8ClampedArray}\n*/\nfunction generate_fractal(image_width, image_height, universe, k, friction, mass) {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        _assertClass(universe, Universe);\n        wasm.generate_fractal(retptr, image_width, image_height, universe.ptr, k, friction, mass);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v0 = getClampedArrayU8FromWasm0(r0, r1).slice();\n        wasm.__wbindgen_free(r0, r1 * 1);\n        return v0;\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n    }\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n/**\n* @param {number} num_threads\n* @returns {Promise<any>}\n*/\nfunction initThreadPool(num_threads) {\n    const ret = wasm.initThreadPool(num_threads);\n    return takeObject(ret);\n}\n\n/**\n* @param {number} receiver\n*/\nfunction wbg_rayon_start_worker(receiver) {\n    wasm.wbg_rayon_start_worker(receiver);\n}\n\n/**\n*/\nclass Emitter {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emitter.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_emitter_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get clock() {\n        const ret = wasm.__wbg_get_emitter_clock(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set clock(arg0) {\n        wasm.__wbg_set_emitter_clock(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get tension() {\n        const ret = wasm.__wbg_get_emitter_tension(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set tension(arg0) {\n        wasm.__wbg_set_emitter_tension(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get friction() {\n        const ret = wasm.__wbg_get_emitter_friction(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set friction(arg0) {\n        wasm.__wbg_set_emitter_friction(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get mass() {\n        const ret = wasm.__wbg_get_emitter_mass(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set mass(arg0) {\n        wasm.__wbg_set_emitter_mass(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Emitter}\n    */\n    static new(x, y, interval, tension, friction, mass) {\n        const ret = wasm.emitter_new(x, y, interval, tension, friction, mass);\n        return Emitter.__wrap(ret);\n    }\n    /**\n    */\n    tick() {\n        wasm.emitter_tick(this.ptr);\n    }\n}\n/**\n*/\nclass FractalGenerator {\n\n    static __wrap(ptr) {\n        const obj = Object.create(FractalGenerator.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_fractalgenerator_free(ptr);\n    }\n    /**\n    * @param {number} image_width\n    * @param {number} image_height\n    */\n    constructor(image_width, image_height) {\n        const ret = wasm.fractalgenerator_new(image_width, image_height);\n        return FractalGenerator.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_width() {\n        const ret = wasm.fractalgenerator_get_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_height() {\n        const ret = wasm.fractalgenerator_get_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {Universe} universe\n    * @param {number} k\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Uint8Array}\n    */\n    generate(universe, k, friction, mass) {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            _assertClass(universe, Universe);\n            wasm.fractalgenerator_generate(retptr, this.ptr, universe.ptr, k, friction, mass);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var v0 = getArrayU8FromWasm0(r0, r1).slice();\n            wasm.__wbindgen_free(r0, r1 * 1);\n            return v0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n}\n/**\n*/\nclass Magnet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Magnet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_magnet_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} strength\n    * @param {number} radius\n    */\n    constructor(pos, strength, radius) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.magnet_new(ptr0, strength, radius);\n        return Magnet.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.magnet_size_of();\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Pendulum {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Pendulum.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_pendulum_free(ptr);\n    }\n    /**\n    * @param {Vec2D} pos\n    * @param {number} k\n    * @param {number} friction\n    * @param {number} mass\n    * @returns {Pendulum}\n    */\n    static new(pos, k, friction, mass) {\n        _assertClass(pos, Vec2D);\n        var ptr0 = pos.ptr;\n        pos.ptr = 0;\n        const ret = wasm.pendulum_new(ptr0, k, friction, mass);\n        return Pendulum.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.pendulum_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    pos() {\n        const ret = wasm.pendulum_pos(this.ptr);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass Rgb {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Rgb.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_rgb_free(ptr);\n    }\n    /**\n    * @param {number} r\n    * @param {number} g\n    * @param {number} b\n    */\n    constructor(r, g, b) {\n        const ret = wasm.rgb_new(r, g, b);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    static size_of() {\n        const ret = wasm.rgb_size_of();\n        return ret >>> 0;\n    }\n    /**\n    * @param {Rgb} mix\n    * @returns {Rgb}\n    */\n    static mix_pastel(mix) {\n        _assertClass(mix, Rgb);\n        var ptr0 = mix.ptr;\n        mix.ptr = 0;\n        const ret = wasm.rgb_mix_pastel(ptr0);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @param {Rgb} mix\n    * @returns {Rgb}\n    */\n    static mix_blacken(mix) {\n        _assertClass(mix, Rgb);\n        var ptr0 = mix.ptr;\n        mix.ptr = 0;\n        const ret = wasm.rgb_mix_blacken(ptr0);\n        return Rgb.__wrap(ret);\n    }\n    /**\n    * @returns {Rgb}\n    */\n    static random_pastel() {\n        const ret = wasm.rgb_random_pastel();\n        return Rgb.__wrap(ret);\n    }\n}\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} max_iters\n    */\n    constructor(width, height, max_iters) {\n        const ret = wasm.universe_new(width, height, max_iters);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @param {Magnet} magnet\n    */\n    add_magnet(magnet) {\n        _assertClass(magnet, Magnet);\n        var ptr0 = magnet.ptr;\n        magnet.ptr = 0;\n        wasm.universe_add_magnet(this.ptr, ptr0);\n    }\n    /**\n    * @param {number} n\n    */\n    add_nums(n) {\n        wasm.universe_add_nums(this.ptr, n);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} strength\n    * @param {number} radius\n    */\n    create_magnet(x, y, strength, radius) {\n        wasm.universe_create_magnet(this.ptr, x, y, strength, radius);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    */\n    create_pendulum(x, y, tension, friction, mass) {\n        wasm.universe_create_pendulum(this.ptr, x, y, tension, friction, mass);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @param {number} interval\n    * @param {number} tension\n    * @param {number} friction\n    * @param {number} mass\n    */\n    create_emitter(x, y, interval, tension, friction, mass) {\n        wasm.universe_create_emitter(this.ptr, x, y, interval, tension, friction, mass);\n    }\n    /**\n    * @param {number} i\n    * @returns {number}\n    */\n    get_num(i) {\n        const ptr = this.__destroy_into_raw();\n        const ret = wasm.universe_get_num(ptr, i);\n        return ret;\n    }\n    /**\n    */\n    clear_magnets() {\n        wasm.universe_clear_magnets(this.ptr);\n    }\n    /**\n    * @param {Pendulum} pendulum\n    */\n    add_pendulum(pendulum) {\n        _assertClass(pendulum, Pendulum);\n        var ptr0 = pendulum.ptr;\n        pendulum.ptr = 0;\n        wasm.universe_add_pendulum(this.ptr, ptr0);\n    }\n    /**\n    */\n    clear_pendulums() {\n        wasm.universe_clear_pendulums(this.ptr);\n    }\n    /**\n    */\n    clear_emitters() {\n        wasm.universe_clear_emitters(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums() {\n        const ret = wasm.universe_pendulums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets() {\n        const ret = wasm.universe_magnets(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    nums() {\n        const ret = wasm.universe_nums(this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    pendulums_len() {\n        const ret = wasm.universe_pendulums_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    magnets_len() {\n        const ret = wasm.universe_magnets_len(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} new_steps\n    */\n    set_steps(new_steps) {\n        wasm.universe_set_steps(this.ptr, new_steps);\n    }\n    /**\n    * @param {number} new_delta\n    */\n    set_delta(new_delta) {\n        wasm.universe_set_delta(this.ptr, new_delta);\n    }\n}\n/**\n*/\nclass Vec2D {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vec2D.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_vec2d_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = wasm.__wbg_get_vec2d_x(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        wasm.__wbg_set_vec2d_x(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = wasm.__wbg_get_vec2d_y(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        wasm.__wbg_set_vec2d_y(this.ptr, arg0);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    constructor(x, y) {\n        const ret = wasm.vec2d_new(x, y);\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} v\n    * @returns {number}\n    */\n    static magnitude(v) {\n        _assertClass(v, Vec2D);\n        var ptr0 = v.ptr;\n        v.ptr = 0;\n        const ret = wasm.vec2d_magnitude(ptr0);\n        return ret;\n    }\n    /**\n    * @returns {Vec2D}\n    */\n    static zero() {\n        const ret = wasm.vec2d_zero();\n        return Vec2D.__wrap(ret);\n    }\n    /**\n    * @param {Vec2D} from_coords\n    * @param {number} to_width\n    * @param {number} to_height\n    * @param {number} from_width\n    * @param {number} from_height\n    * @returns {Vec2D}\n    */\n    static convert_coords(from_coords, to_width, to_height, from_width, from_height) {\n        _assertClass(from_coords, Vec2D);\n        var ptr0 = from_coords.ptr;\n        from_coords.ptr = 0;\n        const ret = wasm.vec2d_convert_coords(ptr0, to_width, to_height, from_width, from_height);\n        return Vec2D.__wrap(ret);\n    }\n}\n/**\n*/\nclass wbg_rayon_PoolBuilder {\n\n    static __wrap(ptr) {\n        const obj = Object.create(wbg_rayon_PoolBuilder.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_wbg_rayon_poolbuilder_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    numThreads() {\n        const ret = wasm.wbg_rayon_poolbuilder_numThreads(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    receiver() {\n        const ret = wasm.wbg_rayon_poolbuilder_receiver(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    build() {\n        wasm.wbg_rayon_poolbuilder_build(this.ptr);\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction getImports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {\n        const ret = getStringFromWasm0(arg0, arg1);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {\n        takeObject(arg0);\n    };\n    imports.wbg.__wbg_alert_beb704c8b694d433 = function(arg0, arg1) {\n        alert(getStringFromWasm0(arg0, arg1));\n    };\n    imports.wbg.__wbg_log_17733ab6fa45831d = function(arg0) {\n        console.log(getObject(arg0));\n    };\n    imports.wbg.__wbg_process_e56fd54cf6319b6c = function(arg0) {\n        const ret = getObject(arg0).process;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_object = function(arg0) {\n        const val = getObject(arg0);\n        const ret = typeof(val) === 'object' && val !== null;\n        return ret;\n    };\n    imports.wbg.__wbg_versions_77e21455908dad33 = function(arg0) {\n        const ret = getObject(arg0).versions;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_node_0dd25d832e4785d5 = function(arg0) {\n        const ret = getObject(arg0).node;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_is_string = function(arg0) {\n        const ret = typeof(getObject(arg0)) === 'string';\n        return ret;\n    };\n    imports.wbg.__wbg_require_0db1598d9ccecb30 = function() { return handleError(function (arg0, arg1, arg2) {\n        const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_crypto_b95d7173266618a9 = function(arg0) {\n        const ret = getObject(arg0).crypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_msCrypto_5a86d77a66230f81 = function(arg0) {\n        const ret = getObject(arg0).msCrypto;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_getRandomValues_b14734aa289bc356 = function() { return handleError(function (arg0, arg1) {\n        getObject(arg0).getRandomValues(getObject(arg1));\n    }, arguments) };\n    imports.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd = function() {\n        const ret = module;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_randomFillSync_91e2b39becca6147 = function() { return handleError(function (arg0, arg1, arg2) {\n        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n    }, arguments) };\n    imports.wbg.__wbg_newnoargs_971e9a5abe185139 = function(arg0, arg1) {\n        const ret = new Function(getStringFromWasm0(arg0, arg1));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_call_33d7bcddbbfa394a = function() { return handleError(function (arg0, arg1) {\n        const ret = getObject(arg0).call(getObject(arg1));\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_self_fd00a1ef86d1b2ed = function() { return handleError(function () {\n        const ret = self.self;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_window_6f6e346d8bbd61d7 = function() { return handleError(function () {\n        const ret = window.window;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_globalThis_3348936ac49df00a = function() { return handleError(function () {\n        const ret = globalThis.globalThis;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbg_global_67175caf56f55ca9 = function() { return handleError(function () {\n        const ret = __webpack_require__.g.global;\n        return addHeapObject(ret);\n    }, arguments) };\n    imports.wbg.__wbindgen_is_undefined = function(arg0) {\n        const ret = getObject(arg0) === undefined;\n        return ret;\n    };\n    imports.wbg.__wbg_buffer_34f5ec9f8a838ba0 = function(arg0) {\n        const ret = getObject(arg0).buffer;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_new_cda198d9dbc6d7ea = function(arg0) {\n        const ret = new Uint8Array(getObject(arg0));\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_set_1a930cfcda1a8067 = function(arg0, arg1, arg2) {\n        getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n    };\n    imports.wbg.__wbg_length_51f19f73d6d9eff3 = function(arg0) {\n        const ret = getObject(arg0).length;\n        return ret;\n    };\n    imports.wbg.__wbg_newwithlength_66e5530e7079ea1b = function(arg0) {\n        const ret = new Uint8Array(arg0 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_subarray_270ff8dd5582c1ac = function(arg0, arg1, arg2) {\n        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {\n        const ret = getObject(arg0);\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n    imports.wbg.__wbindgen_module = function() {\n        const ret = init.__wbindgen_wasm_module;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbindgen_memory = function() {\n        const ret = wasm.memory;\n        return addHeapObject(ret);\n    };\n    imports.wbg.__wbg_startWorkers_04f63eca19916b8f = function(arg0, arg1, arg2) {\n        const ret = (0,_snippets_wasm_bindgen_rayon_7afa899f36665473_src_workerHelpers_js__WEBPACK_IMPORTED_MODULE_0__.startWorkers)(takeObject(arg0), takeObject(arg1), wbg_rayon_PoolBuilder.__wrap(arg2));\n        return addHeapObject(ret);\n    };\n\n    return imports;\n}\n\nfunction initMemory(imports, maybe_memory) {\n    imports.wbg.memory = maybe_memory || new WebAssembly.Memory({initial:18,maximum:16384,shared:true});\n}\n\nfunction finalizeInit(instance, module) {\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n    cachedInt32Memory0 = new Int32Array();\n    cachedUint32Memory0 = new Uint32Array();\n    cachedUint8Memory0 = new Uint8Array();\n    cachedUint8ClampedMemory0 = new Uint8ClampedArray();\n\n    wasm.__wbindgen_start();\n    return wasm;\n}\n\nfunction initSync(bytes, maybe_memory) {\n    const imports = getImports();\n\n    initMemory(imports, maybe_memory);\n\n    const module = new WebAssembly.Module(bytes);\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return finalizeInit(instance, module);\n}\n\nasync function init(input, maybe_memory) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! magnetic_pendulum_wasm_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = getImports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    initMemory(imports, maybe_memory);\n\n    const { instance, module } = await load(await input, imports);\n\n    return finalizeInit(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js":
/*!*****************************************************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startWorkers\": () => (/* binding */ startWorkers)\n/* harmony export */ });\n/**\n * Copyright 2021 Google Inc. All Rights Reserved.\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *     http://www.apache.org/licenses/LICENSE-2.0\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n// Note: we use `wasm_bindgen_worker_`-prefixed message types to make sure\n// we can handle bundling into other files, which might happen to have their\n// own `postMessage`/`onmessage` communication channels.\n//\n// If we didn't take that into the account, we could send much simpler signals\n// like just `0` or whatever, but the code would be less resilient.\n\nfunction waitForMsgType(target, type) {\n  return new Promise(resolve => {\n    target.addEventListener('message', function onMsg({ data }) {\n      if (data == null || data.type !== type) return;\n      target.removeEventListener('message', onMsg);\n      resolve(data);\n    });\n  });\n}\n\nwaitForMsgType(self, 'wasm_bindgen_worker_init').then(async data => {\n  // # Note 1\n  // Our JS should have been generated in\n  // `[out-dir]/snippets/wasm-bindgen-rayon-[hash]/workerHelpers.js`,\n  // resolve the main module via `../../..`.\n  //\n  // This might need updating if the generated structure changes on wasm-bindgen\n  // side ever in the future, but works well with bundlers today. The whole\n  // point of this crate, after all, is to abstract away unstable features\n  // and temporary bugs so that you don't need to deal with them in your code.\n  //\n  // # Note 2\n  // This could be a regular import, but then some bundlers complain about\n  // circular deps.\n  //\n  // Dynamic import could be cheap if this file was inlined into the parent,\n  // which would require us just using `../../..` in `new Worker` below,\n  // but that doesn't work because wasm-pack unconditionally adds\n  // \"sideEffects\":false (see below).\n  //\n  // OTOH, even though it can't be inlined, it should be still reasonably\n  // cheap since the requested file is already in cache (it was loaded by\n  // the main thread).\n  const pkg = await Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../..'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n  await pkg.default(data.module, data.memory);\n  postMessage({ type: 'wasm_bindgen_worker_ready' });\n  pkg.wbg_rayon_start_worker(data.receiver);\n});\n\n// Note: this is never used, but necessary to prevent a bug in Firefox\n// (https://bugzilla.mozilla.org/show_bug.cgi?id=1702191) where it collects\n// Web Workers that have a shared WebAssembly memory with the main thread,\n// but are not explicitly rooted via a `Worker` instance.\n//\n// By storing them in a variable, we can keep `Worker` objects around and\n// prevent them from getting GC-d.\nlet _workers;\n\nasync function startWorkers(module, memory, builder) {\n  const workerInit = {\n    type: 'wasm_bindgen_worker_init',\n    module,\n    memory,\n    receiver: builder.receiver()\n  };\n\n  _workers = await Promise.all(\n    Array.from({ length: builder.numThreads() }, async () => {\n      // Self-spawn into a new Worker.\n      //\n      // TODO: while `new URL('...', import.meta.url) becomes a semi-standard\n      // way to get asset URLs relative to the module across various bundlers\n      // and browser, ideally we should switch to `import.meta.resolve`\n      // once it becomes a standard.\n      //\n      // Note: we could use `../../..` as the URL here to inline workerHelpers.js\n      // into the parent entry instead of creating another split point -\n      // this would be preferable from optimization perspective -\n      // however, Webpack then eliminates all message handler code\n      // because wasm-pack produces \"sideEffects\":false in package.json\n      // unconditionally.\n      //\n      // The only way to work around that is to have side effect code\n      // in an entry point such as Worker file itself.\n      const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"magnetic-pendulum-rs_pkg_snippets_wasm-bindgen-rayon-7afa899f36665473_src_workerHelpers_js\"), __webpack_require__.b), {\n        type: undefined\n      });\n      worker.postMessage(workerInit);\n      await waitForMsgType(worker, 'wasm_bindgen_worker_ready');\n      return worker;\n    })\n  );\n  builder.build();\n}\n\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js?");

/***/ }),

/***/ "../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm":
/*!******************************************************************!*\
  !*** ../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f59a88e224a5b8de94cd.wasm\";\n\n//# sourceURL=webpack://client-ts/../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm_bg.wasm?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bd549035f80f25db2444")
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
/******/ 		"app": 0
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