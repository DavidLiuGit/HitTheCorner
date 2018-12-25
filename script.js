/**
 * The main function. Here, we get the canvas' context and start drawing
 */
function main() {
	var canvas = document.getElementById("screenCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0, 0, 150, 75);
}

main();