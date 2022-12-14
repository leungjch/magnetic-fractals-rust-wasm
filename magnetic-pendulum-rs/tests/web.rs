//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;
use std::mem;
use magnetic_pendulum_rs::{Magnet,Rgb,Universe,Pendulum,Vec2D};

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    assert_eq!(1 + 1, 2);
}

#[cfg(test)]
pub fn input_universe() -> Universe {

    let mut universe = Universe::new(16, 16, 1000);
    universe.add_magnet(Magnet::new(Vec2D::zero(), 100000.0));
    universe.add_pendulum(Pendulum::new(Vec2D::new(16.0, 16.0), 0.0,0.0));
    universe
}

#[wasm_bindgen_test]
pub fn test_tick() {
    // Create the input universe
    let mut input_universe = input_universe();
    input_universe.tick();

    let pendulums = input_universe.get_pendulums();
    console_log!("Size of the pendulum struct: {} bytes", mem::size_of::<Pendulum>());
    console_log!("Size of the rgb struct: {} bytes", mem::size_of::<Rgb>());
    console_log!("Size of the magnet struct: {} bytes", mem::size_of::<Magnet>());
    console_log!("Size of the vec struct: {} bytes", mem::size_of::<Vec2D>());
    console_log!("Size of the f64 struct: {} bytes", mem::size_of::<f64>());

    console_log!("Pendulum is now {:?}", (input_universe.get_pendulums()[0].pos()));
    assert_eq!(input_universe.get_pendulums().len() == 1, true);
    assert_eq!(input_universe.get_pendulums()[0].pos().x > 0.0, true);
}