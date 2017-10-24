
var bg;
var dogo;
var dogs;
var dogd;
var dogf;

function preload() {
  dogo = loadImage("http://68.media.tumblr.com/tumblr_m9wj12iKGd1rfjowdo1_500.gif");
  console.log("loadddd");

}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  // background(255, 204, 0);
  // bg = loadImage("../assets/bg.png");
  // doga = loadImage("../assets/doga.png"); 
}


function draw() {
  // image(bg, 0, 0);
  // Displays the image at its actual size at point (0,0)
  // Displays the image at point (0, height/2) at half size
  imageMode(CENTER);
    image(dogo, width/1.2, 100, width/6, height/4);
  push();
    translate(150, 150);
    rotate(radians(45));
    image(dogo, 0, 0, 200, 200);
  pop();
}





















//image: online from:
//cloud: https://ih1.redbubble.net/image.206881757.6169/flat,800x800,075,f.u1.jpg
//dogs: