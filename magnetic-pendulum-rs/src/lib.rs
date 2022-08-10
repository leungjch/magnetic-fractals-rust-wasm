mod utils;

use wasm_bindgen::prelude::*;

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

const STEPS: u32 = 1000;
const DELTA: f64 = 0.0001;

// The radius of a magnet
// if the distance between the pendulum and a magnet is below this value
// then it is considered to be absorbed by the magnet.
const MAGNET_RADIUS: f64 = 15.0;

#[wasm_bindgen]
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
    pub fn new(x: f64, y: f64) -> Vec2D {
        Vec2D { x, y }
    }

    fn distance_sqr(lhs: Self, rhs: Self) -> f64 {
        f64::powi(lhs.x - lhs.x, 2) + f64::powi(lhs.y - rhs.y, 2)
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

pub struct Rgb {
    r: u8,
    g: u8,
    b: u8,
}

impl Rgb {
    fn new(r: u8, g: u8, b: u8) -> Rgb {
        Rgb { r, g, b }
    }

    fn black() -> Rgb {
        Rgb { r: 0, g: 0, b: 0 }
    }
}

#[wasm_bindgen]
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
}

#[wasm_bindgen]
impl Universe {
    pub fn new(width: u32, height: u32, max_iters: u32) -> Universe {
        Universe {
            width,
            height,
            pendulums: vec![],
            magnets: vec![],
            max_iters,
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
            x: magnet.strength * (magnet.pos.x - pendulum.pos.x) / f64::powi(m_coeff, 3),
            y: magnet.strength * (magnet.pos.y - pendulum.pos.y) / f64::powi(m_coeff, 3),
        }
    }

    pub fn add_magnet(&mut self, magnet: Magnet) {
        self.magnets.push(magnet);
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
            pendulum.tick(&self.magnets, self.width, self.height, STEPS, DELTA)
        }
    }
}

impl Universe {

    pub fn get_pendulums(&self) -> &[Pendulum] {
        &self.pendulums
    }
}

#[wasm_bindgen]
pub struct Magnet {
    pos: Vec2D,
    strength: f64,
    color: Rgb, // rgb
}

#[wasm_bindgen]
impl Magnet {
    pub fn new(pos: Vec2D, strength: f64) -> Magnet {
        Magnet {
            pos,
            strength,
            color: Rgb::black(),
        }
    }
}

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
            if Vec2D::distance_sqr(magnet.pos, self.pos) > 100.0 {
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
