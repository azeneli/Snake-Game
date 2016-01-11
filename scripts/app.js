/* CURRENTLY IN: scripts/app.js */

(function(){ // protect the lemmings

  // Creating the canvas	

	var $canvas = $("#js-Snake");
	// console.log( $canvas );
	$canvas.attr('width', 500);  // set width
	$canvas.attr('height', 500); // set height
	var canvas = $canvas[0]; // grab the DOM el
	// console.log( canvas );
	var context = canvas.getContext('2d'); // grab the context
	// color of rectangle
	context.fillStyle = 'red';
	// defined pos of rectangle(x,y,width, height)
	context.fillRect(5,10,30,50); 





















})();