/**
 * The main function. Here, we get the canvas' context and start drawing.  
 * This function also contains the default values
 */
function main() {
	drawLogo ( 1, 1 );



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
	var canvas = document.getElementById("screenCanvas");
	var ctx = canvas.getContext("2d");

	// set the fill color
	ctx.fillStyle = fill;

	// draw the rectangle/square
	ctx.fillRect ( x, y, x+width, y+height );
}



// invoke main function
main();