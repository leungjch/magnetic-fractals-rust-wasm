
import * as wasm from "magnetic-pendulum-rs"
import { memory } from "magnetic-pendulum-rs/magnetic_pendulum_rs_bg.wasm";
import { exit } from "process";
import { deflateRaw } from "zlib";
import { Magnet, Vec2D, Rgb, Pendulum } from "./utils";
// wasm.greet();
const universe = new wasm.Universe(64,64,100);

universe.add_nums(3.15)

const width = universe.width()*50
const height = universe.height()*50
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

  // Read magnets from wasm memory
  const magnets_ptr = universe.magnets()
  const magnet_sizeof = wasm.Magnet.size_of()
  const magnets_n = universe.magnets_len();
  // console.log("magnets_n", magnets_n, memory, magnets_ptr)
  let dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n*magnet_sizeof);

  // Render magnets from wasm memory
  for (let i = 0; i < magnets_n; i++) {
    let magnet : Magnet = getMagnet(dv_magnets, i*magnet_sizeof);
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(magnet.pos.x+width/2, magnet.pos.y+height/2, 5, 5)
    ctx.fill();

    // console.log("got magnet", magnet)

  }

  // Read pendulums from wasm memory
  const pendulums_ptr = universe.pendulums()
  const pendulum_sizeof = wasm.Pendulum.size_of()
  const pendulums_n = universe.pendulums_len();
  let dv_pendulums = new DataView(memory.buffer, pendulums_ptr, pendulums_n*pendulum_sizeof);


  // Render pendulums from wasm memory
  for (let i = 0; i < pendulums_n; i++) {
    let pendulum = getPendulum(dv_pendulums, pendulum_sizeof*i)
    // console.log("got pendulum", pendulum)
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(pendulum.pos.x+width/2, pendulum.pos.y+height/2, 5, 5)
    ctx.fill();
  }



};

requestAnimationFrame(renderLoop);

function getMagnet(dv : DataView, ptr: number) {
  let offset = ptr;
  let strength = dv.getFloat64(offset, true); offset += 8;
  let pos_x = dv.getFloat64(offset, true);  offset += 8;
  let pos_y = dv.getFloat64(offset, true); offset += 8;
  let color_r = dv.getUint8(offset); offset += 1;
  let color_g = dv.getUint8(offset); offset += 1;
  let color_b = dv.getUint8(offset); offset += 1;
  return new Magnet(
    strength,
    new Vec2D(pos_x, pos_y),
    new Rgb(color_r, color_g, color_b)
  )
}

function getPendulum(dv: DataView, ptr: number) {
  let offset = ptr;
  let pos_start_x = dv.getFloat64(offset, true); offset += 8;
  let pos_start_y = dv.getFloat64(offset, true); offset += 8;
  let pos_x = dv.getFloat64(offset, true); offset += 8;
  let pos_y = dv.getFloat64(offset, true); offset += 8;
  let vel_x = dv.getFloat64(offset, true); offset += 8;
  let vel_y = dv.getFloat64(offset, true); offset += 8;
  let acc_x = dv.getFloat64(offset, true); offset += 8;
  let acc_y = dv.getFloat64(offset, true); offset += 8;
  let ten_x = dv.getFloat64(offset, true); offset += 8;
  let ten_y = dv.getFloat64(offset, true); offset += 8;
  let k = dv.getFloat64(offset, true); offset += 8;
  let friction = dv.getFloat64(offset, true); offset += 8;
  let mag_x = dv.getFloat64(offset, true); offset += 8;
  let mag_y = dv.getFloat64(offset, true); offset += 8;
  let fnet_x = dv.getFloat64(offset, true); offset += 8;
  let fnet_y = dv.getFloat64(offset, true); offset += 8;
  let isStationary = dv.getUint8(offset) == 1 ? true : false; offset += 1;
  return new Pendulum(
    new Vec2D(pos_start_x, pos_start_y),
    new Vec2D(pos_x, pos_y),
    new Vec2D(vel_x, vel_y),
    new Vec2D(acc_x, acc_y),
    new Vec2D(ten_x, ten_y),
    k,
    friction,
    new Vec2D(mag_x, mag_y),
    new Vec2D(fnet_x, fnet_y),
    isStationary
  );
}

// function getNum(buffer : ArrayBuffer, ptr: number, n: number) {
//   let dv = new DataView(buffer, ptr, 16);
//   // dv.setFloat64(ptr, Math.PI);
//   let myArray = new Float64Array(memory.buffer, nums_ptr, 2);
//   console.log(myArray)
  
//   let offset = 0;
//   let i = 0;
//   let ret = [];
//   console.log(buffer.slice(offset, offset+8+1))
//   console.log("bytelength is", buffer.byteLength, "offset is", offset)
//   while (offset < buffer.byteLength && i < n) {
//       let strength = dv.getFloat64(offset, true); offset += 8;
//       console.log("strength is", strength)
//       ret.push(strength);
//       i += 1;
//   }
//   return ret;

// }