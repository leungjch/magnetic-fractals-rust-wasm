
// // A dependency graph that contains any wasm must all be imported
// // asynchronously. This `bootstrap.js` file does the single async import, so
// // that no one else needs to worry about it again.
import("./index.js")
  .catch(e => console.error("Error importing `index.ts`:", e));


// import * as wasm from "magnetic-pendulum-wasm"
// import { memory } from "magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm";

// wasm.greet();
// const universe = wasm.Universe.new(512,512,100);
// const width = universe.width()
// const height = universe.height()
// const canvas = document.getElementById('magnetic-pendulum-canvas')
// canvas.width = width;
// canvas.height = height;

// const ctx = canvas.getContext('2d');
// ctx.fillStyle="#000000"
// // requestAnimationFrame(renderLoop)

