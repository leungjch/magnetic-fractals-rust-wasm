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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs.js\");\n/* harmony import */ var magnetic_pendulum_rs_magnetic_pendulum_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_rs_bg.wasm\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\nfunction run() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0,magnetic_pendulum_rs_magnetic_pendulum_rs_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()];\n                case 1:\n                    _a.sent();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nrun();\n\nvar FRACTAL_SIZE = 512;\nvar universe = new magnetic_pendulum_rs_magnetic_pendulum_rs_js__WEBPACK_IMPORTED_MODULE_1__.Universe(64, 64, 500);\nvar width = universe.width() * 20;\nvar height = universe.height() * 20;\nvar fractal_generator = new magnetic_pendulum_rs_magnetic_pendulum_rs_js__WEBPACK_IMPORTED_MODULE_1__.FractalGenerator(FRACTAL_SIZE, FRACTAL_SIZE);\nvar fractal_background = new ImageData(width, height);\nvar state = {\n    type: 'pendulum',\n    tension: 0.8,\n    friction: 1.0,\n    mass: 1.0,\n    show_velocity: false,\n    show_tension: false,\n    steps: 50,\n    magnet_strength: 50,\n    magnet_radius: 2,\n    emitter_interval: 50,\n    show_fractal: true,\n};\nvar reset_button = {\n    clear: function () {\n        universe.clear_magnets();\n        universe.clear_pendulums();\n        universe.clear_emitters();\n        ctx.rect(0, 0, width, height);\n        ctx.fillStyle = \"black\";\n        ctx.fill();\n    }\n};\nvar generate_fractal_button = {\n    generate_fractal: function () {\n        fractal_generator.generate(universe, state.tension, state.friction, state.mass);\n        update_fractal_background();\n    }\n};\nvar gui = new dat_gui__WEBPACK_IMPORTED_MODULE_2__.GUI();\ngui.add(state, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'emitter': 'emitter' });\nvar pendulum_folder = gui.addFolder(\"Pendulum settings\");\npendulum_folder.add(state, 'mass', 0.01, 10.0).name(\"Mass\");\npendulum_folder.add(state, 'tension', 0, 5).name(\"Tension\");\npendulum_folder.add(state, 'friction', 0, 1.0, 0.001).name(\"Friction\");\nvar magnet_folder = gui.addFolder(\"Magnet settings\");\nmagnet_folder.add(state, 'magnet_strength', -500, 500).name(\"Magnet strength\");\nmagnet_folder.add(state, \"magnet_radius\", 0.1, 5, 0.01).name(\"Magnet radius\");\nvar emitter_folder = gui.addFolder(\"Emitter settings\");\nemitter_folder.add(state, \"emitter_interval\", 5, 150, 5);\ngui.add(state, 'steps', 0, 200).name(\"Render speed\").onChange(function (new_steps) { universe.set_steps(new_steps); });\ngui.add(state, \"show_velocity\").name(\"Show velocity\");\ngui.add(state, \"show_tension\").name(\"Show tension\");\ngui.add(state, \"show_fractal\").name(\"Show fractal\");\ngui.add(reset_button, 'clear').name(\"Clear all\");\ngui.add(generate_fractal_button, \"generate_fractal\").name(\"Generate fractal\");\nfunction canvas_to_universe_coords(canvas_x, canvas_y) {\n    var x = canvas_x / width * universe.width();\n    var y = canvas_y / height * universe.height();\n    return [x, y];\n}\nfunction universe_to_canvas_coords(x, y) {\n    var canvas_x = x / universe.width() * width;\n    var canvas_y = y / universe.height() * height;\n    return [canvas_x, canvas_y];\n}\nfunction getCursorPosition(canvas, event) {\n    var rect = canvas.getBoundingClientRect();\n    var canvas_x = event.clientX - rect.left;\n    var canvas_y = event.clientY - rect.top;\n    var _a = canvas_to_universe_coords(canvas_x, canvas_y), x = _a[0], y = _a[1];\n    return [x, y];\n}\nconsole.log(width, height);\nvar canvas = document.getElementById('magnetic-pendulum-canvas');\ncanvas.width = width;\ncanvas.height = height;\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = \"black\";\nctx.fillRect(0, 0, canvas.width, canvas.height);\ncanvas.addEventListener('mousedown', function (e) {\n    var _a = getCursorPosition(canvas, e), x = _a[0], y = _a[1];\n    if (state.type == \"pendulum\") {\n        universe.create_pendulum(x, y, state.tension, state.friction, state.mass);\n    }\n    if (state.type == \"magnet\") {\n        universe.create_magnet(x, y, state.magnet_strength, state.magnet_radius);\n    }\n    if (state.type == \"emitter\") {\n        universe.create_emitter(x, y, state.emitter_interval, state.friction, state.tension, state.mass);\n    }\n});\nvar t = 0;\nfunction renderLoop() {\n    universe.tick();\n    draw(universe, t);\n    t += 1;\n    t %= 120;\n    requestAnimationFrame(renderLoop);\n}\n;\nfunction draw(universe, t) {\n    // ctx.globalCompositeOperation = 'destination-over';\n    ctx.clearRect(0, 0, width, height); // clear canvas\n    // Get pendulums info from wasm memory\n    var pendulums_ptr = universe.pendulums();\n    var pendulum_sizeof = magnetic_pendulum_rs_magnetic_pendulum_rs_js__WEBPACK_IMPORTED_MODULE_1__.Pendulum.size_of();\n    var pendulums_n = universe.pendulums_len();\n    var dv_pendulums = new DataView(/* non-default import from non-esm module */undefined.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);\n    if (state.show_fractal) {\n        ctx.putImageData(fractal_background, 0, 0);\n    }\n    // Read magnets from wasm memory\n    var magnets_ptr = universe.magnets();\n    var magnet_sizeof = magnetic_pendulum_rs_magnetic_pendulum_rs_js__WEBPACK_IMPORTED_MODULE_1__.Magnet.size_of();\n    var magnets_n = universe.magnets_len();\n    // console.log(\"magnets_n\", magnets_n, memory, magnets_ptr)\n    var dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);\n    // Render magnets from wasm memory\n    for (var i = 0; i < magnets_n; i++) {\n        var magnet = getMagnet(dv_magnets, i * magnet_sizeof);\n        var _a = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y), canvas_x = _a[0], canvas_y = _a[1];\n        ctx.beginPath();\n        ctx.strokeStyle = \"rgba(1, 1, 1, 1)\";\n        ctx.fillStyle = magnet.color.to_string();\n        ctx.arc(canvas_x, canvas_y, magnet.radius * 20, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.stroke();\n    }\n    // Render pendulums from wasm memory\n    for (var i = 0; i < pendulums_n; i++) {\n        var pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);\n        var _b = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y), canvas_x = _b[0], canvas_y = _b[1];\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.arc(canvas_x, canvas_y, 5, 0, Math.PI * 2);\n        ctx.fill();\n        // Show tension\n        if (state.show_tension) {\n            ctx.beginPath();\n            ctx.lineWidth = Math.sqrt(Math.pow(pendulum.f_tension.x, 2) + Math.pow(pendulum.f_tension.y, 2));\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(width / 2, height / 2);\n            ctx.stroke();\n            ctx.lineWidth = 1;\n        }\n        // Show velocities\n        if (state.show_velocity) {\n            var _c = universe_to_canvas_coords(pendulum.vel.x, pendulum.vel.y), canvas_vel_x = _c[0], canvas_vel_y = _c[1];\n            ctx.beginPath();\n            ctx.moveTo(canvas_x, canvas_y);\n            ctx.lineTo(canvas_x - canvas_vel_x / 10, canvas_y - canvas_vel_y / 10);\n            ctx.stroke();\n        }\n    }\n}\n;\nfunction update_fractal_background() {\n    ctx.clearRect(0, 0, width, height); // clear canvas\n    // Render the fractal as a background\n    var img_ptr = fractal_generator.get_pointer();\n    var rgb_sizeof = magnetic_pendulum_rs_magnetic_pendulum_rs_js__WEBPACK_IMPORTED_MODULE_1__.Rgb.size_of();\n    var img_len = fractal_generator.get_length();\n    var dv_img = new DataView(memory.buffer, img_ptr, img_len * rgb_sizeof);\n    // Get image data\n    var fractal_width = fractal_generator.get_width();\n    var fractal_height = fractal_generator.get_height();\n    var pixel_width = width / fractal_width;\n    for (var i = 0; i < fractal_height; i++) {\n        for (var j = 0; j < fractal_width; j++) {\n            var rgb = getRgb(dv_img, rgb_sizeof * (i * fractal_width + j));\n            ctx.fillStyle = rgb.to_string();\n            ctx.strokeStyle = \"rgba(1, 1, 1, 0)\";\n            ctx.fillRect(j * pixel_width, i * pixel_width, pixel_width, pixel_width);\n        }\n    }\n    // save the background so that we do not have to redraw/read from wasm memory each frame\n    fractal_background = ctx.getImageData(0, 0, width, height);\n}\nfunction getMagnet(dv, ptr) {\n    var offset = ptr;\n    var strength = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var radius = dv.getFloat64(offset, true);\n    offset += 8;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Magnet(strength, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), radius, new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getPendulum(dv, ptr) {\n    var offset = ptr;\n    var pos_start_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_start_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var pos_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var vel_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var acc_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var mass = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var ten_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var k = dv.getFloat64(offset, true);\n    offset += 8;\n    var friction = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var mag_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_x = dv.getFloat64(offset, true);\n    offset += 8;\n    var fnet_y = dv.getFloat64(offset, true);\n    offset += 8;\n    var isStationary = dv.getUint8(offset) == 1 ? true : false;\n    offset += 1;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Pendulum(new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_start_x, pos_start_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(pos_x, pos_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(vel_x, vel_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(acc_x, acc_y), mass, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(ten_x, ten_y), k, friction, new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(mag_x, mag_y), new _utils__WEBPACK_IMPORTED_MODULE_0__.Vec2D(fnet_x, fnet_y), isStationary, new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b));\n}\nfunction getRgb(dv, ptr) {\n    var offset = ptr;\n    var color_r = dv.getUint8(offset);\n    offset += 1;\n    var color_g = dv.getUint8(offset);\n    offset += 1;\n    var color_b = dv.getUint8(offset);\n    offset += 1;\n    return new _utils__WEBPACK_IMPORTED_MODULE_0__.Rgb(color_r, color_g, color_b);\n}\n// Render the fractal for the first time\ngenerate_fractal_button.generate_fractal();\n// Run the render loop\nrequestAnimationFrame(renderLoop);\n\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});