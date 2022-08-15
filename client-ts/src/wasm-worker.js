import { threads } from 'wasm-feature-detect';
import * as Comlink from 'comlink';
const PATH_TO_PKG = "magnetic-pendulum-wasm/"
async function importModule() {
  console.log("Hello filename")

  if (!(await threads())) {
    console.log("No threads")
    return;
  }
  let path = PATH_TO_PKG + "magnetic_pendulum_wasm.js";
  console.log("Getting filename", path)

  const thread = await import("magnetic-pendulum-wasm/magnetic_pendulum_wasm.js");
  await thread.default();
  await thread.initThreadPool(navigator.hardwareConcurrency);
  console.log("Got thread pool init")
  return Comlink.proxy({
    sum_of_squares: thread.sum_of_squares,
  });
}

Comlink.expose({
  thread: importModule(),
});
