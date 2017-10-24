
var bg;
var dogo;
var dogs;
var dogd;
var dogf;

function preload() {
  dogo = loadImage("http://68.media.tumblr.com/tumblr_m9wj12iKGd1rfjowdo1_500.gif");
  // dogs = loadImage("https://i.pinimg.com/564x/50/0f/b6/500fb6a15bd123ef2fd59e601d2e59c8.jpg")
  console.log("loadddd");

}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  // background(255, 204, 0);
  // bg = loadImage("../assets/bg.png");
  // doga = loadImage("../assets/doga.png"); 
  noLoop();
 
  loadImage("../assets/bg.png",
            function (pic) { print(img = pic), redraw(); },
            loadImageErrorOverride);
}


function draw() {
  // image(bg, 0, 0);
  // Displays the image at its actual size at point (0,0)
  // Displays the image at point (0, height/2) at half size
  image(dogo, width/1.2, 100, width/6, height/4); 
  image(dogs, 0, 0)
  // imageMode(CENTER);
  // push();
  //   translate(150, 150);
  //   rotate(radians(45));
  //   image(dogo, 0, 0, 200, 200);
  // pop();


}



 
function loadImageErrorOverride(errEvt) {
  const pic = errEvt.target;
 
  if (!pic.crossOrigin)  return print('Failed to reload ' + pic.src + '!');
 
  print('Attempting to reload it as a tainted image now...');
  pic.crossOrigin = null, pic.src = pic.src;
}
 
// function setup() {
//   createCanvas(500, 400);
//   noLoop();
 
//   loadImage(URL,
//             function (pic) { print(img = pic), redraw(); },
//             loadImageErrorOverride);
// }
 
// function draw() {
//   background(img || 0350);
// }












//image: online from:
//cloud: https://ih1.redbubble.net/image.206881757.6169/flat,800x800,075,f.u1.jpg
//dogs: