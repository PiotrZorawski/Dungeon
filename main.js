/* main variables */

var sizeX = 4;
var sizeY = 8;
var mapSize = sizeX * sizeY;
var tempRooms = []

/* GLOBAL functions */

/* checks if room is created */
	/* temp */
	function tempRoomIfNotDefined(x){
	if (typeof tempRooms[x] === "undefined"){
		return false;
	} else {
		return tempRooms[x].right;
	}
	}
	/* real */
	
	function roomIfNotDefined(y, x){
	if (typeof rooms[y][x] === "undefined"){
		return false;
	} else {
		return true;
	}
	}

/* random generators */	
function randomGeneretorTrueOrFalse(){
	var x = Math.floor(Math.random() * 2)
	if (x === 0){
		return false;
	} else{
		return true;
	}
}
	
function randomNumberGeneratorMaxMin(max, min){
	return Math.floor(Math.random() * (max - min + 1)) + min
}	
	
	
	

	
function makeRooms(){
	/* room objects */
	rooms = [];
	var tempRooms = [];
	var Room = function(u,d,r,l){
	this.up = u
	this.down = d
	this.right = r
	this.left = l
	this.checked = false
	this.connected = false
	this.visited = false
	}
	/* creates first row */
	for (k = 0; k < sizeX; k++){
		tempRooms.push(new Room(randomGeneretorTrueOrFalse(), false, randomGeneretorTrueOrFalse(), randomGeneretorTrueOrFalse()));
	}
	rooms.push(tempRooms);	
	
	/* makes enterence */
	
	x = randomNumberGeneratorMaxMin(sizeX - 1, 0);
	rooms[0][x].enterence = true;
	rooms[0][x].up = true;
	rooms[0][x].left = true;
	rooms[0][x].right = true;
	rooms[0][x].down = true;
	rooms[0][x].connected = true;
	rooms[0][x].visited = true;
	position[1] = x;
	updateStatsOnMove();
	currentRoom = rooms[0][x];
	if (roomIfNotDefined(0, x + 1) === true) {rooms[0][x + 1].left = true};
	if (roomIfNotDefined(0, x - 1) === true) {rooms[0][x - 1].right = true};
		
	/*creates all other rooms */
	
	for(j=1; j < sizeY; j++){
		tempRooms = [];
		
		for (i=0; i < sizeX; i++){
			
			tempRooms.push(new Room(randomGeneretorTrueOrFalse(), rooms[j-1][i].up, randomGeneretorTrueOrFalse(), tempRoomIfNotDefined(i-1)));
		}
		rooms.push(tempRooms);
		
	}
	
	/* makes borders */
	
	for (j = 0; j <  sizeY; j++){
		rooms[j][sizeX - 1].right = false		
	}
	for (i = 0; i <  sizeX; i++){
		rooms[sizeY - 2][i].up = false		
	}
	
	/* makes the lair */
	
	lairX = randomNumberGeneratorMaxMin(sizeX - 1, 0);
	rooms[sizeY - 2][lairX].lair = true;
		
	return rooms;
}

/* tests if map is correct */

function testMadeRooms(){
	
	/* COUNTING the hell out of rooms */
	
	/* counts rooms */
	var roomsNumber = sizeX * sizeY;
	
	
	function countRoomsNumber(){
		var roomsNumberCounted = 0;
		for (i = 0; i < sizeY; i++){
			for(j = 0; j < sizeX; j++){
			if (roomIfNotDefined(i, j) === true){
				roomsNumberCounted += 1;
			} else{				
			}
		}
		}
		return roomsNumberCounted;
	}
	
	/* tests if checked */
	
	function roomIfChecked(y, x){
	if (rooms[y][x].checked === false){
		return false;
	} else {
		return true;
	}
	}
	
	/* counts checked rooms */ 
	
	var roomsNumberChecked = 0;
	function countCkeckedRooms(){
		roomsNumberChecked = 0;
		for (i = 0; i < sizeY; i++){
			for(j = 0; j < sizeX; j++){
			if (roomIfChecked(i, j) === true){
				roomsNumberChecked++;
			} else{				
			}
		}
		}
		return roomsNumberChecked;
	}
	
	/* tests if connected */
	
	function roomIfConnected(y, x){
	if (rooms[y][x].connected === false){
		return false;
	} else {
		return true;
	}
	}
	
	/* counts connected rooms */ 
	
	var roomsNumberConnected = 0;
	function countConnectedRooms(){
		roomsNumberConnected = 0;
		for (i = 0; i < sizeY; i++){
			for(j = 0; j < sizeX; j++){
			if (roomIfConnected(i, j) === true){
				roomsNumberConnected++;
			} else{				
			}
		}
		}
		return roomsNumberConnected;
	}

	function makeRoomsConnected(){
		while (countConnectedRooms() != countCkeckedRooms()){
			for (i = 0; i < sizeY; i++){
				for(j = 0; j < sizeX; j++){
					if(rooms[i][j].connected === true && rooms[i][j].checked === false){
						if (rooms[i][j].up === true && typeof rooms[i][j + 1] !== "undefined"){
							rooms[i][j + 1].down = true;
							rooms[i][j + 1].connected = true;
						}
						if (rooms[i][j].down === true && typeof rooms[i][j - 1] !== "undefined"){
							rooms[i][j - 1].up = true;
							rooms[i][j - 1].connected = true;
						}
						if (rooms[i][j].left === true && typeof rooms[i - 1] !== "undefined"){
							rooms[i - 1][j].right = true;
							rooms[i - 1][j].connected = true;
						}
						if (rooms[i][j].right === true && typeof rooms[i + 1] !== "undefined"){
							rooms[i + 1][j].left = true;
							rooms[i + 1][j].connected = true;
						}
						rooms[i][j].checked = true;
					}
				}
			}				
		}
	}
	
	makeRoomsConnected()
	
	connected = countConnectedRooms()

	var t1 = sizeY - 2;
	var t2 = lairX;
	
	
	document.getElementById("roomsNumber").innerHTML = countRoomsNumber();
	
		
	
}


function makeMapGood(){
		makeRooms()
		testMadeRooms()
	
	while (rooms[sizeY - 2][lairX].connected === false || connected < sizeX * sizeY/2){
		makeRooms()
		testMadeRooms()
	}
}




