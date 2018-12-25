/**
 * The main function. Here, we get the canvas' context and start drawing.  
 * This function also contains the default values
 * @param {boolean} sleep Whether or not to sleep; set true for animation
 */
async function main (sleep=true) {

	// vars
	let counter=0;
	let x=1, y=1;		// x and y coordinates; start at (1,1)
	let w=64, h=64;		// width and height
	let dX=1, dY=1;		// next frame delta

	// infinite loop; increment counter each time
	for ( counter=0; counter<99999; counter++) {
		// draw the logo
		drawLogo ( x, y, w, h );

		// determine whether we need to change direction
		let delta = changeDirection ( x, y, w, h );
		// determine whether a corner was hit
		if ( delta['dx2'] < 0 && delta['dy2'] < 0 ){	// if both dx2 and dy2 are negative, then we hit a corner!
			console.log ( "We hit a corner! Frame #", counter );
		} else if ( delta['dx2'] < 0 || delta['dy2'] < 0 ) {
			console.log ( "Hit a side..." );
		}
		// reverse direction if needed
		dX *= delta['dx2'];
		dY *= delta['dy2'];
		// update the position for the next frame
		x += dX;
		y += dY;

		// every 50th frame, print stats
		// if ( !(counter % 50) )
		// 	console.log ( x, y, dX, dY );

		// if the sleep argument is truthy
		// sleep for 16 milliseconds (to make the animation hopefully 60 fps)
		if (sleep)
			await delay(16);
	}

}



/**
 * Determine whether a change in direction is needed
 * @param {*} dx delta X
 * @param {*} dy delta Y
 * @param {*} x current X
 * @param {*} y current Y
 * @param {*} w width
 * @param {*} h height
 * @return a set of direction delta multipliers; 
 */
function changeDirection ( x, y, w, h ) {
	// return values contain the next frame's coordinates: xNext, yNext
	let ret = { 'dx2': 1, 'dy2': 1 };

	// determine the canvas' width and height
	let canvas = document.getElementById("screenCanvas");
	let xMax = canvas.width, yMax = canvas.height;

	// calculate dx:
	// if ( x <= 0 ) or ( x+width >= xMax), reverse the direction
	if ( x <= 0 || x+w >= xMax ) {
		ret['dx2'] = -1;			// reverse x-direction
	}

	// calculate dy
	if ( y <= 0 || y+h >= yMax ) {
		ret['dy2'] = -1;			// reverse y-direction
	}

	return ret;
}


/**
 * Draw the logo (a rectangle/square) on the canvas
 * @param {*} x top-left x coordinate
 * @param {*} y top-left y coordinate
 * @param {*} width width
 * @param {*} height height
 * @param {*} fill color of the rectangle
 */
function drawLogo ( x, y, width=64, height=64, fill="#FF0000" ) {
	// get the canvas and context
	let canvas = document.getElementById("screenCanvas");
	let ctx = canvas.getContext("2d");

	// clear the canvas
	canvas.width = canvas.width;

	// set the fill color
	ctx.fillStyle = fill;

	// draw the rectangle/square
	ctx.fillRect ( x, y, width, height );

	// determine if the direction needs to be changed
}



/**
 * Sleep for the specified number of milliseconds
 * @param {number} ms 
 */
function delay(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(resolve, ms);
	});
}


// invoke main function
main();
// main(false);