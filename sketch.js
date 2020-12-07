

// Codigo inspirado en https://youtu.be/XUA8UREROYE

let current;
let snowflake = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  current = new Particle(height/2, 0);
}

function draw() {
  translate(width/2, height/2);
  rotate(PI/6);
  background(0);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  if (count == 0) {
    noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(height/2, 0);

  for (let i = 0; i < 6; i++) {
    rotate(PI/3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}
