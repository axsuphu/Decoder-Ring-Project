// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() test by student", () => {
  describe("error handling", () => {
    it("should return false when a character is repeated in the alphabet", () => {
      const actual = substitution("message", "qwertyuioplkjhgfdsazxcvbbn");
      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should work with any kind of key with unique characters", () => {
      const alphabet = ".wae#zrdxtfcygvuhbij!okm$l";
      const actual = substitution("message", alphabet);
      const expected = "y#ii.r#";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should preserve spaces", () => {
      const alphabet = ".wae#zrdxtfcygvuhbij!okm$l";
      const actual = substitution("my message", alphabet);
      const expected = "y$ y#ii.r#";

      expect(actual).to.equal(expected);
    });
  });
});
