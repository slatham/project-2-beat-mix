// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

// array of valid drum names - used to make validation easier
const validDrumArray = ['kicks', 'snares','hiHats','rideCymbals'];

// function to toggle a drum on or off
const toggleDrum = (drumArray, indexNumber) => {

// check for any missing and invalid arguments
if (!validDrumArray.includes(drumArray) || indexNumber >= kicks.length || indexNumber < 0){
	return // if any are missing or strange ... time to bail!
}

// for each type of drum, toggle it
switch (drumArray){
	case 'kicks':
		kicks[indexNumber] = !kicks[indexNumber];
		break;
	case 'snares':
		snares[indexNumber] = !snares[indexNumber];
		break;
	case 'hiHats':
		hiHats[indexNumber] = !hiHats[indexNumber];
		break;
	case 'rideCymbals':
		rideCymbals[indexNumber] = !rideCymbals[indexNumber];
		break;
}
}

// function to clear the whole array for a particular drum
const clear = drumArray => {
	// check for a valid array passed
	if (!validDrumArray.includes(drumArray)){
		return
	}
	// for each drum array loop through and set each element to false
	switch (drumArray){
	case 'kicks':
		kicks.forEach((element,index) => {
			kicks[index] = false;
		});
		break;
	case 'snares':
		snares.forEach((element,index) => {
			snares[index] = false;
		});
		break;
	case 'hiHats':
		hiHats.forEach((element,index) => {
			hiHats[index] = false;
		});
		break;
	case 'rideCymbals':
		rideCymbals.forEach((element,index) => {
			rideCymbals[index] = false;
		});
		break;
}
}

// function to invert a whole drum array
const invert = drumArray => {
	// check for valid drumArray
	if (!validDrumArray.includes(drumArray)){
		return  // if not, get out
	}


	switch (drumArray){
		case 'kicks':
			kicks.forEach((element,index) => {
				kicks[index] = !kicks[index];
			});
		break;
		case 'snares':
			snares.forEach((element,index) => {
				snares[index] = !snares[index];
			});
		break;
		case 'hiHats':
			hiHats.forEach((element,index) => {
				hiHats[index] = !hiHats[index];
			});
		break;
		case 'rideCymbals':
			rideCymbals.forEach((element,index) => {
				rideCymbals[index] = !rideCymbals[index];
			});
		break;
	}
}


// function to get the neighbor pads
const getNeighborPads = (x,y,size) => {

// check for valid arguments
if (x > size - 1 || y > size - 1 || x < 0 || y < 0) {
	// if invalid, return a blank array
	return [];
}

// calculate each neighbor coordinate
let nLeft = [x-1, y];		// left would be x - 1
let nRight = [x +1, y]; // right would be x +1
let nTop = [x,y+1];			// above would be y +1
let nBottom = [x,y-1];	// below would be y -1

// array to hold all possible neighbors
let allNeighbors = [nLeft,nRight,nTop,nBottom];

// create a new array of coordinates by filtering out invalid x and y values
let neighbors = allNeighbors.filter(coordArray => {

	 return isValidNeighbor(coordArray,size);

});

// return the neighbor array
return neighbors;

};

// helper function to check for valid values for x and y
const isValidNeighbor = (coordArray,size) => {
		// a neighbor can not be less than zero or greater than the
		// size of the synth pad - minus 1 becuase zero indexed
		xValue = coordArray[0] >= 0 && coordArray[0] <= size -1;
		yValue = coordArray[1] >= 0 && coordArray[1] <= size -1;

		//if both are true, return true
		return xValue && yValue;

}
