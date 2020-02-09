const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
// init objects
let player = new Obj(0, 0, 5, 5, 'red', true);
function initCanvas() {
	
}


function updateFrame() {
	// clear frame
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// create rectangle
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x, player.y, player.width, player.height);
	
}

function Obj(x, y, width, height, color, isGravitated) {
	this.x = x;
	this.y = x;
	this.width = width;
	this.height = height;
	this.color = color;
	this.isGravitated = isGravitated;
}
setInterval(function() {
	updateFrame();
}, 0);


// movement handler

document.addEventListener('keydown', getKey);
document.addEventListener('keyup', getKeyUp);

let wPressed = false;
let aPressed = false;
let dPressed = false;

function getKey(e) {
	if(e.key == "w") {
		wPressed = true;
	} else if (e.key == "a") {
		aPressed = true;
	} else if (e.key == "d") {
		dPressed = true;
	}
}

function getKeyUp(e) {
	if(e.key == "w") {
		wPressed = false;
	} else if (e.key == "a") {
		aPressed = false;
	} else if (e.key == "d") {
		dPressed = false;
	}
}

setInterval(function() {
	if(wPressed) { player.y -= 0.1; }
	if(aPressed) { player.x -= 0.1; }
	if(dPressed) { player.x += 0.1; }
}, 0);
