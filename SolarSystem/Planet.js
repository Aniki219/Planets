var planets = [];
var G = 6.67 * 0.0000001;

class Planet {
  constructor(r, m, x, y, z, tex = null) {
    this.r = r;
    this.m = m;
    this.pos = createVector(x, y, z);
    this.vel = createVector(0,0,0);
    this.acc = createVector(0,0,0);
    this.texture = tex

    planets.push(this);
  }

  draw() {
    if (this.texture) {
      texture(this.texture);
    } else {
      fill(255);
    }
    push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      sphere(this.r*10);
    pop();
  }

  move() {
    for (var planet of planets) {
      if (this == planet) {continue;}
      let distanceVector = p5.Vector.sub(this.pos, planet.pos);
      let directionVector = distanceVector.normalize();
      let F = -G * this.m * planet.m / sq(distanceVector.mag());
      this.acc = p5.Vector.mult(directionVector, F);
      this.acc.div(this.m);
      console.log(this.acc)
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  static Update() {
    planets.forEach(p => {
      p.draw();
      p.move();
    })
  }
}
