// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//Requirements:
// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// All the characters in the alphabet parameter must be unique. Otherwise, it should return false.

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //if alphabet parameter does not exist or alphabet length is not equal to 26, return false
    if (!alphabet || alphabet.length != 26) return false;
    //loop through each character/letter in alphabet, return false if that char/letter is repeated
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) != alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }

    //declare new variables here to make globally accessible for both if statements below
    //the varaibles now hold arrays that contain each letter from the string
    let newInput = input.split("");
    let normAlpha = "abcdefghijklmnopqrstuvwxyz ";
    let normAlphaArr = normAlpha.split("");
    alphabet += " "; //alphabet = alphabet + " " ; this adds a space inside alphabet. We wrote it this way bc we don't know what the alphabet input is going to be each time
    let alphabetArr = alphabet.split(""); // .push works too bc it would have pushed a space into an array as well

    //if we are turning  'thinkful' to 'jrufscpw'
    if (encode === true) {
      //use .map to make a new array of results
      // .map will interate through each letter and .indexOf will use normAlpha to find index of that current iterated letter
      let inputIndices = newInput.map((letter) => normAlphaArr.indexOf(letter));
      //inputIndices now contain an array of numbers that represents the index of each letter (relative to the normal a-z alphabet)
      //use encodedArr to hold results from inputIndices.map
      //this will interate through each index and return the letter from the same index in alphabetArr (the given 26-character parameter)
      let encodedArr = inputIndices.map((index) => alphabetArr[index]);
      //this honestly can be a one liner: return newInput.map((letter) => normAlphaArr.indexOf(letter)).map((index) => alphabetArr[index]).join("");
      //but i kept it like this bc sometimes I get confused with a big ol' one liner
      //take these indexes and compare it to alphabetArr

      //this will return the encoded Arr as a whole word instead of seperate letters in an array
      return encodedArr.join("");
    }

    //if we are turning 'jrufscpw' to 'thinkful'
    if (encode === false) {
      let inputIndices = newInput.map((letter) => alphabetArr.indexOf(letter));
      let decodedArr = inputIndices.map((index) => normAlphaArr[index]);

      return decodedArr.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
