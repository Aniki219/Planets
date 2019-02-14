function setup() {
  createCanvas(800, 800, WEBGL);

  noStroke();
  let s = new Planet(...Object.values(sun), color(100, 100, 200));
  let e = new Planet(...Object.values(earth), color(100, 100, 200));
  let m = new Planet(...Object.values(moon), color(100, 100, 100));
  m.vel.z = -.35;
  e.vel.y = -0.05;

  while(stars.length < 100) {
    new Star(p5.Vector.fromAngles(random(2*PI),random(2*PI),random(300,1000)))
  }
}

function draw() {
  orbitControl();
  background(0);
  stars.forEach(s => s.draw());
  Planet.Update();
}
