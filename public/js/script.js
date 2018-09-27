// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

// used to make validation easier
const validDrumArray = ['kicks', 'snares','hiHats','rideCymbals'];

// function to toggle a drum on or off
const toggleDrum = (drumArray, indexNumber) => {

// check for any missing and invalid arguments
if (!validDrumArray.includes(drumArray) || indexNumber >= drumArray.length || indexNumber < 0){
	return // if any are missing or strange ... time to bail!
}

// for each type of drum toggle it
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


}
