"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient_ts"]("src_wasm-worker_js",{

/***/ "./src/wasm-worker.js":
/*!****************************!*\
  !*** ./src/wasm-worker.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_feature_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-feature-detect */ \"./node_modules/wasm-feature-detect/dist/esm/index.js\");\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n\n\n\n\nasync function initHandlers() {\n  let [singleThread, multiThread] = await Promise.all([\n    (async () => {\n      const singleThread = await __webpack_require__.e(/*! import() */ \"magnetic-pendulum-rs_pkg_magnetic_pendulum_wasm_js\").then(__webpack_require__.bind(__webpack_require__, /*! magnetic-pendulum-wasm/magnetic_pendulum_wasm.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js\"));\n      await singleThread.default();\n      return wrapExports(singleThread);\n    })(),\n    (async () => {\n      // If threads are unsupported in this browser, skip this handler.\n      if (!(await (0,wasm_feature_detect__WEBPACK_IMPORTED_MODULE_0__.threads)())) {\n        console.log(\"Threads not supported\")\n        return;\n      }\n      const multiThread = await __webpack_require__.e(/*! import() */ \"magnetic-pendulum-rs_pkg_magnetic_pendulum_wasm_js\").then(__webpack_require__.bind(__webpack_require__, /*! magnetic-pendulum-wasm/magnetic_pendulum_wasm.js */ \"../magnetic-pendulum-rs/pkg/magnetic_pendulum_wasm.js\"));\n      await multiThread.default();\n      await multiThread.initThreadPool(navigator.hardwareConcurrency);\n      console.log(\"Init thread pool\")\n      return wrapExports(multiThread);\n    })()\n  ]);\n\n  return comlink__WEBPACK_IMPORTED_MODULE_1__.proxy({\n    singleThread,\n    supportsThreads: !!multiThread,\n    multiThread\n  });\n}\n\ncomlink__WEBPACK_IMPORTED_MODULE_1__.expose({\n  handlers: initHandlers()\n});\n\n// Wrap wasm-bindgen exports (the `generate` function) to add time measurement.\nfunction wrapExports({generate_rand, generate_fractal, Universe}) {\n  return ({ image_width, image_height, universe, k, friction ,mass, magnets  }) => {\n    const start = performance.now();\n    console.log(\"hey\", Universe)\n    let uni = new Universe(64,64,500);\n    for (let magnet of magnets) {\n      uni.create_magnet(magnet.pos.x, magnet.pos.y, magnet.strength, magnet.radius)\n    }\n    let universe_obj = Universe.__wrap(universe)\n    console.log(\"Hi\", universe, image_width, image_height)\n    console.log(universe_obj)\n    console.log(\"geenrating fractal...\",universe.ptr)\n    const rawImageData = generate_fractal(image_width, image_height, uni, k, friction, mass);\n    // const rawImageData = generate_rand();\n    const time = performance.now() - start;\n    console.log(\"time taken is\", time, rawImageData)\n    return {\n      // Little perf boost to transfer data to the main thread w/o copying.\n      raw_image_data: comlink__WEBPACK_IMPORTED_MODULE_1__.transfer(rawImageData, [rawImageData.buffer]),\n      time\n    };\n  };\n}\n\n\n//# sourceURL=webpack://client-ts/./src/wasm-worker.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4cb299fb9941c3221fb3")
/******/ })();
/******/ 
/******/ }
);