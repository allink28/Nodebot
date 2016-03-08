var five = require('johnny-five');
var board = new five.Board();
const dgram = require('dgram');

//http://nodejs.org/api/dgram.html
//https://github.com/rwaldron/johnny-five/blob/master/docs/piezo.md

board.on('ready', function() {
	var piezo = new five.Piezo(8)
	var server = dgram.createSocket('udp4');
	server.bind(1337, 'localhost');
	
	server.on('message', function() {
		piezo.play({
			song: [ ['C4', 1/4], ['G4', 1/4] ],
			tempo: 100
		})
	})	
		
})