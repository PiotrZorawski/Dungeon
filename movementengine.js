/* position array */

var position = [0,0];
var moves = 0;
var roomsVisited = 1;
/* move stat updates */

function updateStatsOnMove(){
	document.getElementById("moveCounter").innerHTML = moves;
	document.getElementById("posX").innerHTML = position[1];
	document.getElementById("posY").innerHTML = position[0];
	document.getElementById("roomsVisited").innerHTML = roomsVisited;
}

/* moving methods */

function move(y,x){
	position[0] = position[0] + y;
	position[1] = position[1] + x;
	currentRoom = rooms[position[0]][position[1]];
	moves ++ ;
	roomIfWasVisitd(position[0], position[1]);
	makeMoveButtonsActive(); 
	updateStatsOnMove();
}

function makeMoveButtonsActive(){
	if (currentRoom.up === true){
	document.getElementById("Button1").onclick = function(){move(1, 0);}; //UP
	document.getElementById("Button1").className += " fadeIn"; //FadeIn +
	document.getElementById("Button1").className.replace(/\bfadeOut\b/,''); // FadeOut -
	document.getElementById("Button1").disabled = false;
	} else {
	document.getElementById("Button1").onclick = "";
	document.getElementById("Button1").className += " fadeOut"; // FadeOut +
	document.getElementById("Button1").className.replace(/\bfadeIn\b/,''); // FadeIn -
	document.getElementById("Button1").disabled = true;
	}
	if (currentRoom.down === true){
	document.getElementById("Button4").onclick = function(){move(-1, 0);}; //DOWN
	document.getElementById("Button4").className += " fadeIn"; //FadeIn +
	document.getElementById("Button4").className.replace(/\bfadeOut\b/,''); // FadeOut -
	document.getElementById("Button4").disabled = false;
	} else {
	document.getElementById("Button4").onclick = "";
	document.getElementById("Button4").className += " fadeOut"; // FadeOut +
	document.getElementById("Button4").className.replace(/\bfadeIn\b/,''); // FadeIn -
	document.getElementById("Button4").disabled = true;
	}
	if (currentRoom.left === true){
	document.getElementById("Button2").onclick = function(){move(0, -1);}; //LEFT
	document.getElementById("Button2").className += " fadeIn"; //FadeIn +
	document.getElementById("Button2").className.replace(/\bfadeOut\b/,''); // FadeOut -
	document.getElementById("Button2").disabled = false;
	} else {
	document.getElementById("Button2").onclick = "";
	document.getElementById("Button2").className += " fadeOut"; // FadeOut +
	document.getElementById("Button2").className.replace(/\bfadeIn\b/,''); // FadeIn -
	document.getElementById("Button2").disabled = true;
	}
	if (currentRoom.right === true){
	document.getElementById("Button3").onclick = function(){move(0, 1);}; //RIGHT
	document.getElementById("Button3").className += " fadeIn"; //FadeIn +
	document.getElementById("Button3").className.replace(/\bfadeOut\b/,''); // FadeOut -
	document.getElementById("Button3").disabled = false;
	} else {
	document.getElementById("Button3").onclick = "";
	document.getElementById("Button3").className += " fadeOut"; // FadeOut +
	document.getElementById("Button3").className.replace(/\bfadeIn\b/,''); // FadeIn -
	document.getElementById("Button3").disabled = true;
	}
}

/* document.getElementById("Button1").onclick = function(){move(1, 0);}; // UP
document.getElementById("Button1").onclick = function(){move(-1, 0);}; // DOWN
document.getElementById("Button1").onclick = function(){move(0, -1);}; // LEFT
document.getElementById("Button1").onclick = function(){move(0, 1);}; // RIGHT
document.getElementById("Button1").className += "fadeOut"; // FadeOut +
document.getElementById("MyID").className.replace(/\bfadeIn\b/,''); // FadeIn -
document.getElementById("Button1").className = "fadeIn"; //FadeIn +
document.getElementById("MyID").className.replace(/\bFadeOut\b/,''); // FadeOut -
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").disabled = false; */

/* room visited decision */

function roomVisitedTrue(){
	
}

function roomVisitedTrue(){
	
}

/* check visitation */

function roomIfWasVisitd(y,x){
	if (rooms[y][x].visited === true){
		return roomVisitedTrue();
	} else {
		rooms[y][x].visited = true;
		roomsVisited++;
		roomVisitedTrue();
	}
}
















