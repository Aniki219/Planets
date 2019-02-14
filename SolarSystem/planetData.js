function preload() {
  earthTex = loadImage("earthTexture.png");
  moonTex = loadImage("moonTexture.png");
  sunTex = loadImage("sunTexture.png");

  sun = {r: 6.95, m: 200000000, x: 700, y : 0, z: -700, texture: sunTex};
  earth = {r: 6, m: 600, x: 0, y : 0, z: 0, texture: earthTex};
  moon = {r: 1.7, m: 7.34, x: 384, y : 0, z: 0, texture: moonTex};
}
