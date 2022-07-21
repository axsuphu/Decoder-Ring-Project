// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar() test written by student", () => {
  describe("error handling", () => {
    it("should return false if the shift value is not present", () => {
      const actual = caesar("test");
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
  describe("encoding a message", () => {
    it("should return the message in all lowercase", () => {
      const actual = caesar("WAKE UP", 3);
      const expected = "zdnh xs";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should maintain non-letter characters", () => {
      const actual = caesar("grrgoh@ ph!", -3);
      const expected = "doodle@ me!";
      expect(actual).to.equal(expected);
    });
  });
});
