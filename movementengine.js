/* position array */

var position = [0,0];
var moves = 0;

/* move stat updates */

function updateStatsOnMove(){
	document.getElementById("moveCounter").innerHTML = moves;
	document.getElementById("posX").innerHTML = position[1];
	document.getElementById("posY").innerHTML = position[0];
}

/* moving methods */

function moveUp(){
	position[0]++ ;
	moves ++ ;
	updateStatsOnMove();
}
function moveDown(){
	position[0]-- ;
	moves ++ ;
	updateStatsOnMove();
}
function moveLeft(){
	position[1]-- ;
	moves ++ ;
	updateStatsOnMove();
}
function moveRight(){
	position[1]++ ;
	moves ++ ;
	updateStatsOnMove();
}