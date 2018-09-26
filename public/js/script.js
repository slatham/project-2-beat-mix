// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

// function definitions
const toggleDrum = (drumArray, indexNumber) => {
debugger;

// check for any missing and invalid arguments
if (!drumArray || indexNumber >= drumArray.length || indexNumber < 0){
	return // if any are missing or strange ... time to bail!
}


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

const clear = drumArray => {

}

const invert = drumArray => {

  
}
