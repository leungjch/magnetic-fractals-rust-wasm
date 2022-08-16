import * as Comlink from 'comlink'
import { Magnet, Vec2D, Rgb, Pendulum } from "./utils";
import * as wasm from "magnetic-pendulum-wasm";
import init, { initThreadPool } from "magnetic-pendulum-wasm/magnetic_pendulum_wasm.js";

const output = await init();
const memory = output.memory


// // Get 
let handlers = await Comlink.wrap(
  new Worker(new URL('./wasm-worker.js', import.meta.url), {
    type: 'module'
  })
  // @ts-ignore
).handlers;
console.log("handlers is", handlers['multiThread'])




import { GUI } from "dat.gui"
let FRACTAL_SIZE = 256;
let SCALE = 16;
const universe = new wasm.Universe(64, 64, 500);
const width = universe.width() * SCALE
const height = universe.height() * SCALE
// Set default magnet


            // Magnet::new(
            //     Vec2D::new(width as f64 / 3.0, height as f64 / 2.0),
            //     100.0,
            //     2.0,
            // ),
            // Magnet::new(
            //     Vec2D::new(width as f64 / 3.0 * 2.0, height as f64 / 2.0),
            //     100.0,
            //     2.0,
            // ),
            // Magnet::new(
            //     Vec2D::new(width as f64 / 2.0, height as f64 / 3.0),
            //     100.0,
            //     2.0,
            // ),
            // Magnet::new(
            //     Vec2D::new(width as f64 / 2.0, (height as f64) / 3.0 * 2.0),
            //     100.0,
            //     2.0,
            // ),
universe.create_magnet(universe.width() / 3, universe.height()/2, 100, 2)
universe.create_magnet(universe.width() / 3*2, universe.height()/2, 100, 2)

universe.create_magnet(universe.width() / 2, universe.height()/3*2, 100, 2)
const num = 9;
let fractal_background: ImageData = new ImageData(FRACTAL_SIZE, FRACTAL_SIZE);

const canvas = <HTMLCanvasElement>document.getElementById('magnetic-pendulum-canvas')
canvas.width = width;
canvas.height = height;
canvas.style.outline="solid"

const ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var state = {
  type: 'pendulum',
  tension: 0.8,
  friction: 1.0,
  mass: 1.0,
  show_velocity: true,
  show_tension: false,
  steps: 50,
  magnet_strength: 50,
  magnet_radius: 2,
  emitter_interval: 50,
  show_fractal: true,
  show_magnets: true,
};

var reset_button = {
  clear: function () {
    universe.clear_magnets();
    universe.clear_pendulums();
    universe.clear_emitters();
    ctx.rect(0, 0, width, height)
    ctx.fillStyle = "black"
    ctx.fill()
  }
};

async function resizeImageData(imageData: ImageData, width: number, height: number) {
  const resizeWidth = width
  const resizeHeight = height
  const ibm = await window.createImageBitmap(imageData, 0, 0, imageData.width, imageData.height)
  const canvas = document.createElement('canvas')
  canvas.width = resizeWidth
  canvas.height = resizeHeight
  const actx = canvas.getContext('2d')
  actx.scale(resizeWidth / imageData.width, resizeHeight / imageData.height)
  actx.drawImage(ibm, 0, 0)
  return actx.getImageData(0, 0, resizeWidth, resizeHeight)
}

var generate_fractal_button = {
  gen_fractal: async function () {
    // fractal_generator.generate(universe, state.tension, state.friction, state.mass)
    // update_fractal_background();
    let handler = handlers['multiThread']
    // Read magnets from memory
    const magnets_ptr = universe.magnets()
    const magnet_sizeof = wasm.Magnet.size_of()
    const magnets_n = universe.magnets_len();
    let dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);

    const magnets = [];
    for (let i = 0; i < magnets_n; i++) {
      const magnet = getMagnet(dv_magnets, i * magnet_sizeof)
      console.log(magnet)
      magnets.push(magnet);
    }

    // Call the multithreaded fractal generator
    let { raw_image_data, time } = await handler({
      image_width: FRACTAL_SIZE,
      image_height: FRACTAL_SIZE,
      universe: universe,
      k: state.tension,
      friction: state.friction,
      mass: state.mass,
      magnets: magnets
    });

    let pixel_width = width / FRACTAL_SIZE;
    ctx.strokeStyle = "rgba(1, 1, 1, 0)";
    let data = raw_image_data;
    for (var i = 0; i < data.length; i += 4) {

      let rgb = new Rgb(data[i], data[i + 1], data[i + 2]) // ignore alpha
      ctx.fillStyle = rgb.to_string();
      console.log()
      let x = (i / 4) % FRACTAL_SIZE * pixel_width;
      let y = (i / 4) / FRACTAL_SIZE * pixel_width;
      console.log(x, y)
      ctx.fillRect(x, y, pixel_width, pixel_width)
    }
    // save the background so that we do not have to redraw/read from wasm memory each frame
    fractal_background = ctx.getImageData(0, 0, width, height);

    // const fractal_background_small = new ImageData(raw_image_data, FRACTAL_SIZE, FRACTAL_SIZE);
    // fractal_background = await resizeImageData(fractal_background_small, width, height)

  }
}

var gui = new GUI();
gui.add(state, 'type', { 'pendulum': 'pendulum', 'magnet': 'magnet', 'emitter': 'emitter' });
var pendulum_folder = gui.addFolder("Pendulum settings");
pendulum_folder.add(state, 'mass', 0.01, 10.0).name("Mass");
pendulum_folder.add(state, 'tension', 0, 5).name("Tension");
pendulum_folder.add(state, 'friction', 0, 1.0, 0.001).name("Friction");
var magnet_folder = gui.addFolder("Magnet settings");
magnet_folder.add(state, 'magnet_strength', -500, 500).name("Magnet strength")
magnet_folder.add(state, "magnet_radius", 0.1, 5, 0.01).name("Magnet radius")
var emitter_folder = gui.addFolder("Emitter settings");
emitter_folder.add(state, "emitter_interval", 5, 150, 5)

gui.add(state, 'steps', 0, 200).name("Render speed").onChange((new_steps: number) => { universe.set_steps(new_steps); });
gui.add(state, "show_velocity").name("Show velocity")
gui.add(state, "show_tension").name("Show tension")
gui.add(state, "show_fractal").name("Show fractal")
gui.add(state, "show_magnets").name("Show magnets")
gui.add(reset_button, 'clear').name("Clear all");
gui.add(generate_fractal_button, "gen_fractal").name("Generate fractal");

function canvas_to_universe_coords(canvas_x: number, canvas_y: number): [number, number] {
  const x = canvas_x / width * universe.width()
  const y = canvas_y / height * universe.height()
  return [x, y]
}

function universe_to_canvas_coords(x: number, y: number): [number, number] {
  const canvas_x = x / universe.width() * width;
  const canvas_y = y / universe.height() * height;
  return [canvas_x, canvas_y]
}

function getCursorPosition(canvas: HTMLCanvasElement, event: MouseEvent): [number, number] {
  const rect = canvas.getBoundingClientRect()
  const canvas_x = event.clientX - rect.left
  const canvas_y = event.clientY - rect.top
  const [x, y]: [number, number] = canvas_to_universe_coords(canvas_x, canvas_y)
  return [x, y]
}

console.log(width, height)

canvas.addEventListener('mousedown', function (e) {
  const [x, y]: [number, number] = getCursorPosition(canvas, e)
  if (state.type == "pendulum") {
    universe.create_pendulum(x, y, state.tension, state.friction, state.mass);
  }
  if (state.type == "magnet") {
    universe.create_magnet(x, y, state.magnet_strength, state.magnet_radius);
    generate_fractal_button.gen_fractal();
  }

  if (state.type == "emitter") {
    universe.create_emitter(x, y, state.emitter_interval, state.friction, state.tension, state.mass);
  }
})



let t = 0;
function renderLoop() {
  universe.tick();

  draw(universe, t);
  t += 1;
  t %= 120;

  requestAnimationFrame(renderLoop);
};

function draw(universe: wasm.Universe, t: number) {

  // ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, width, height); // clear canvas


  // Show the fractal background
  if (state.show_fractal) {
    ctx.putImageData(fractal_background, 0, 0);
  }

  if (state.show_magnets) {
    // Render magnets from wasm memory
    // Read magnets from wasm memory
    const magnets_ptr = universe.magnets()
    const magnet_sizeof = wasm.Magnet.size_of()
    const magnets_n = universe.magnets_len();
    for (let i = 0; i < magnets_n; i++) {
      // console.log("magnets_n", magnets_n, memory, magnets_ptr)
      let dv_magnets = new DataView(memory.buffer, magnets_ptr, magnets_n * magnet_sizeof);

      let magnet: Magnet = getMagnet(dv_magnets, i * magnet_sizeof);
      const [canvas_x, canvas_y] = universe_to_canvas_coords(magnet.pos.x, magnet.pos.y);

      ctx.beginPath();
      ctx.strokeStyle = "rgba(1, 1, 1, 1)";
      ctx.fillStyle = magnet.color.to_string();
      ctx.arc(canvas_x, canvas_y, magnet.radius * SCALE, 0, Math.PI * 2)
      ctx.fill();
      ctx.stroke();
    }

  }

  // Get pendulums info from wasm memory
  const pendulums_ptr = universe.pendulums()
  const pendulum_sizeof = wasm.Pendulum.size_of()
  const pendulums_n = universe.pendulums_len();
  let dv_pendulums = new DataView(memory.buffer, pendulums_ptr, pendulums_n * pendulum_sizeof);

  // Render pendulums from wasm memory
  for (let i = 0; i < pendulums_n; i++) {
    const pendulum: Pendulum = getPendulum(dv_pendulums, pendulum_sizeof * i);
    const [canvas_x, canvas_y] = universe_to_canvas_coords(pendulum.pos.x, pendulum.pos.y);
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(canvas_x, canvas_y, 5, 0, Math.PI * 2)
    ctx.fill();
    ctx.stroke();
    // Show tension
    if (state.show_tension) {
      ctx.beginPath();
      ctx.lineWidth = Math.sqrt(Math.pow(pendulum.f_tension.x, 2) + Math.pow(pendulum.f_tension.y, 2));
      ctx.moveTo(canvas_x, canvas_y);
      ctx.lineTo(width / 2, height / 2);
      ctx.stroke();
      ctx.lineWidth = 1;
    }

    // Show velocities
    if (state.show_velocity) {
      const [canvas_vel_x, canvas_vel_y] = universe_to_canvas_coords(pendulum.vel.x, pendulum.vel.y)
      ctx.beginPath();
      ctx.moveTo(canvas_x, canvas_y);
      ctx.lineTo(canvas_x - canvas_vel_x / 10, canvas_y - canvas_vel_y / 10);
      ctx.stroke();
    }
  }


};
// function update_fractal_background() {

//   ctx.clearRect(0, 0, width, height); // clear canvas
//   // Render the fractal as a background
//   const img_ptr = fractal_generator.get_pointer()
//   const rgb_sizeof = wasm.Rgb.size_of()
//   const img_len = fractal_generator.get_length();
//   let dv_img = new DataView(memory.buffer, img_ptr, img_len * rgb_sizeof);
//   // Get image data
//   let fractal_width = fractal_generator.get_width();
//   let fractal_height = fractal_generator.get_height();
//   let pixel_width = width / fractal_width;
//   ctx.strokeStyle = "rgba(1, 1, 1, 0)";
//   for (let i = 0; i < fractal_height; i++) {
//     for (let j = 0; j < fractal_width; j++) {
//       let rgb = getRgb(dv_img, rgb_sizeof * (i * fractal_width + j));
//       ctx.fillStyle = rgb.to_string();
//       ctx.fillRect(j * pixel_width, i * pixel_width, pixel_width, pixel_width)

//     }
//   }
//   // save the background so that we do not have to redraw/read from wasm memory each frame
//   fractal_background = ctx.getImageData(0, 0, width, height);
// }


function getMagnet(dv: DataView, ptr: number) {
  let offset = ptr;
  let strength = dv.getFloat64(offset, true); offset += 8;
  let pos_x = dv.getFloat64(offset, true); offset += 8;
  let pos_y = dv.getFloat64(offset, true); offset += 8;
  let radius = dv.getFloat64(offset, true); offset += 8;
  let color_r = dv.getUint8(offset); offset += 1;
  let color_g = dv.getUint8(offset); offset += 1;
  let color_b = dv.getUint8(offset); offset += 1;
  return new Magnet(
    strength,
    new Vec2D(pos_x, pos_y),
    radius,
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
  let mass = dv.getFloat64(offset, true); offset += 8;
  let ten_x = dv.getFloat64(offset, true); offset += 8;
  let ten_y = dv.getFloat64(offset, true); offset += 8;
  let k = dv.getFloat64(offset, true); offset += 8;
  let friction = dv.getFloat64(offset, true); offset += 8;
  let mag_x = dv.getFloat64(offset, true); offset += 8;
  let mag_y = dv.getFloat64(offset, true); offset += 8;
  let fnet_x = dv.getFloat64(offset, true); offset += 8;
  let fnet_y = dv.getFloat64(offset, true); offset += 8;
  let isStationary = dv.getUint8(offset) == 1 ? true : false; offset += 1;
  let color_r = dv.getUint8(offset); offset += 1;
  let color_g = dv.getUint8(offset); offset += 1;
  let color_b = dv.getUint8(offset); offset += 1;
  return new Pendulum(
    new Vec2D(pos_start_x, pos_start_y),
    new Vec2D(pos_x, pos_y),
    new Vec2D(vel_x, vel_y),
    new Vec2D(acc_x, acc_y),
    mass,
    new Vec2D(ten_x, ten_y),
    k,
    friction,
    new Vec2D(mag_x, mag_y),
    new Vec2D(fnet_x, fnet_y),
    isStationary,
    new Rgb(color_r, color_g, color_b),
  );
}

function getRgb(dv: DataView, ptr: number) {
  let offset = ptr;
  let color_r = dv.getUint8(offset); offset += 1;
  let color_g = dv.getUint8(offset); offset += 1;
  let color_b = dv.getUint8(offset); offset += 1;
  return new Rgb(color_r, color_g, color_b);
}

// Render the fractal for the first time
generate_fractal_button.gen_fractal();
// Run the render loop
requestAnimationFrame(renderLoop);
