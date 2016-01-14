/* CURRENTLY IN: scripts/app.js */
/* Revealing Module Pattern Example */

var __JS__SNAKE__ = {};

__JS__SNAKE__.game = (function(){

	var context,
		xPos = 0,
		yPos = 0,
		frameLen = 	300; // new frame every sec

	function init(){
		var $canvas = $("#js-Snake");
		console.log( $canvas );
		$canvas.attr('width', 500);  // set width
		$canvas.attr('height', 500); // set height
		var canvas = $canvas[0]; // grab the DOM el
		console.log( canvas );
		context = canvas.getContext('2d'); // grab the context
		gameLoop();
	}

	// called at a fixed interval to update the state of the game and display the changes
	function gameLoop(){
		// update state
		xPos += 2;
		yPos += 4;

		// update display
		context.clearRect(0,0,500,500);
		context.fillStyle = '#fe57a1'; // set fill style of context 
		context.fillRect(xPos, yPos, 30, 50); // fill rec, (x,y, width, height) -- in this case moving rectangle

		// pass game loop function & wait for it to be called again
		setTimeout(gameLoop, frameLen); 
	}

	return {
		init: init
	};

})();

__JS__SNAKE__.game.init();

