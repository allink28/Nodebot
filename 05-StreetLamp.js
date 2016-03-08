var five = require('johnny-five');
var board = new five.Board();

//https://github.com/rwaldron/johnny-five/wiki/Sensor
//https://github.com/rwaldron/johnny-five/wiki/Led#api

board.on('ready', function() {
	var photoResistor = new five.Sensor('A0')
	var led = new five.Led(9)
	
	photoResistor.on("data", function() {
		var threshold = 600;
		if (this.value > threshold) {
			led.on()
		} else {
			led.off()
		}
	})
	
	
})