let mic;
let CalibriTalk = false;
let x1;
let x2;
let y1;
let y2;
let star;
let r, g, b;
let counter = 0;
let openEye = 80;
let blink = false;
let value = 50;

function setup() {
  createCanvas(400, 400);
  createButton("Start").mousePressed(talkCat);

  star1 = new stars(30, 120, 4, 8, 5);
  star2 = new stars(360, 200, 9, 18, 5);
  star3 = new stars(70, 300, 5, 10, 5);
  star4 = new stars(30, 380, 3, 6, 5);
  star5 = new stars(20, 200, 9, 18, 5);
  star6 = new stars(350, 300, 3, 6, 5);
  star7 = new stars(360, 100, 4, 8, 5);
  star8 = new stars(370, 20, 5, 10, 5);
  star9 = new stars(240, 40, 9, 18, 5);
  star10 = new stars(70, 20, 9, 18, 5);
  star11 = new stars(370, 380, 9, 18, 5);

  r = random(255);
  g = random(255);
  b = random(255);
}

function talkCat() {
  mic = new p5.AudioIn();
  mic.start();
  CalibriTalk=true;
}

function draw() {
  if(CalibriTalk)
  {
    micLevel = mic.getLevel(1.0);


    background(150);
    counter = counter + deltaTime;
    if (blink && counter > 300) {
      openEye = 80;
      blink = false;
      counter = 0;
    } else if (counter > 2000) {
      openEye = 0;
      blink = true;
      counter = 0;
    }
    x1 = map(mouseX, 0, width, 145, 160, true);
    x2 = map(mouseX, 0, width, 235, 250, true);
    y1 = map(mouseY, 0, height, 175, 208, true);
    y2 = map(mouseY, 0, height, 175, 208, true);
    ///ooo stars
    star1.display();
    star2.display();
    star3.display();
    star4.display();
    star5.display();
    star6.display();
    star7.display();
    star8.display();
    star9.display();
    star10.display();
    star11.display();

  ///stationary
  body();
  head();

    //face
    mouth();
    eye1();
    eye2();
    pupil1(9, 9);
    pupil2(9, 9);
    nose();
  }
}
  function body() {
    push();
    fill(250);
    stroke(0);
    strokeWeight(2);
    quad(
      width * 0.3,
      height * 1,
      width * 0.4,
      height * 0.7,
      width * 0.6,
      height * 0.7,
      width * 0.7,
      height * 1
    );
    pop();
  }

  function head() {
    push();
    stroke(0);
    strokeWeight(2);
    beginShape();
    fill(value);
    triangle(
      width * 0.25,
      height * 0.5,
      width * 0.45,
      height * 0.26,
      width * 0.15,
      height * 0.15
    );
    fill(250);
    triangle(
      width * 0.27,
      height * 0.43,
      width * 0.4,
      height * 0.28,
      width * 0.17,
      height * 0.18
    );
    fill(value);
    triangle(
      width * 0.75,
      height * 0.5,
      width * 0.85,
      height * 0.1,
      width * 0.5,
      height * 0.26
    );
    fill(250);
    triangle(
      width * 0.7,
      height * 0.43,
      width * 0.83,
      height * 0.14,
      width * 0.56,
      height * 0.28
    );
    fill(250);
    circle(width * 0.5, width * 0.5, width * 0.5);
    endShape(CLOSE);
    pop();
  }

  function mouth() {
    push();
    stroke(50);
    strokeWeight(3)
    fill(70);
    arc(200, 260, 50, mic.getLevel() * 500, 0, radians(180), OPEN);
    pop();
  }

  function eye1() {
    push();
    fill(250);
    stroke(value);
    strokeWeight(9);
    ellipse(width * 0.38, height * 0.48, width * 0.15, openEye);
    pop();
  }

  function eye2() {
    push();
    fill(250);
    stroke(value);
    strokeWeight(9);
    ellipse(width * 0.6, height * 0.48, width * 0.15, openEye);
    pop();
  }

  function pupil1(xpos, ypos) {
    push();
    fill(value);
    noStroke();
    ellipse(x1, y1, width / xpos, openEye / 1.8);
    pop();
  }

  function pupil2(xpos, ypos) {
    push();
    fill(value);
    noStroke();
    ellipse(x2, y2, width / xpos, openEye / 1.8);
    pop();
  }

  function nose() {
    push();
    fill(0);
    stroke(0);
    strokeWeight(1);
    triangle(
      width * 0.46,
      height * 0.55,
      width * 0.49,
      height * 0.58,
      width * 0.52,
      height * 0.55
    );
    pop();
  }


function mouseClicked() {
  if (value === 50) {
    value = color(random(255), random(255), random(255))
  } else {
    value = 50;
  }
}
