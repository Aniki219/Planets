var boundsSize = 150;

function setup() {
  createCanvas(600, 600, WEBGL);

  noStroke();

  while(gravityBalls.length < 25) {
    let b = new GravityBall();
  }
}

function draw() {
  orbitControl();
  background(255);
  stroke(0);
  noFill();
  box(boundsSize*2);
  noStroke();
  GravityBall.Update();
}
