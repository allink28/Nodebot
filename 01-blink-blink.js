var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {
	var light = new five.Led(13);
	light.strobe(1000);
});