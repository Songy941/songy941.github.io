var socket
var myColor
var img;



function setup(){
	createCanvas(windowWidth, windowHeight);
	background(51)

	noStroke();
	rect(width/2.25, height/8, 150, 130)
	rect(width/2.55, height/3, 300, 350)
	rect(width/2.2, height/1.23, 30, 140)
	rect(width/1.9, height/1.23, 30, 140)

	rect(width/2.32, height/1.055, 60, 36)
	rect(width/1.9, height/1.055, 60, 36)

	fill(51)
	// rect(width/2.15, height/6, 30, 30)
	// rect(width/1.95, height/6, 30, 30)
	// rect(width/2.16, height/4.3, 100, 20)
	rect(width/2.3, height/2, 20, 225)
	rect(width/1.8, height/2, 20, 225)

	fill(255)
	textSize(32);
	text("Draw a robot together!", 30, 50);

	socket = io.connect('http://localhost:3000')
	socket.on('mouse', newDrawing)
	myColor = [random(255), random(255), random(255)]
}

function newDrawing(data){
	noStroke();
	fill(random(255))
	rect(data.x+5, data.y+5, 8, 8)
	fill(255,0,100);
	rect(data.x, data.y, 10, 10)
}

function mouseDragged(){
	console.log('sending: ' + mouseX + ', ' + mouseY)
	var data = {
		x: mouseX,
		y: mouseY,
		color: myColor,
		size: 20
	}
	socket.emit('mouse', data)

	noStroke();
	fill(random(255),random(255),random(255))
	rect(data.x+5, data.y+5, 8, 8)
	fill(myColor[0], myColor[1], myColor[2]);
	rect(data.x, data.y, 10, 10)
}