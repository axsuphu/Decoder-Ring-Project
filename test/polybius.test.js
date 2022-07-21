// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests written by student", () => {
  describe("encoding a message", () => {
    it("should ignore capital letters when encoding", () => {
      const actual = polybius("BIG small");
      const expected = "214222 3423111313";

      expect(actual).to.equal(expected);
    });
    it("should ignore all non-letter characters", () => {
      const actual = polybius("!@#$");
      const expected = "    ";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should return false when using non-numerical characters", () => {
      const actual = polybius("425415513342131351 !", false);
      const expected = false;

      expect(actual).to.equal(expected);
    });
  });
});
