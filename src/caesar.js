// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    !encode ? (shift *= -1) : null;

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const pianoKeys = [...letters, ...letters, ...letters];
    const finalMessage = [];

    input = input.toLowerCase();

    for (char of input) {
      const charNum = letters.indexOf(char);
      !letters.includes(char)
        ? finalMessage.push(char)
        : finalMessage.push(pianoKeys[charNum + 26 + shift]);
    }
    return finalMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
