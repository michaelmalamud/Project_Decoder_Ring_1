const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if shift does not exist", () => {
        const actual = caesar("ffesd");
        expect(actual).to.be.false;
    });
    it("should return false if shift is equal to 0", () => {
        const actual = caesar("ffesd", 0);
        // const expected = false;
        // expect(actual).to.equal(expected);
        expect(actual).to.be.false;
    });
    it("should return false if shift is less than -25", () => {
        const actual = caesar("ffesd", -26);
        // const expected = false;
        // expect(actual).to.equal(expected);
        expect(actual).to.be.false;
    });
    it("should return false if shift is greater than 25", () => {
        const actual = caesar("ffesd", 26);
        // const expected = false;
        // expect(actual).to.equal(expected);
        expect(actual).to.be.false;
    });
    it("should return a properly encoded string for letter characters", () => {
        const actual = caesar("bcd", 2);
        const expected = "def";
        expect(actual).to.equal(expected);
    });
    it("should return spaces and other non-alphabetic symbols when encoding", () => {
        const actual = caesar("%$ ^&", 4);
        const expected = "%$ ^&";
        expect(actual).to.equal(expected);
    });
    it("should return spaces and other non-alphabetic symbols when decoding", () => {
        const actual = caesar("%$ ^&", 4, encode = false);
        const expected = "%$ ^&";
        expect(actual).to.equal(expected);
    });
    it("should encode letters according to updward shift in alphabet", () => {
        const actual = caesar("cde", 2);
        const expected = "efg";
        expect(actual).to.equal(expected);
    });
    it("should return letters according to downward shift in alphabet", () => {
        const actual = caesar("tuv", -3);
        const expected = "qrs";
        expect(actual).to.equal(expected);
    });
    it("should wrap back around to the beginning of the alphabet when letter encoding goes past the end of the alphabet", () => {
        const actual = caesar("abc", -3);
        const expected = "xyz";
        expect(actual).to.equal(expected);
    });
    it("should wrap back around to the end of the alphabet when letter encoding goes past the beginning of the alphabet", () => {
        const actual = caesar("xyz", 3);
        const expected = "abc";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const actual = caesar("ABC", 3);
        const expected = "def";
        expect(actual).to.equal(expected);
    });
    it("should decode strings encoded forward in the alphabet back", () => {
        const actual = caesar("khoor", 3, encode = false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    });
    it("should decode strings encoded backward in the alphabet forward", () => {
        const actual = caesar("dllayvb", -3, encode = false);
        const expected = "goodbye";
        expect(actual).to.equal(expected);
    });
  });