const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //if there is no shift value, shift is 0, shift is less than -25 or more than 25, return false
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    //if encode is not true, shift = shift + (-1), otherwise null
    !encode ? (shift *= -1) : null;
    //have letters variable hold a string of normal alphabet
    const letters = "abcdefghijklmnopqrstuvwxyz";
    //pianoKeys use the rest operator to declare it with 3 sets of alphabet to allow shift left or right
    const pianoKeys = [...letters, ...letters, ...letters];
    //finalMessage is an empty array
    const finalMessage = [];
    //must convert original input to lowercase
    input = input.toLowerCase();
    //use a for/of loop to iterate over each character of input
    for (char of input) {
      //use indexOf on letters array to search through each each letter to find index of given character
      const charNum = letters.indexOf(char);
      //if cannot find,
      !letters.includes(char)
        ? //push char into final message
          finalMessage.push(char)
        : //otherwise, use char index + 26 + shift value as a whole index to piano keys and push it into final message
          finalMessage.push(pianoKeys[charNum + 26 + shift]);
    }
    //final message uses join to make one whole string
    return finalMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
