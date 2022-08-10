//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use std::assert_eq;

use wasm_bindgen_test::*;
use magnetic_pendulum::{Universe,Magnet,Pendulum,Vec2D};

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    assert_eq!(1 + 1, 2);
}

#[cfg(test)]
pub fn input_universe() -> Universe {
    use magnetic_pendulum::Pendulum;

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
    console_log!("Pendulum is now {:?}", (input_universe.get_pendulums()[0].pos()));
    assert_eq!(input_universe.get_pendulums().len() == 1, true);
    assert_eq!(input_universe.get_pendulums()[0].pos().x > 0.0, true);
}