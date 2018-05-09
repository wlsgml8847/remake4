var theta;
var img;

function setup() {
  createCanvas(1200, 600); 
  smooth();
  noLoop();
img = loadImage('assets/olivetree.png')
 
}

function draw() {

  noStroke();
  fill(200, 237, 189);
  rect(0, 0, 600, 400);
  fill(193, 118, random(57));
  rect(0, 400, 600, 200);
  strokeWeight(15);


  for (var i= 0; i<4; i++) {
    stroke(64, 32, 6);
    theta =100;
    push();
    translate(random(600), random(400, 600));
    line(0, 0, 0, -120);
    translate(0, -120);
    branch(100);
    pop();
  }
  image(img,600,0,600,600);
}


function branch(h) {
  h *= 2.0/3.0;

  strokeWeight(10);
  if (h>2) {

    push();
    stroke(64, 32, 6);
    rotate(theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    push();
    stroke(64, 32, 6);
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  } else {
    noStroke();
    fill(random(30, mouseX/2), random(88, mouseY/2), random(27, 97), 150);
    rect(0, 0, random(20), random(30, 60));
  }
}


function mouseReleased() {
  redraw();
}