var gravityBalls = [];
var gravity = 1;

class GravityBall {
  constructor() {
    this.r = random(10, 25)
    this.pos = createVector(random(-boundsSize, boundsSize), random(-boundsSize, boundsSize), random(-boundsSize, boundsSize));
    this.vel = p5.Vector.fromAngles(random(2*PI), random(2*PI), random(-20, 20));
    this.acc = createVector(0,0,0);
    this.clr = color(random(100,255),100,random(100,255));
    this.elasticity = 0.95;

    gravityBalls.push(this);
  }

  draw() {
    fill(this.clr);
    push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      sphere(this.r);
    pop();
  }

  move() {
    this.acc = createVector(0, gravity, 0);
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if (this.pos.x - this.r < -boundsSize) { this.vel.x *= -this.elasticity; this.pos.x = -boundsSize + this.r; }
    if (this.pos.x + this.r > boundsSize)  { this.vel.x *= -this.elasticity; this.pos.x =  boundsSize - this.r; }
    if (this.pos.y - this.r < -boundsSize) { this.vel.y *= -this.elasticity; this.pos.y = -boundsSize + this.r; }
    if (this.pos.y + this.r > boundsSize)  { this.vel.y *= -this.elasticity; this.pos.y =  boundsSize - this.r; }
    if (this.pos.z - this.r < -boundsSize) { this.vel.z *= -this.elasticity; this.pos.z = -boundsSize + this.r; }
    if (this.pos.z + this.r > boundsSize)  { this.vel.z *= -this.elasticity; this.pos.z =  boundsSize - this.r; }
  }

  static Update() {
    gravityBalls.forEach(p => {
      p.draw();
      p.move();
    })
  }
}
