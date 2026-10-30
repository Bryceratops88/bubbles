// sketch.js

let bubble;
let bubbles = [];
let black;
let white;
let green;
let gold;
let pink;
let purple;
let red;
let blue;
let velocity;

function setup() {

  createCanvas(windowWidth, windowHeight);

  black = color(0, 0, 0);
  white = color(255, 255, 255);
  green = color(0, 255, 0);
  gold = color(255, 223, 0);
  pink = color(255, 105, 180);
  purple = color(255, 0, 255);
  red = color(255, 0, 0);
  blue = color(0, 0, 255);
  
  for (let i = 0; i < 1000; i++){
    bubble = new Circle();
    bubbles.push(bubble);
    }
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(blue);

  for (let bubble of bubbles){
    bubble.update();
    bubble.render();
  }
  
}

class Circle {
  constructor(x,y, size, colorChoice) {
    this.x = random(width);
    this.startx = this.x;
    this.y = random (height + 100);
    this.size = random(10, 40);
    this.colorChoice = lerpColor(red, black, random(1));
    this.velocity = map(this.size, 40, 10, 0.2, 0.9);

    this.alpha = random(100, 180);
    this.sway = random (0.01, 0.02);
    this.offset = random(TWO_PI);

  }

  update() {
    
    let current = map(noise(frameCount * 0.003 + this.offset), 0, 1, -5, 5);
    this.y -= this.velocity;
    this.x = this.startx + sin(frameCount * this.sway + this.offset) * 5 + current;

    if (this.y <= -this.size / 2) {
      this.y = height + this.size;
      this.startx = random(width);
    }
    
    

  }

  render() {
    let c = this.colorChoice;
    strokeWeight(2);
    stroke(red);
    c.setAlpha(this.alpha);
    fill(c);
    circle(this.x, this.y, this.size);
    //circle(this.x, this.y * .9, this.size / 3);


  }


}