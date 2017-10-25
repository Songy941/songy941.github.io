var xa, ya;
var xs, ys;
var xd, yd;

var xj, yj;
var xk, yk;
var xl, yl;

var bg;
var title;

var doga, dogs, dogd;
var dogl, dogk, dogj;

var bgm;
var sounda, sounds, soundd;
var soundj, soundk, soundl;


function preload() {
  title = loadImage("assets/awaw.png");

  doga = loadImage("assets/doga.png");
  dogs = loadImage("assets/dogs.png");
  dogd = loadImage("assets/dogd.png");

  dogj = loadImage("assets/dogjj.png");
  dogk = loadImage("assets/dogk.png")
  dogl = loadImage("assets/dogl.png");

  bgm = loadSound("assets/bgm.mp3");

  sounda = loadSound("assets/sounda.mov");
  sounds = loadSound("assets/sounds.mov");
  soundd = loadSound("assets/soundd.mov");

  soundj = loadSound("assets/soundj.mov");
  soundk = loadSound("assets/soundk.mov");
  soundl = loadSound("assets/soundl.mov");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  bgm.play();

  xa = width/5;
  ya = 120;

  xs = width/4.9;
  ys = 340;

  xd = width/4.5;
  yd = 530;

  xj = width/1.3;
  yj = 150;

  xk = width/1.25;
  yk = 350;

  xl = width/1.25;
  yl = 600;
}


function draw() {

  image(title, width/3, 15, width/3, height/6);
 
  image(doga, width/14, 90, width/10, height/10);
  image(dogs, width/14, 300, width/10, height/6);
  image(dogd, width/14, 500, width/7, height/4);

  image(dogj, width/1.25, 100, width/10, height/7); 
  image(dogk, width/1.2, 300 , width/9, height/5); 
  image(dogl, width/1.2, 550, width/13, height/6); 

//press A for doga
  if (keyIsDown (65)){
    sounda.play();

    noStroke();
    fill(random(100, 220),random(10), random(200));
    rect(xa, ya, 15, 10);
    
    ya = ya + random(-15, 10);
    xa = xa + 10;
    
    if (xa > width/1.3) {
      ya = 120;
      xa = width/5;
    } 
  }

//press S for dogs
   if (keyIsDown (83)){
    sounds.play();

    noStroke();
    fill(random(0, 80),random(180, 250), random(3));
    rect(xs, ys, 20, 20);
    
    ys = ys + random(-30, 30);
    xs = xs + 10;
    
    if (xs > width/1.3) {
      xs = width/4.9;
      ys = 340;
    } 
  }

//press D for dogd
   if (keyIsDown (68)){
    soundd.play();

    noStroke();
    fill(random(200, 245),random(90), random(30));
    rect(xd, yd, 20, 20);
    
    yd = yd + random(-30, 30);
    xd = xd + 10;
    
    if (xd > width/1.3) {
      xd = width/4.5;
      yd = 340;
    } 
  }

//press J for dogl
   if (keyIsDown (74)){
    soundj.play();

    noStroke();
    fill(random(0, 80),random(20, 70), random(249));
    rect(xj, yj, 15, 10);
    
    yj = yj + random(-15, 15);
    xj = xj - 10;
    
    if (xj < width/4.7) {
      yj = 150;
      xj = width/1.3;
    } 
  }

//press K for dogl
  if (keyIsDown (75)){
      soundk.play();

      noStroke();
      fill(random(100, 220),random(10), random(200));
      rect(xk, yk, 15, 10);
      
      yk = yk + random(-30, 30);
      xk = xk - 10;
      
      if (xk < width/4.7) {
        yk = 350;
        xk = width/1.25;
      } 
    }



//press L for dogl
   if (keyIsDown (76)){
    soundl.play();

    noStroke();
    fill(random(0, 80),random(30, 100), random(180));
    rect(xl, yl, 15, 10);
    
    yl = yl + random(-15, 15);
    xl = xl - 10;
    
    if (xl < width/4.7) {
      yl = 600;
      xl = width/1.25;
    } 
  }
}










//CREDITS TO:
// Pics: 
// https://ih1.redbubble.net/image.206881757.6169/flat,800x800,075,f.u1.jpg 
// https://ih1.redbubble.net/image.167961165.3798/flat,220x200,075,t.u1.jpg
// http://piq.codeus.net/static/media/userpics/piq_302559_400x400.png
// https://www.google.com/
// http://lh3.googleusercontent.com/hD4poDxSjnedfY4ZNVHAa9t8qr3KaHrVrjRPmbcNj7_TlV238GWZU9PxvcPoYuFPdO5E8suJT1YvJ56zdRdQZVekVEs=s400，https://www.google.com/
// https://cdna.artstation.com/p/assets/images/images/001/866/720/large/gustavo-santos-corgi.jpg?1453943363，https://www.google.com/
// https://wangertron.files.wordpress.com/2013/09/dog.png，https://www.google.com/

// Sounds: 
// https://www.youtube.com/watch?v=rybx9XETJF0 
// https://www.youtube.com/watch?v=vKybOwsnuq4
// https://www.youtube.com/watch?v=crYSzy4m0Ok
// https://www.youtube.com/watch?v=-uPYQ8_pYxM
// https://www.youtube.com/watch?v=QNot4iC7K8s
// https://www.youtube.com/watch?v=nep3jKwVZe8
// https://www.youtube.com/watch?v=gK139KMcYGo
