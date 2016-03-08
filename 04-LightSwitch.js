var five = require('johnny-five');
var board = new five.Board();

//https://github.com/rwaldron/johnny-five/wiki/Button#usage
//https://github.com/rwaldron/johnny-five/wiki/Led#api

board.on('ready', function() {
	var button = new five.Button(5)
	var led = new five.Led(9)
	
	button.on("press", function() {
		led.toggle()
	})
})