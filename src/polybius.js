// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
// When encoding, your output should still be a string.
// When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.

// Examples:
// polybius("thinkful"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'

// polybius("3251131343 4253241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // one object for decoding key && one for encoding key
  const decodeKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  const encodeKey = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    // your solution code here

    // Capital letters can be ignored.
    input = input.toLowerCase();
    let splitString;

    // store the "encoded" key object as out starting key when true
    let key = encodeKey;

    if (encode) {
      // 1. When encoding, your output should still be a string.
      splitString = input.split("");
    } else {
      key = decodeKey; // store decoded key object as our key when false
      splitString = input.split(" ");

      // 2. When decoding, the number of characters in the string excluding spaces should be even.
      const odd = splitString.reduce((acc, array) => acc + array.length, 0) % 2;
      if (odd) return false; // Otherwise, return false bc it's odd

      splitString = splitString
        .map((section) => {
          return section.split("").reduce((acc, space, index, collect) => {
            //i can utilize these parameters in reduce when iterating through array
            //console.log("COLLECT", collect);
            //console.log("ACC", acc);
            //console.log("space", space);
            //console.log("INDEX", index);
            // maintain spaces throughout
            if (space === " ") {
              // if true - push the space
              //console.log("space", space);
              acc.push(" "); // this is maintaining the spaces
            } else if (!(index % 2)) {
              acc.push(space + collect[index + 1]);
              console.log("ACC", acc);
            }
            return acc;
          }, []);
        })
        .reduce((a, b) => a.concat(" ", b));
    }

    let final = splitString.map((space) => key[space] || " ").join("");
    //console.log("line 121 final", final);
    return final;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
