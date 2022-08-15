export class Rgb {
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    to_string(){
        return "rgb("+this.r+","+this.g+","+this.b+")";
    }      
}
export class Vec2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Magnet {
    strength: number;
    pos: Vec2D;
    radius: number;
    color: Rgb;

    constructor(strength: number, pos: Vec2D, radius: number, color: Rgb) {
        this.strength = strength;
        this.pos = pos;
        this.radius = radius
        this.color = color;
    }
}

export class Pendulum {
    pos_start: Vec2D;
    pos: Vec2D;
    vel: Vec2D;
    acc: Vec2D;
    mass: number;
    f_tension: Vec2D;
    k: number;
    friction: number;
    f_magnetic: Vec2D;
    f_net: Vec2D;
    is_stationary: boolean;
    magnet_color: Rgb;
    
    constructor(pos_start: Vec2D,
        pos: Vec2D,
        vel: Vec2D,
        acc: Vec2D,
        mass: number,
        f_tension: Vec2D,
        k: number,
        friction: number,
        f_magnetic: Vec2D,
        f_net: Vec2D,
        is_stationary: boolean,
        magnet_color: Rgb,
        ) {
            this.pos_start = pos_start;
            this.pos = pos;
            this.vel = vel;
            this.acc = acc;
            this.mass = mass;
            this.f_tension = f_tension;
            this.k = k
            this.friction = friction;
            this.f_magnetic = f_magnetic;
            this.f_net = f_net;
            this.is_stationary = is_stationary;
            this.magnet_color = magnet_color;
        }
}
