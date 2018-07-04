let ball;
let leftFlipper;
let rightFlipper;
class Marble {
  constructor(){
    // this.x = width - width/16;
    // this.y = height - height/8;
    this.x = width/2 - width/50;
    this.y = height/2;
    this.r = width/75;
    this.xVel = 0;
    this.yVel = 0;
    this.gravity = width/10000;
    this.xAcc = 0;
    this.yAcc = 0;
  }
  makeBall(){
    fill(255);
    ellipse(this.x, this.y, this.r, this.r);
  }
  gravityForce(){
    this.yVel += this.gravity;
    this.y += this.yVel;
  }
}
class leftPaddle {
  constructor(){
    this.x = width/2 - width/10;
    this.y = height - height/8;
    this.w = width/10;
    this.l = width/100;
    this.heading = 0;
  }
  createleftFlipper(){
    fill(255, 0, 0);
    push();
      translate(this.x, this.y);
      angleMode(DEGREES);
      rotate(this.heading);
      rect(0, 0, this.w, this.l);
    pop();
  }
}
class rightPaddle {
  constructor(){
    this.x = width/2 + width/10;
    this.y = height - height/8;
    this.w = -width/10;
    this.l = width/100;
    this.heading = 0;
  }
  createrightFlipper(){
    fill(255, 0, 0);
    push();
      translate(this.x, this.y);
      angleMode(DEGREES);
      rotate(this.heading);
      rect(0, 0, this.w, this.l);
    pop();
  }
}
function setup() {
  rectMode(CORNER);
  noStroke();
  createCanvas(windowWidth, windowHeight);
  ball = new Marble;
  leftFlipper = new leftPaddle;
  rightFlipper = new rightPaddle;
  // Quadtree stuff for later
  // let boundary = new Rectangle(width, width, height, height);
  // let qt = new Quadtree(boundary, 1);
  // console.log(qt);
}

function draw() {
  background(0);
  ball.makeBall();
  ball.gravityForce();
  leftFlipper.createleftFlipper();
  rightFlipper.createrightFlipper();
  if(mouseIsPressed && mouseX < width/2){
    leftFlipper.heading -= 25;
    if(leftFlipper.heading <= -75){
      leftFlipper.heading = -75;
    }
  } else {
    leftFlipper.heading += 25;
    if(leftFlipper.heading >= 25){
      leftFlipper.heading = 25;
    }
  }
  if(mouseIsPressed && mouseX > width/2){
    rightFlipper.heading += 25;
    if(rightFlipper.heading >= 75){
      rightFlipper.heading = 75;
    }
  } else {
    rightFlipper.heading -= 25;
    if(rightFlipper.heading <= -25){
      rightFlipper.heading = -25;
    }
  }
  if(ball.x >= leftFlipper.x + 55*cos(leftFlipper.heading) /*&& ball.x <= leftFlipper.x + width/10*cos(leftFlipper.heading) + width/100*/
  && ball.y >= leftFlipper.y + 55*sin(leftFlipper.heading)
/*&& ball.y <= leftFlipper.y + width/10*sin(leftFlipper.heading) + width/100*/){
    // ball.y = height - (width/10*sin(leftFlipper.heading));
    console.log(ball.gravity);
    console.log(ball.y);
    console.log(ball.yVel);
    console.log(leftFlipper.y);
    ball.yVel = 0;
    ball.gravity = 0;
    // ball.xAcc = width/100*cos(leftFlipper.heading);
    // ball.xVel += ball.xAcc;
    // ball.yAcc = width/100*sin(leftFlipper.heading);
    // ball.yVel += ball.yAcc;
  }
}
