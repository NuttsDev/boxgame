const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// init objects
let player = new Obj(0, 0, 25, 25, 'red', true);
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
