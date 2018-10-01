// Use this presets array inside your presetHandler
const presets = require('./presets');
const validRequestTypes = ['GET','PUT']
const NOTFOUND = 404;
const BADREQUEST = 400;
const OK = 200;

// Complete this function:
const presetHandler = (requestType,presetIndex = 0,newPresetArray = []) => {

  // array to return to the client
  let returnArray = [];                 // initialise a blank array

  // check for an invalid presetIndex from client
  if (presetIndex > presets.length || presetIndex < 0) {

    returnArray[0] = NOTFOUND; // set the return code to NOTFOUND

    return returnArray; // not valid so get out asap

  // check if requestType is invalid
  } else if (!validRequestTypes.includes(requestType)) {

     returnArray[0] = BADREQUEST;  // set the return code to BADREQUEST

     return returnArray;    // not valid so get out asap

  } else {

      // client request must be valid so process it here
      switch (requestType) {
        case 'GET':
          returnArray[0] = OK;
          returnArray[1] = presets[presetIndex];
          return returnArray;
        case 'PUT':
          if (savePreset(presetIndex,newPresetArray)) {
              returnArray[0] = OK;
              returnArray[1] = newPresetArray;
              return returnArray;
          } else {
              // something went wrong, tell the console about it!
              console.log(`Error saving ${newPresetArray} to element ${presetIndex}`);

          }
      }
  }
};

//helper function to save the newPresetArray to the presets in the correct index
const savePreset = (presetIndex,newPresetArray) => {

  // save
  return presets[presetIndex] = newPresetArray

}

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
