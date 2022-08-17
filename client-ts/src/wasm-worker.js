import { threads } from 'wasm-feature-detect';
import * as Comlink from 'comlink';


async function initHandlers() {
  let [singleThread, multiThread] = await Promise.all([
    (async () => {
      const singleThread = await import('magnetic-pendulum-wasm/magnetic_pendulum_wasm.js');
      await singleThread.default();
      return wrapExports(singleThread);
    })(),
    (async () => {
      // If threads are unsupported in this browser, skip this handler.
      if (!(await threads())) {
        console.log("Threads not supported")
        return;
      }
      const multiThread = await import(
        'magnetic-pendulum-wasm/magnetic_pendulum_wasm.js'
      );
      await multiThread.default();
      await multiThread.initThreadPool(navigator.hardwareConcurrency);
      console.log("Init thread pool")
      return wrapExports(multiThread);
    })()
  ]);

  return Comlink.proxy({
    singleThread,
    supportsThreads: !!multiThread,
    multiThread
  });
}

Comlink.expose({
  handlers: initHandlers()
});

// Wrap wasm-bindgen exports (the `generate` function) to add time measurement.
function wrapExports({generate_rand, generate_fractal, Universe}) {
  return ({ image_width, image_height, universe, k, friction ,mass, magnets, max_iters, steps  }) => {
    const start = performance.now();
    console.log("hey", Universe)
    let uni = new Universe(64,64,max_iters, steps);
    for (let magnet of magnets) {
      uni.create_magnet_with_rgb(magnet.pos.x, magnet.pos.y, magnet.strength, magnet.radius, magnet.color.r, magnet.color.g, magnet.color.b)
    }
    let universe_obj = Universe.__wrap(universe)
    console.log("Hi", universe, image_width, image_height)
    console.log(universe_obj)
    console.log("geenrating fractal...",universe.ptr)
    const rawImageData = generate_fractal(image_width, image_height, uni, k, friction, mass);
    // const rawImageData = generate_rand();
    const time = performance.now() - start;
    console.log("time taken is", time, rawImageData)
    return {
      // Little perf boost to transfer data to the main thread w/o copying.
      raw_image_data: Comlink.transfer(rawImageData, [rawImageData.buffer]),
      time
    };
  };
}
