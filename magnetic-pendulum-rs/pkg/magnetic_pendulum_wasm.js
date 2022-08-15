import { startWorkers } from './snippets/wasm-bindgen-rayon-7afa899f36665473/src/workerHelpers.js';

let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.buffer !== wasm.memory.buffer) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().slice(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

let cachedUint32Memory0 = new Uint32Array();

function getUint32Memory0() {
    if (cachedUint32Memory0.buffer !== wasm.memory.buffer) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Int32Array} numbers
* @returns {number}
*/
export function sum_of_squares(numbers) {
    const ptr0 = passArray32ToWasm0(numbers, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.sum_of_squares(ptr0, len0);
    return ret;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {number} num_threads
* @returns {Promise<any>}
*/
export function initThreadPool(num_threads) {
    const ret = wasm.initThreadPool(num_threads);
    return takeObject(ret);
}

/**
* @param {number} receiver
*/
export function wbg_rayon_start_worker(receiver) {
    wasm.wbg_rayon_start_worker(receiver);
}

/**
*/
export class Emitter {

    static __wrap(ptr) {
        const obj = Object.create(Emitter.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_emitter_free(ptr);
    }
    /**
    * @returns {number}
    */
    get clock() {
        const ret = wasm.__wbg_get_emitter_clock(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set clock(arg0) {
        wasm.__wbg_set_emitter_clock(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get tension() {
        const ret = wasm.__wbg_get_emitter_tension(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set tension(arg0) {
        wasm.__wbg_set_emitter_tension(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get friction() {
        const ret = wasm.__wbg_get_emitter_friction(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set friction(arg0) {
        wasm.__wbg_set_emitter_friction(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get mass() {
        const ret = wasm.__wbg_get_emitter_mass(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set mass(arg0) {
        wasm.__wbg_set_emitter_mass(this.ptr, arg0);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} interval
    * @param {number} tension
    * @param {number} friction
    * @param {number} mass
    * @returns {Emitter}
    */
    static new(x, y, interval, tension, friction, mass) {
        const ret = wasm.emitter_new(x, y, interval, tension, friction, mass);
        return Emitter.__wrap(ret);
    }
    /**
    */
    tick() {
        wasm.emitter_tick(this.ptr);
    }
}
/**
*/
export class FractalGenerator {

    static __wrap(ptr) {
        const obj = Object.create(FractalGenerator.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fractalgenerator_free(ptr);
    }
    /**
    * @param {number} image_width
    * @param {number} image_height
    */
    constructor(image_width, image_height) {
        const ret = wasm.fractalgenerator_new(image_width, image_height);
        return FractalGenerator.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get_width() {
        const ret = wasm.fractalgenerator_get_width(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get_height() {
        const ret = wasm.fractalgenerator_get_height(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {Universe} universe
    * @param {number} k
    * @param {number} friction
    * @param {number} mass
    */
    generate(universe, k, friction, mass) {
        _assertClass(universe, Universe);
        wasm.fractalgenerator_generate(this.ptr, universe.ptr, k, friction, mass);
    }
    /**
    * @returns {number}
    */
    get_pointer() {
        const ret = wasm.fractalgenerator_get_pointer(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_length() {
        const ret = wasm.fractalgenerator_get_length(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {Rgb}
    */
    get_first_element() {
        const ret = wasm.fractalgenerator_get_first_element(this.ptr);
        return Rgb.__wrap(ret);
    }
}
/**
*/
export class Magnet {

    static __wrap(ptr) {
        const obj = Object.create(Magnet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_magnet_free(ptr);
    }
    /**
    * @param {Vec2D} pos
    * @param {number} strength
    * @param {number} radius
    */
    constructor(pos, strength, radius) {
        _assertClass(pos, Vec2D);
        var ptr0 = pos.ptr;
        pos.ptr = 0;
        const ret = wasm.magnet_new(ptr0, strength, radius);
        return Magnet.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    static size_of() {
        const ret = wasm.magnet_size_of();
        return ret >>> 0;
    }
}
/**
*/
export class Pendulum {

    static __wrap(ptr) {
        const obj = Object.create(Pendulum.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_pendulum_free(ptr);
    }
    /**
    * @param {Vec2D} pos
    * @param {number} k
    * @param {number} friction
    * @param {number} mass
    * @returns {Pendulum}
    */
    static new(pos, k, friction, mass) {
        _assertClass(pos, Vec2D);
        var ptr0 = pos.ptr;
        pos.ptr = 0;
        const ret = wasm.pendulum_new(ptr0, k, friction, mass);
        return Pendulum.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    static size_of() {
        const ret = wasm.pendulum_size_of();
        return ret >>> 0;
    }
    /**
    * @returns {Vec2D}
    */
    pos() {
        const ret = wasm.pendulum_pos(this.ptr);
        return Vec2D.__wrap(ret);
    }
}
/**
*/
export class Rgb {

    static __wrap(ptr) {
        const obj = Object.create(Rgb.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rgb_free(ptr);
    }
    /**
    * @param {number} r
    * @param {number} g
    * @param {number} b
    */
    constructor(r, g, b) {
        const ret = wasm.rgb_new(r, g, b);
        return Rgb.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    static size_of() {
        const ret = wasm.rgb_size_of();
        return ret >>> 0;
    }
    /**
    * @param {Rgb} mix
    * @returns {Rgb}
    */
    static mix_pastel(mix) {
        _assertClass(mix, Rgb);
        var ptr0 = mix.ptr;
        mix.ptr = 0;
        const ret = wasm.rgb_mix_pastel(ptr0);
        return Rgb.__wrap(ret);
    }
    /**
    * @param {Rgb} mix
    * @returns {Rgb}
    */
    static mix_blacken(mix) {
        _assertClass(mix, Rgb);
        var ptr0 = mix.ptr;
        mix.ptr = 0;
        const ret = wasm.rgb_mix_blacken(ptr0);
        return Rgb.__wrap(ret);
    }
    /**
    * @returns {Rgb}
    */
    static random_pastel() {
        const ret = wasm.rgb_random_pastel();
        return Rgb.__wrap(ret);
    }
}
/**
*/
export class Universe {

    static __wrap(ptr) {
        const obj = Object.create(Universe.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_universe_free(ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @param {number} max_iters
    */
    constructor(width, height, max_iters) {
        const ret = wasm.universe_new(width, height, max_iters);
        return Universe.__wrap(ret);
    }
    /**
    * @param {Magnet} magnet
    */
    add_magnet(magnet) {
        _assertClass(magnet, Magnet);
        var ptr0 = magnet.ptr;
        magnet.ptr = 0;
        wasm.universe_add_magnet(this.ptr, ptr0);
    }
    /**
    * @param {number} n
    */
    add_nums(n) {
        wasm.universe_add_nums(this.ptr, n);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} strength
    * @param {number} radius
    */
    create_magnet(x, y, strength, radius) {
        wasm.universe_create_magnet(this.ptr, x, y, strength, radius);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} tension
    * @param {number} friction
    * @param {number} mass
    */
    create_pendulum(x, y, tension, friction, mass) {
        wasm.universe_create_pendulum(this.ptr, x, y, tension, friction, mass);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} interval
    * @param {number} tension
    * @param {number} friction
    * @param {number} mass
    */
    create_emitter(x, y, interval, tension, friction, mass) {
        wasm.universe_create_emitter(this.ptr, x, y, interval, tension, friction, mass);
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    get_num(i) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.universe_get_num(ptr, i);
        return ret;
    }
    /**
    */
    clear_magnets() {
        wasm.universe_clear_magnets(this.ptr);
    }
    /**
    * @param {Pendulum} pendulum
    */
    add_pendulum(pendulum) {
        _assertClass(pendulum, Pendulum);
        var ptr0 = pendulum.ptr;
        pendulum.ptr = 0;
        wasm.universe_add_pendulum(this.ptr, ptr0);
    }
    /**
    */
    clear_pendulums() {
        wasm.universe_clear_pendulums(this.ptr);
    }
    /**
    */
    clear_emitters() {
        wasm.universe_clear_emitters(this.ptr);
    }
    /**
    */
    tick() {
        wasm.universe_tick(this.ptr);
    }
    /**
    * @returns {number}
    */
    width() {
        const ret = wasm.universe_width(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    height() {
        const ret = wasm.universe_height(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    pendulums() {
        const ret = wasm.universe_pendulums(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    magnets() {
        const ret = wasm.universe_magnets(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    nums() {
        const ret = wasm.universe_nums(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    pendulums_len() {
        const ret = wasm.universe_pendulums_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    magnets_len() {
        const ret = wasm.universe_magnets_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} new_steps
    */
    set_steps(new_steps) {
        wasm.universe_set_steps(this.ptr, new_steps);
    }
    /**
    * @param {number} new_delta
    */
    set_delta(new_delta) {
        wasm.universe_set_delta(this.ptr, new_delta);
    }
}
/**
*/
export class Vec2D {

    static __wrap(ptr) {
        const obj = Object.create(Vec2D.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_vec2d_free(ptr);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_vec2d_x(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set x(arg0) {
        wasm.__wbg_set_vec2d_x(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_vec2d_y(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set y(arg0) {
        wasm.__wbg_set_vec2d_y(this.ptr, arg0);
    }
    /**
    * @param {number} x
    * @param {number} y
    */
    constructor(x, y) {
        const ret = wasm.vec2d_new(x, y);
        return Vec2D.__wrap(ret);
    }
    /**
    * @param {Vec2D} v
    * @returns {number}
    */
    static magnitude(v) {
        _assertClass(v, Vec2D);
        var ptr0 = v.ptr;
        v.ptr = 0;
        const ret = wasm.vec2d_magnitude(ptr0);
        return ret;
    }
    /**
    * @returns {Vec2D}
    */
    static zero() {
        const ret = wasm.vec2d_zero();
        return Vec2D.__wrap(ret);
    }
    /**
    * @param {Vec2D} from_coords
    * @param {number} to_width
    * @param {number} to_height
    * @param {number} from_width
    * @param {number} from_height
    * @returns {Vec2D}
    */
    static convert_coords(from_coords, to_width, to_height, from_width, from_height) {
        _assertClass(from_coords, Vec2D);
        var ptr0 = from_coords.ptr;
        from_coords.ptr = 0;
        const ret = wasm.vec2d_convert_coords(ptr0, to_width, to_height, from_width, from_height);
        return Vec2D.__wrap(ret);
    }
}
/**
*/
export class wbg_rayon_PoolBuilder {

    static __wrap(ptr) {
        const obj = Object.create(wbg_rayon_PoolBuilder.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wbg_rayon_poolbuilder_free(ptr);
    }
    /**
    * @returns {number}
    */
    numThreads() {
        const ret = wasm.wbg_rayon_poolbuilder_numThreads(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    receiver() {
        const ret = wasm.wbg_rayon_poolbuilder_receiver(this.ptr);
        return ret;
    }
    /**
    */
    build() {
        wasm.wbg_rayon_poolbuilder_build(this.ptr);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_alert_beb704c8b694d433 = function(arg0, arg1) {
        alert(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_process_e56fd54cf6319b6c = function(arg0) {
        const ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_versions_77e21455908dad33 = function(arg0) {
        const ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_node_0dd25d832e4785d5 = function(arg0) {
        const ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_require_0db1598d9ccecb30 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_crypto_b95d7173266618a9 = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_5a86d77a66230f81 = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_b14734aa289bc356 = function() { return handleError(function (arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments) };
    imports.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd = function() {
        const ret = module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_randomFillSync_91e2b39becca6147 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_newnoargs_971e9a5abe185139 = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_33d7bcddbbfa394a = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_self_fd00a1ef86d1b2ed = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_6f6e346d8bbd61d7 = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_3348936ac49df00a = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_67175caf56f55ca9 = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_buffer_34f5ec9f8a838ba0 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_cda198d9dbc6d7ea = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_1a930cfcda1a8067 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_51f19f73d6d9eff3 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_newwithlength_66e5530e7079ea1b = function(arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_subarray_270ff8dd5582c1ac = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_module = function() {
        const ret = init.__wbindgen_wasm_module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_startWorkers_04f63eca19916b8f = function(arg0, arg1, arg2) {
        const ret = startWorkers(takeObject(arg0), takeObject(arg1), wbg_rayon_PoolBuilder.__wrap(arg2));
        return addHeapObject(ret);
    };

    return imports;
}

function initMemory(imports, maybe_memory) {
    imports.wbg.memory = maybe_memory || new WebAssembly.Memory({initial:18,maximum:16384,shared:true});
}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedUint32Memory0 = new Uint32Array();
    cachedUint8Memory0 = new Uint8Array();

    wasm.__wbindgen_start();
    return wasm;
}

function initSync(bytes, maybe_memory) {
    const imports = getImports();

    initMemory(imports, maybe_memory);

    const module = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input, maybe_memory) {
    if (typeof input === 'undefined') {
        input = new URL('magnetic_pendulum_wasm_bg.wasm', import.meta.url);
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports, maybe_memory);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

export { initSync }
export default init;
