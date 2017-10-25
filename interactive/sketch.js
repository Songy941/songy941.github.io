var xa, ya;

var bg;
var dogo;
var dogs;
var doga;
var dogf;

var sounda;


function preload() {
  dogo = loadImage("http://68.media.tumblr.com/tumblr_m9wj12iKGd1rfjowdo1_500.gif");
  dogs = loadImage("https://78.media.tumblr.com/a448008181b763a93ae26b5a71f33f0a/tumblr_ob9jn4jUMj1v013xpo1_400.gif");
  doga = loadImage("assets/doga.png")

  console.log("loadddd");

  sounda = loadSound("assets/sounda.mov");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  // background(255, 204, 0);
  // bg = loadImage("../assets/bg.png");
  // doga = loadImage("../assets/doga.png"); 
  xa = width/5;
  ya = 130;
}


function draw() {
  // image(bg, 0, 0);
  // Displays the image at its actual size at point (0,0)
  // Displays the image at point (0, height/2) at half size
  image(dogo, width/1.2, 100, width/6, height/4); 
  image(dogs, width/2, 40, width/2, height/4);
  image(doga, width/14, 100, width/10, height/10);
  // imageMode(CENTER);
  // push();
  //   translate(150, 150);
  //   rotate(radians(45));
  //   image(dogo, 0, 0, 200, 200);
  // pop();


  //press A for doga
  if (keyIsDown (65)){
    sounda.play();

    noStroke();
    fill(random(100, 220),random(10), random(200));
    rect(xa, ya, 15, 10);
    
    ya = ya + random(-0.4, 0.4);
    xa = xa + 10;
    
    if (xa > width/2) {
      ya = 130;
      xa = width/5;
    } 


  }
}


// function keyTyped() {
//   if (keyIsDown === 'a') {
//     noStroke();
//     fill(random(255), 90,random(150));
//     rect(x, y, 15, 10);
    
//     y = y + random(-0.4, 0.4);
//     x = x + 10;
    
//     if (x > width/2) {
//       y = 130;
//       x = width/5;
//     }
//   } else if (key === 'b') {
//   }
  
// }







// image: online from:
// cloud: https://ih1.redbubble.net/image.206881757.6169/flat,800x800,075,f.u1.jpg
// dogs: