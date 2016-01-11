/* CURRENTLY IN: scripts/app.js */

var __JS__SNAKE__ = {};

__JS__SNAKE__.game = (function(){

	var context,
		xPos = 0,
		yPos = 0,
		frameLen = 	300; // new frame every sec

	function init(){
		var $canvas = $("#js-Snake");
		$canvas.attr('width', 500);  // set width
		$canvas.attr('height', 500); // set height
		var canvas = $canvas[0]; // grab the DOM el
		context = canvas.getContext('2d'); // grab the context
		gameLoop();
	}

	// called at a fixed interval to update the state of the game and display the changes
	function gameLoop(){
		xPos += 2;
		yPos += 4;
		context.clearRect(0,0,500,500);
		context.fillStyle = '#fe57a1';
		context.fillRect(xPos, yPos, 30, 50); // moving rect
		setTimeout(gameLoop, frameLen); // reset
	}

	return {
		init: init
	};

})();

__JS__SNAKE__.game.init();

