var stars = [];

class Star {
  constructor(pos) {
    this.pos = pos;
    stars.push(this);
  }

  draw() {
    fill(255, 255, 255);
    push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      sphere(2);
    pop();
  }
}
