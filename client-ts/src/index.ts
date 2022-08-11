
import * as wasm from "magnetic-pendulum-wasm"
import { memory } from "magnetic-pendulum-wasm/magnetic_pendulum_bg.wasm";
import { exit } from "process";
import { deflateRaw } from "zlib";

// wasm.greet();
const universe = new wasm.Universe(512,512,100);

// universe.add_magnet(new wasm.Magnet(
//     new wasm.Vec2D(0.0, 0.0),
//     1.0
// ));
memory.grow(1)

universe.add_nums(12)

const width = universe.width()
const height = universe.height()
console.log(width,height)
const canvas = <HTMLCanvasElement> document.getElementById('magnetic-pendulum-canvas')
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function renderLoop() {
  universe.tick();

  draw(universe);

  requestAnimationFrame(renderLoop);
};

function draw(universe: wasm.Universe ) {
  const magnets_ptr = universe.magnets()
  const nums_ptr = universe.nums();
  const magnet_sizeof = wasm.Magnet.size_of()
  const magnets_n = universe.magnets_len();
  console.log(memory.buffer.byteLength)
  console.log(memory)
  console.log("SIZEOF IS", nums_ptr, 1)
  const magnets = new Uint8Array(memory.buffer, nums_ptr, 1)
  console.log(magnets[0])
};

// requestAnimationFrame(renderLoop);


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