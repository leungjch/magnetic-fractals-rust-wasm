mod utils;

use wasm_bindgen::prelude::*;
use std::mem;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, magnetic-pendulum!");
}

const INIT_STEPS: u32 = 25000;
const INIT_DELTA: f64 = 0.000001;

// The radius of a magnet
// if the distance between the pendulum and a magnet is below this value
// then it is considered to be absorbed by the magnet.
const MAGNET_RADIUS: f64 = 0.1;

#[wasm_bindgen]
#[repr(C)]
#[derive(Clone, Copy,Debug)]
pub struct Vec2D {
    pub x: f64,
    pub y: f64,
}

// Support float vector addition
impl std::ops::Add for Vec2D {
    type Output = Vec2D;
    fn add(self, rhs: Self) -> Self::Output {
        Vec2D {
            x: self.x + rhs.x,
            y: self.y + rhs.y,
        }
    }
}

// Scalar multiplication
impl std::ops::Mul<f64> for Vec2D {
    type Output = Vec2D;

    fn mul(self, c: f64) -> Self::Output {
        Vec2D {
            x: self.x * c,
            y: self.y * c,
        }
    }
}

#[wasm_bindgen]
impl Vec2D {
    #[wasm_bindgen(constructor)]
    pub fn new(x: f64, y: f64) -> Vec2D {
        Vec2D { x, y }
    }

    fn distance_sqr(lhs: Self, rhs: Self) -> f64 {
        f64::powi(lhs.x - rhs.x, 2) + f64::powi(lhs.y - rhs.y, 2)
    }
    fn distance(lhs: Self, rhs: Self) -> f64 {
        f64::sqrt(Vec2D::distance_sqr(lhs, rhs))
    }
    pub fn zero() -> Vec2D {
        Vec2D { x: 0.0, y: 0.0 }
    }
}

impl Default for Vec2D {
    fn default() -> Vec2D {
        Vec2D { x: 0.0, y: 0.0 }
    }
}

#[wasm_bindgen]
#[repr(C)]
pub struct Rgb {
    r: u8,
    g: u8,
    b: u8,
}

#[wasm_bindgen]
impl Rgb {
    #[wasm_bindgen(constructor)]
    pub fn new(r: u8, g: u8, b: u8) -> Rgb {
        Rgb { r, g, b }
    }

    fn black() -> Rgb {
        Rgb { r: 0, g: 0, b: 0 }
    }
}

#[wasm_bindgen]
#[repr(C)]
pub struct Universe {
    width: u32,
    height: u32,
    /// a vector of size width*height, where cells[i]
    /// represents the index of the magnet in the magents vector, or -1 if indeterminate
    pendulums: Vec<Pendulum>,
    /// a vector of size > 1 where
    magnets: Vec<Magnet>,
    /// the max iterations for computing the magnet associated with a pendulum
    max_iters: u32,
    nums: Vec<f64>,
    steps: u32,
    delta: f64,
}

#[wasm_bindgen]
impl Universe {
    #[wasm_bindgen(constructor)]
    pub fn new(width: u32, height: u32, max_iters: u32) -> Universe {
        // create some magnets
        let magnets = vec![
            Magnet::new(Vec2D::new(50.0,50.0), 100.05),
            ];
        let pendulums = vec![Pendulum::new(Vec2D::new(-50.0, 50.0), 1.0,1.0)];

        Universe {
            width,
            height,
            pendulums,
            magnets,
            max_iters,
            nums: vec![3.14; 1],
            steps: INIT_STEPS,
            delta: INIT_DELTA,
        }
    }
    /// Computes the tension force induced on a pendulum
    fn compute_tension_force(pendulum: &Pendulum, width: u32, height: u32) -> Vec2D {
        Vec2D {
            x: pendulum.k * (width as f64 / 2.0 - pendulum.pos.x),
            y: pendulum.k * (height as f64 / 2.0 - pendulum.pos.y),
        }
    }
    /// Computes the magnetic force induced on a pendulum by a magnet
    fn compute_magnetic_force(magnet: &Magnet, pendulum: &Pendulum) -> Vec2D {
        let m_coeff: f64 = Vec2D::distance(magnet.pos, pendulum.pos);
        Vec2D {
            x: magnet.strength * (magnet.pos.x - pendulum.pos.x) / f64::powi(m_coeff, 2),
            y: magnet.strength * (magnet.pos.y - pendulum.pos.y) / f64::powi(m_coeff, 2),
        }
    }

    pub fn add_magnet(&mut self, magnet: Magnet) {
        self.magnets.push(magnet);
    }
    pub fn add_nums(&mut self, n: f64) {
        self.nums.push(n as f64)
    }

    pub fn create_magnet(&mut self, x: f64, y: f64, strength: f64) {
        self.magnets.push(Magnet::new(Vec2D::new(x,y), strength));
    }

    pub fn create_pendulum(&mut self, x: f64, y: f64, tension: f64, friction: f64) {
        self.pendulums.push(Pendulum::new(Vec2D::new(x,y), tension, friction));
    }

    pub fn get_num(self, i: usize) -> f64 {
        self.nums[i]
    }

    pub fn clear_magnets(&mut self) {
        self.magnets.clear();
    }

    pub fn add_pendulum(&mut self, pendulum: Pendulum) {
        self.pendulums.push(pendulum);
    }

    pub fn clear_pendulums(&mut self) {
        self.pendulums.clear();
    }

    pub fn tick(&mut self) {
        for pendulum in self.pendulums.iter_mut() {
            pendulum.tick(&self.magnets, self.width, self.height, self.steps, self.delta)
        }
    }

    pub fn width(&self) -> u32 {
        self.width
    }

    pub fn height(&self) -> u32 {
        self.height
    }

    pub fn pendulums(&self) -> *const Pendulum {
        self.pendulums.as_ptr()
    }

    pub fn magnets(&self) -> *const Magnet {
        self.magnets.as_ptr()
    }

    pub fn nums(&self) -> *const f64 {
        self.nums.as_ptr()
    }

    pub fn pendulums_len(&self) -> u32 {
        self.pendulums.len() as u32
    }

    pub fn magnets_len(&self) -> u32 {
        self.magnets.len() as u32
    }

    pub fn set_steps(&mut self, new_steps: u32) {
        self.steps = new_steps;
    }

    pub fn set_delta(&mut self, new_delta: f64) {
        self.delta = new_delta;
    }
}

impl Universe {

    pub fn get_pendulums(&self) -> &[Pendulum] {
        &self.pendulums
    }

    pub fn get_magnets(&self) -> &[Magnet] {
        &self.magnets
    }
}

#[repr(C)]
#[wasm_bindgen]
/*
pos: 16 bytes
strength: 8 bytes
color: 3 bytes
padding
total: 32 bytes
*/
pub struct Magnet {
    strength: f64,
    pos: Vec2D,
    color: Rgb, // rgb
}

#[wasm_bindgen]
impl Magnet {
    #[wasm_bindgen(constructor)]
    pub fn new(pos: Vec2D, strength: f64) -> Magnet {
        Magnet {
            pos,
            strength,
            color: Rgb::black(),
        }
    }
    
    pub fn size_of() -> u32 {
        mem::size_of::<Magnet>() as u32
    }
}

#[repr(C)]
#[wasm_bindgen]
pub struct Pendulum {
    pos_start: Vec2D,
    pos: Vec2D,
    vel: Vec2D,
    acc: Vec2D,
    // tension force
    f_tension: Vec2D,
    // tension coefficient
    k: f64,
    // friction coefficient
    friction: f64,
    // magmetic force
    f_magnetic: Vec2D,
    // net force
    f_net: Vec2D,

    // The magnet that it attracts to at pos_start
    is_stationary: bool,
}

#[wasm_bindgen]
impl Pendulum {
    pub fn new(pos: Vec2D, k: f64, friction: f64) -> Pendulum {
        Pendulum {
            pos_start: pos,
            pos,
            vel: Vec2D::zero(),
            acc: Vec2D::zero(),
            f_tension: Vec2D::zero(),
            f_magnetic: Vec2D::zero(),
            f_net: Vec2D::zero(),
            k,
            friction,
            is_stationary: false,
        }
    }

    pub fn size_of() -> usize {
        mem::size_of::<Pendulum>()
    }

    pub fn pos(&self) -> Vec2D {
        self.pos
    }
    // Perform euler integration to determine the next position
    fn tick(&mut self, magnets: &Vec<Magnet>, width: u32, height: u32, steps: u32, delta: f64) {
        // If the pendulum is marked stationary, don't move
        if self.is_stationary {
            return;
        }

        // Update tension force (Hooke's law: F_t = kx where x is distance from center)
        self.f_tension = Universe::compute_tension_force(self, width, height);

        // Compute the net magnetic force exerted by all magnets
        self.f_magnetic = Vec2D { x: 0.0, y: 0.0 };

        for magnet in magnets.iter() {
            // Check if the pendulum is pulled into the magnet
            if Vec2D::distance_sqr(magnet.pos, self.pos) > MAGNET_RADIUS {
                self.f_magnetic = self.f_magnetic + Universe::compute_magnetic_force(magnet, self);

            // Pendulum is pulled into magnet
            } else {
                self.pos = magnet.pos;
                self.is_stationary = true;
                return;
            }
        }
        // Fnet = F_t + F_m
        self.f_net = self.f_tension + self.f_magnetic;

        // Calculate acceleration (Fnet = ma)
        // Apply friction proportional to previous velocity
        self.acc = Vec2D {
            x: self.f_net.x + self.f_magnetic.x - self.vel.x * self.friction,
            y: self.f_net.y + self.f_magnetic.y - self.vel.y * self.friction,
        };

        // Euler integration
        for _ in 0..steps {
            self.vel = self.vel + self.acc * delta;
            self.pos = self.pos + self.vel * delta;
        }
    }
}

#[wasm_bindgen]
pub struct Image {
    data: Vec<u8>,
}

#[wasm_bindgen]
impl Image {
    pub fn new(length: usize) -> Image {
        Image { data: vec![42; length] }
    }

    pub fn get_pointer(&self) -> *const u8 {
        self.data.as_ptr()
    }

    pub fn get_length(&self) -> usize {
        self.data.len()
    }

    pub fn get_first_element(&self) -> u8 {
        match self.data.get(0) {
            Some(v) => *v,
            None => 0,
        }
    }
}