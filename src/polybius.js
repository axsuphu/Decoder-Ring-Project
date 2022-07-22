const polybiusModule = (function () {
  // one object for decoding key & one for encoding key
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
    // ignore capital letters by converting original input to lowercase
    input = input.toLowerCase();
    //splitString will be given a value depending on what we do later in the code
    let splitString;
    // store the "encoded" key object as our starting key when true (true is default already)
    let key = encodeKey;

    if (encode) {
      // when encoding, split input into array and store it in splitString
      splitString = input.split("");
    } else {
      // store "decoded" key object as our key when false
      key = decodeKey;
      //also, if there is a space, the characters will be seperated by a comma ie: [ '2345', '23513434112251' ]
      splitString = input.split(" ");
      // when decoding, the number of characters in the string excluding spaces should be even. This will either return a 1 or a 0. 0 means it is an even number and it is false, 1 means that it is an odd number and it is true. "acc" is not holding any spaces
      const odd = splitString.reduce((acc, array) => acc + array.length, 0) % 2;
      //if odd is true, return false
      if (odd) return false;

      splitString = splitString
        //use .map on splitString to iterate and return a string
        .map((section) => {
          //for each section, split, and then reduce. Reduce has 4 parameters (acc is previous value, space is current value, index is index, and collect will be the array that is traversed)
          return section.split("").reduce((acc, space, index, collect) => {
            //i can utilize these parameters in reduce when iterating through array
            // if space(current value) is an actual space,
            if (space === " ") {
              // if true - push the space into acc
              acc.push(" "); // this is maintaining the spaces
              //otherwise, if that current number is not an odd index,
            } else if (!(index % 2)) {
              //add the string "space" to the string in collect at the index. this will make a string that has 2 digits and be pushed into acc
              acc.push(space + collect[index + 1]);
            }
            //return acc. acc is now an array of string numbers, seperated by commas
            return acc;
            //[] indicated that we want this reduced acc in an array
          }, []);
        })
        //after mapping, there will be 2 arrays in an array so we want to use reduce agaian to concatonate a space and "b" with "a"
        .reduce((a, b) => a.concat(" ", b));
    }
    //this is where we finally utilize the encodeKey and decodeKey object.
    //use map on string. for each iteration, find the value of key[space](this uses bracket notation to access the object). OR a space. use .join to create just one string
    let final = splitString.map((space) => key[space] || " ").join("");
    //final is one string
    return final;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
