import { Universe, Cell } from "magnetic-pendulum-rs";
import { memory } from "magnetic-pendulum-rs/magnetic_pendulum_rs_bg";

const pre = document.getElementById("magnetic-pendulum-canvas")


import * as wasm from "magnetic-pendulum-rs"
// import { memory } from "magnetic-pendulum-wasm/magnetic_pendulum_wasm_bg";

const image = wasm.Image.new(10);
console.log(memory)
console.log("ptr is", image.get_pointer())
const buf = new Uint8ClampedArray(memory.buffer, image.get_pointer(), 10);

for (let i = 0; i < 10; i++) {
  console.log(buf[i])
  buf[i] = 255;
}

console.log(image.get_length());
console.log(image.get_first_element(), buf[0]);