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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var magnetic_pendulum_wasm_magnetic_pendulum_wasm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnetic-pendulum-wasm/magnetic_pendulum_wasm.js */ \"./node_modules/magnetic-pendulum-wasm/magnetic_pendulum_wasm.js\");\n// import * as wasm from \"magnetic-pendulum-wasm\"\n\nlet memory;\nasync function run() {\n    const output = await (0,magnetic_pendulum_wasm_magnetic_pendulum_wasm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,magnetic_pendulum_wasm_magnetic_pendulum_wasm_js__WEBPACK_IMPORTED_MODULE_0__.greet)();\n    memory = output.memory;\n}\nawait run();\nlet FRACTAL_SIZE = 512;\nconst universe = new magnetic_pendulum_wasm_magnetic_pendulum_wasm_js__WEBPACK_IMPORTED_MODULE_0__.Universe(64, 64, 500);\nconst width = universe.width() * 20;\nconst height = universe.height() * 20;\nconst fractal_generator = new wasm.FractalGenerator(FRACTAL_SIZE, FRACTAL_SIZE);\nlet fractal_background = new ImageData(width, height);\nvar state = {\n    type: 'pendulum',\n    tension: 0.8,\n    friction: 1.0,\n    mass: 1.0,\n    show_velocity: false,\n    show_tension: false,\n    steps: 50,\n    magnet_strength: 50,\n    magnet_radius: 2,\n    emitter_interval: 50,\n    show_fractal: true,\n};\nvar reset_button = {\n    clear: function () {\n        universe.clear_magnets();\n        universe.clear_pendulums();\n        universe.clear_emitters();\n        ctx.rect(0, 0, width, height);\n        ctx.fillStyle = \"black\";\n        ctx.fill();\n    }\n};\nvar generate_fractal_button = {\n    generate_fractal: function () {\n        fractal_generator.generate(universe, state.tension, state.friction, state.mass);\n        update_fractal_background();\n    }\n};\n// var gui = new GUI();\n// gui.add(state, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'emitter': 'emitter' });\n// var pendulum_folder = gui.addFolder(\"Pendulum settings\");\n// pendulum_folder.add(state, 'mass', 0.01, 10.0).name(\"Mass\");\n// pendulum_folder.add(state, 'tension', 0, 5).name(\"Tension\");\n// pendulum_folder.add(state, 'friction', 0, 1.0, 0.001).name(\"Friction\");\n// var magnet_folder = gui.addFolder(\"Magnet settings\");\n// magnet_folder.add(state, 'magnet_strength', -500, 500).name(\"Magnet strength\")\n// magnet_folder.add(state, \"magnet_radius\", 0.1, 5, 0.01).name(\"Magnet radius\")\n// var emitter_folder = gui.addFolder(\"Emitter settings\");\n// emitter_folder.add(state, \"emitter_interval\", 5, 150, 5)\n// gui.add(state, 'steps', 0, 200).name(\"Render speed\").onChange((new_steps: number) => { universe.set_steps(new_steps); });\n// gui.add(state, \"show_velocity\").name(\"Show velocity\")\n// gui.add(state, \"show_tension\").name(\"Show tension\")\n// gui.add(state, \"show_fractal\").name(\"Show fractal\")\n// gui.add(reset_button, 'clear').name(\"Clear all\");\n// gui.add(generate_fractal_button, \"generate_fractal\").name(\"Generate fractal\");\n// function canvas_to_universe_coords(canvas_x: number, canvas_y: number): [number, number] {\n//   const x = canvas_x / width * universe.width()\n//   const y = canvas_y / height * universe.height()\n//   return [x, y]\n// }\n// function universe_to_canvas_coords(x: number, y: number): [number, number] {\n//   const canvas_x = x / universe.width() * width;\n//   const canvas_y = y / universe.height() * height;\n//   return [canvas_x, canvas_y]\n// }\n// function getCursorPosition(canvas: HTMLCanvasElement, event: MouseEvent): [number, number] {\n//   const rect = canvas.getBoundingClientRect()\n//   const canvas_x = event.clientX - rect.left\n//   const canvas_y = event.clientY - rect.top\n//   const [x, y]: [number, number] = canvas_to_universe_coords(canvas_x, canvas_y)\n//   return [x, y]\n// }\n// console.log(width, height)\n// const canvas = <HTMLCanvasElement>document.getElementById('magnetic-pendulum-canvas')\n// canvas.width = width;\n// canvas.height = height;\n// const ctx = canvas.getContext('2d');\n// ctx.fillStyle = \"black\";\n// ctx.fillRect(0, 0, canvas.width, canvas.height);\n// canvas.addEventListener('mousedown', function (e) {\n//   const [x, y]: [number, number] = getCursorPosition(canvas, e)\n//   if (state.type == \"pendulum\") {\n//     universe.create_pendulum(x, y, state.tension, state.friction, state.mass);\n//   }\n//   if (state.type == \"magnet\") {\n//     universe.create_magnet(x, y, state.magnet_strength, state.magnet_radius);\n//   }\n//   if (state.type == \"emitter\") {\n//     universe.create_emitter(x, y, state.emitter_interval, state.friction, state.tension, state.mass);\n//   }\n// })\n// let t = 0;\n// function renderLoop() {\n//   universe.tick();\n//   draw(universe, t);\n//   t += 1;\n//   t %= 120;\n//   requestAnimationFrame(renderLoop);\n// };\n// function draw(universe: wasm.Universe, t: number) {\n//   // ctx.globalCompositeOperation = 'destination-over';\n//   ctx.clearRect(0, 0, width, height); // clear canvas\n//   // Get pendulums info from wasm memory\n//   const pendulums_ptr = universe.pendulums()\n//   const pendulum_sizeof = wasm.Pendulum.size_of()\n//   const pendulums_n = universe.pendulums_len();\n//   let dv_pendulums = new DataView(memory.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);\n//   if (state.show_fractal) {\n//     ctx.putImageData(fractal_background, 0, 0);\n//   }\n//   // Read magnets from wasm memory\n//   const magnets_ptr = universe.magnets()\n//   const magnet_sizeof = wasm.Magnet.size_of()\n//   const magnets_n = universe.magnets_len();\n//   // console.log(\"magnets_n\", magnets_n, memory, magnets_ptr)\n//   let dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);\n//   // Render magnets from wasm memory\n//   for (let i = 0; i < magnets_n; i++) {\n//     let magnet: Magnet = getMagnet(dv_magnets, i * magnet_sizeof);\n//     const [canvas_x, canvas_y] = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y);\n//     ctx.beginPath();\n//     ctx.strokeStyle = \"rgba(1, 1, 1, 1)\";\n//     ctx.fillStyle = magnet.color.to_string();\n//     ctx.arc(canvas_x, canvas_y, magnet.radius * 20, 0, Math.PI * 2)\n//     ctx.fill();\n//     ctx.stroke();\n//   }\n//   // Render pendulums from wasm memory\n//   for (let i = 0; i < pendulums_n; i++) {\n//     const pendulum: Pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);\n//     const [canvas_x, canvas_y] = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y);\n//     ctx.beginPath();\n//     ctx.fillStyle = \"black\";\n//     ctx.arc(canvas_x, canvas_y, 5, 0, Math.PI * 2)\n//     ctx.fill();\n//     // Show tension\n//     if (state.show_tension) {\n//       ctx.beginPath();\n//       ctx.lineWidth = Math.sqrt(Math.pow(pendulum.f_tension.x, 2) + Math.pow(pendulum.f_tension.y, 2));\n//       ctx.moveTo(canvas_x, canvas_y);\n//       ctx.lineTo(width / 2, height / 2);\n//       ctx.stroke();\n//       ctx.lineWidth = 1;\n//     }\n//     // Show velocities\n//     if (state.show_velocity) {\n//       const [canvas_vel_x, canvas_vel_y] = universe_to_canvas_coords(pendulum.vel.x, pendulum.vel.y)\n//       ctx.beginPath();\n//       ctx.moveTo(canvas_x, canvas_y);\n//       ctx.lineTo(canvas_x - canvas_vel_x / 10, canvas_y - canvas_vel_y / 10);\n//       ctx.stroke();\n//     }\n//   }\n// };\n// function update_fractal_background() {\n//   ctx.clearRect(0, 0, width, height); // clear canvas\n//   // Render the fractal as a background\n//   const img_ptr = fractal_generator.get_pointer()\n//   const rgb_sizeof = wasm.Rgb.size_of()\n//   const img_len = fractal_generator.get_length();\n//   let dv_img = new DataView(memory.buffer, img_ptr, img_len * rgb_sizeof);\n//   // Get image data\n//   let fractal_width = fractal_generator.get_width();\n//   let fractal_height = fractal_generator.get_height();\n//   let pixel_width = width / fractal_width;\n//   for (let i = 0; i < fractal_height; i++) {\n//     for (let j = 0; j < fractal_width; j++) {\n//       let rgb = getRgb(dv_img, rgb_sizeof * (i * fractal_width + j));\n//       ctx.fillStyle = rgb.to_string();\n//       ctx.strokeStyle = \"rgba(1, 1, 1, 0)\";\n//       ctx.fillRect(j * pixel_width, i * pixel_width, pixel_width, pixel_width)\n//     }\n//   }\n//   // save the background so that we do not have to redraw/read from wasm memory each frame\n//   fractal_background = ctx.getImageData(0, 0, width, height);\n// }\n// function getMagnet(dv: DataView, ptr: number) {\n//   let offset = ptr;\n//   let strength = dv.getFloat64(offset, true); offset += 8;\n//   let pos_x = dv.getFloat64(offset, true); offset += 8;\n//   let pos_y = dv.getFloat64(offset, true); offset += 8;\n//   let radius = dv.getFloat64(offset, true); offset += 8;\n//   let color_r = dv.getUint8(offset); offset += 1;\n//   let color_g = dv.getUint8(offset); offset += 1;\n//   let color_b = dv.getUint8(offset); offset += 1;\n//   return new Magnet(\n//     strength,\n//     new Vec2D(pos_x, pos_y),\n//     radius,\n//     new Rgb(color_r, color_g, color_b)\n//   )\n// }\n// function getPendulum(dv: DataView, ptr: number) {\n//   let offset = ptr;\n//   let pos_start_x = dv.getFloat64(offset, true); offset += 8;\n//   let pos_start_y = dv.getFloat64(offset, true); offset += 8;\n//   let pos_x = dv.getFloat64(offset, true); offset += 8;\n//   let pos_y = dv.getFloat64(offset, true); offset += 8;\n//   let vel_x = dv.getFloat64(offset, true); offset += 8;\n//   let vel_y = dv.getFloat64(offset, true); offset += 8;\n//   let acc_x = dv.getFloat64(offset, true); offset += 8;\n//   let acc_y = dv.getFloat64(offset, true); offset += 8;\n//   let mass = dv.getFloat64(offset, true); offset += 8;\n//   let ten_x = dv.getFloat64(offset, true); offset += 8;\n//   let ten_y = dv.getFloat64(offset, true); offset += 8;\n//   let k = dv.getFloat64(offset, true); offset += 8;\n//   let friction = dv.getFloat64(offset, true); offset += 8;\n//   let mag_x = dv.getFloat64(offset, true); offset += 8;\n//   let mag_y = dv.getFloat64(offset, true); offset += 8;\n//   let fnet_x = dv.getFloat64(offset, true); offset += 8;\n//   let fnet_y = dv.getFloat64(offset, true); offset += 8;\n//   let isStationary = dv.getUint8(offset) == 1 ? true : false; offset += 1;\n//   let color_r = dv.getUint8(offset); offset += 1;\n//   let color_g = dv.getUint8(offset); offset += 1;\n//   let color_b = dv.getUint8(offset); offset += 1;\n//   return new Pendulum(\n//     new Vec2D(pos_start_x, pos_start_y),\n//     new Vec2D(pos_x, pos_y),\n//     new Vec2D(vel_x, vel_y),\n//     new Vec2D(acc_x, acc_y),\n//     mass,\n//     new Vec2D(ten_x, ten_y),\n//     k,\n//     friction,\n//     new Vec2D(mag_x, mag_y),\n//     new Vec2D(fnet_x, fnet_y),\n//     isStationary,\n//     new Rgb(color_r, color_g, color_b),\n//   );\n// }\n// function getRgb(dv: DataView, ptr: number) {\n//   let offset = ptr;\n//   let color_r = dv.getUint8(offset); offset += 1;\n//   let color_g = dv.getUint8(offset); offset += 1;\n//   let color_b = dv.getUint8(offset); offset += 1;\n//   return new Rgb(color_r, color_g, color_b);\n// }\n//   // Render the fractal for the first time\n//   generate_fractal_button.generate_fractal();\n//   // Run the render loop\n//   requestAnimationFrame(renderLoop);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://client-ts/./src/index.ts?");

/***/ })

});