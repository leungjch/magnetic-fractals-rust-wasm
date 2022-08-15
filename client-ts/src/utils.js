export class Rgb {
    r;
    g;
    b;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    to_string(){
        return "rgb("+this.r+","+this.g+","+this.b+")";
    }      
}
export class Vec2D {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Magnet {
    strength;
    pos;
    radius;
    color;

    constructor(strength, pos, radius, color) {
        this.strength = strength;
        this.pos = pos;
        this.radius = radius
        this.color = color;
    }
}

export class Pendulum {
    pos_start;
    pos;
    vel;
    acc;
    mass;
    f_tension;
    k;
    friction;
    f_magnetic;
    f_net;
    is_stationary;
    magnet_color;
    
    constructor(pos_start,
        pos,
        vel,
        acc,
        mass,
        f_tension,
        k,
        friction,
        f_magnetic,
        f_net,
        is_stationary,
        magnet_color,
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
