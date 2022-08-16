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
function wrapExports(wasm) {
  return ({ width, height, universe_ptr }) => {
    const start = performance.now();
    console.log("Hi", universe, width, height)
    let universe = wasm.Universe.wrap(universe_ptr)
    const rawImageData = wasm.generate_fractal(width, height, universe);
    const time = performance.now() - start;
    console.log("time taken is", time)
    return {
      // Little perf boost to transfer data to the main thread w/o copying.
      rawImageData: Comlink.transfer(rawImageData, [rawImageData.buffer]),
      time
    };
  };
}
