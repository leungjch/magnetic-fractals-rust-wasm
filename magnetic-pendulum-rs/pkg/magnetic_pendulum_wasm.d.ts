/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
* @param {Int32Array} numbers
* @returns {number}
*/
export function sum_of_squares(numbers: Int32Array): number;
/**
* @param {number} image_width
* @param {number} image_height
* @param {Universe} universe
* @param {number} k
* @param {number} friction
* @param {number} mass
* @returns {Uint8ClampedArray}
*/
export function generate_fractal(image_width: number, image_height: number, universe: Universe, k: number, friction: number, mass: number): Uint8ClampedArray;
/**
* @param {number} num_threads
* @returns {Promise<any>}
*/
export function initThreadPool(num_threads: number): Promise<any>;
/**
* @param {number} receiver
*/
export function wbg_rayon_start_worker(receiver: number): void;
/**
*/
export class Emitter {
  free(): void;
/**
* @param {number} x
* @param {number} y
* @param {number} interval
* @param {number} tension
* @param {number} friction
* @param {number} mass
* @returns {Emitter}
*/
  static new(x: number, y: number, interval: number, tension: number, friction: number, mass: number): Emitter;
/**
*/
  tick(): void;
/**
*/
  clock: number;
/**
*/
  friction: number;
/**
*/
  mass: number;
/**
*/
  tension: number;
}
/**
*/
export class FractalGenerator {
  free(): void;
/**
* @param {number} image_width
* @param {number} image_height
*/
  constructor(image_width: number, image_height: number);
/**
* @returns {number}
*/
  get_width(): number;
/**
* @returns {number}
*/
  get_height(): number;
/**
* @param {Universe} universe
* @param {number} k
* @param {number} friction
* @param {number} mass
* @returns {Uint8Array}
*/
  generate(universe: Universe, k: number, friction: number, mass: number): Uint8Array;
}
/**
*/
export class Magnet {
  free(): void;
/**
* @param {Vec2D} pos
* @param {number} strength
* @param {number} radius
*/
  constructor(pos: Vec2D, strength: number, radius: number);
/**
* @returns {number}
*/
  static size_of(): number;
}
/**
*/
export class Pendulum {
  free(): void;
/**
* @param {Vec2D} pos
* @param {number} k
* @param {number} friction
* @param {number} mass
* @returns {Pendulum}
*/
  static new(pos: Vec2D, k: number, friction: number, mass: number): Pendulum;
/**
* @returns {number}
*/
  static size_of(): number;
/**
* @returns {Vec2D}
*/
  pos(): Vec2D;
}
/**
*/
export class Rgb {
  free(): void;
/**
* @param {number} r
* @param {number} g
* @param {number} b
*/
  constructor(r: number, g: number, b: number);
/**
* @returns {number}
*/
  static size_of(): number;
/**
* @param {Rgb} mix
* @returns {Rgb}
*/
  static mix_pastel(mix: Rgb): Rgb;
/**
* @param {Rgb} mix
* @returns {Rgb}
*/
  static mix_blacken(mix: Rgb): Rgb;
/**
* @returns {Rgb}
*/
  static random_pastel(): Rgb;
}
/**
*/
export class Universe {
  free(): void;
/**
* @param {number} width
* @param {number} height
* @param {number} max_iters
*/
  constructor(width: number, height: number, max_iters: number);
/**
* @param {Magnet} magnet
*/
  add_magnet(magnet: Magnet): void;
/**
* @param {number} n
*/
  add_nums(n: number): void;
/**
* @param {number} x
* @param {number} y
* @param {number} strength
* @param {number} radius
*/
  create_magnet(x: number, y: number, strength: number, radius: number): void;
/**
* @param {number} x
* @param {number} y
* @param {number} tension
* @param {number} friction
* @param {number} mass
*/
  create_pendulum(x: number, y: number, tension: number, friction: number, mass: number): void;
/**
* @param {number} x
* @param {number} y
* @param {number} interval
* @param {number} tension
* @param {number} friction
* @param {number} mass
*/
  create_emitter(x: number, y: number, interval: number, tension: number, friction: number, mass: number): void;
/**
* @param {number} i
* @returns {number}
*/
  get_num(i: number): number;
/**
*/
  clear_magnets(): void;
/**
* @param {Pendulum} pendulum
*/
  add_pendulum(pendulum: Pendulum): void;
/**
*/
  clear_pendulums(): void;
/**
*/
  clear_emitters(): void;
/**
*/
  tick(): void;
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @returns {number}
*/
  pendulums(): number;
/**
* @returns {number}
*/
  magnets(): number;
/**
* @returns {number}
*/
  nums(): number;
/**
* @returns {number}
*/
  pendulums_len(): number;
/**
* @returns {number}
*/
  magnets_len(): number;
/**
* @param {number} new_steps
*/
  set_steps(new_steps: number): void;
/**
* @param {number} new_delta
*/
  set_delta(new_delta: number): void;
}
/**
*/
export class Vec2D {
  free(): void;
/**
* @param {number} x
* @param {number} y
*/
  constructor(x: number, y: number);
/**
* @param {Vec2D} v
* @returns {number}
*/
  static magnitude(v: Vec2D): number;
/**
* @returns {Vec2D}
*/
  static zero(): Vec2D;
/**
* @param {Vec2D} from_coords
* @param {number} to_width
* @param {number} to_height
* @param {number} from_width
* @param {number} from_height
* @returns {Vec2D}
*/
  static convert_coords(from_coords: Vec2D, to_width: number, to_height: number, from_width: number, from_height: number): Vec2D;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class wbg_rayon_PoolBuilder {
  free(): void;
/**
* @returns {number}
*/
  numThreads(): number;
/**
* @returns {number}
*/
  receiver(): number;
/**
*/
  build(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly greet: () => void;
  readonly sum_of_squares: (a: number, b: number) => number;
  readonly __wbg_vec2d_free: (a: number) => void;
  readonly __wbg_get_vec2d_x: (a: number) => number;
  readonly __wbg_set_vec2d_x: (a: number, b: number) => void;
  readonly __wbg_get_vec2d_y: (a: number) => number;
  readonly __wbg_set_vec2d_y: (a: number, b: number) => void;
  readonly vec2d_new: (a: number, b: number) => number;
  readonly vec2d_magnitude: (a: number) => number;
  readonly vec2d_zero: () => number;
  readonly vec2d_convert_coords: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_rgb_free: (a: number) => void;
  readonly rgb_new: (a: number, b: number, c: number) => number;
  readonly rgb_size_of: () => number;
  readonly rgb_mix_pastel: (a: number) => number;
  readonly rgb_mix_blacken: (a: number) => number;
  readonly rgb_random_pastel: () => number;
  readonly __wbg_universe_free: (a: number) => void;
  readonly universe_new: (a: number, b: number, c: number) => number;
  readonly universe_add_magnet: (a: number, b: number) => void;
  readonly universe_add_nums: (a: number, b: number) => void;
  readonly universe_create_magnet: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly universe_create_pendulum: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly universe_create_emitter: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly universe_get_num: (a: number, b: number) => number;
  readonly universe_clear_magnets: (a: number) => void;
  readonly universe_add_pendulum: (a: number, b: number) => void;
  readonly universe_clear_pendulums: (a: number) => void;
  readonly universe_clear_emitters: (a: number) => void;
  readonly universe_tick: (a: number) => void;
  readonly universe_width: (a: number) => number;
  readonly universe_height: (a: number) => number;
  readonly universe_pendulums: (a: number) => number;
  readonly universe_magnets: (a: number) => number;
  readonly universe_nums: (a: number) => number;
  readonly universe_pendulums_len: (a: number) => number;
  readonly universe_magnets_len: (a: number) => number;
  readonly universe_set_steps: (a: number, b: number) => void;
  readonly universe_set_delta: (a: number, b: number) => void;
  readonly __wbg_magnet_free: (a: number) => void;
  readonly magnet_new: (a: number, b: number, c: number) => number;
  readonly magnet_size_of: () => number;
  readonly __wbg_pendulum_free: (a: number) => void;
  readonly pendulum_new: (a: number, b: number, c: number, d: number) => number;
  readonly pendulum_size_of: () => number;
  readonly pendulum_pos: (a: number) => number;
  readonly __wbg_emitter_free: (a: number) => void;
  readonly __wbg_get_emitter_clock: (a: number) => number;
  readonly __wbg_set_emitter_clock: (a: number, b: number) => void;
  readonly __wbg_get_emitter_tension: (a: number) => number;
  readonly __wbg_set_emitter_tension: (a: number, b: number) => void;
  readonly __wbg_get_emitter_friction: (a: number) => number;
  readonly __wbg_set_emitter_friction: (a: number, b: number) => void;
  readonly __wbg_get_emitter_mass: (a: number) => number;
  readonly __wbg_set_emitter_mass: (a: number, b: number) => void;
  readonly emitter_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly emitter_tick: (a: number) => void;
  readonly __wbg_fractalgenerator_free: (a: number) => void;
  readonly generate_fractal: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly fractalgenerator_new: (a: number, b: number) => number;
  readonly fractalgenerator_get_width: (a: number) => number;
  readonly fractalgenerator_get_height: (a: number) => number;
  readonly fractalgenerator_generate: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly __wbg_wbg_rayon_poolbuilder_free: (a: number) => void;
  readonly wbg_rayon_poolbuilder_numThreads: (a: number) => number;
  readonly wbg_rayon_poolbuilder_receiver: (a: number) => number;
  readonly wbg_rayon_poolbuilder_build: (a: number) => void;
  readonly initThreadPool: (a: number) => number;
  readonly wbg_rayon_start_worker: (a: number) => void;
  readonly memory: WebAssembly.Memory;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_thread_destroy: () => void;
  readonly __wbindgen_start: () => void;
}

/**
* Synchronously compiles the given `bytes` and instantiates the WebAssembly module.
*
* @param {BufferSource} bytes
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {InitOutput}
*/
export function initSync(bytes: BufferSource, maybe_memory?: WebAssembly.Memory): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>, maybe_memory?: WebAssembly.Memory): Promise<InitOutput>;
