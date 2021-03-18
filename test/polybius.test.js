const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
//output is a string
it("should return a string", () => {
    const actual = polybius("");
    const expected = "";
    expect(actual).to.equal(expected);
});
//returns false if number of characters excluding spaces is odd when decoding
it("should return false when decoding if number of characters excluding spaces is odd", () => {
    const actual = polybius("121 34", encode = false);
    const expected = false;
    expect(actual).to.equal(expected);
});
//maintains spaces throughout when encoding 
it("should maintain spaces throughout when encoding", () => {
    const actual = polybius("d e ");
    const expected = "41 51 ";
    expect(actual).to.equal(expected);
});
//maintains spaces throughout when decoding
it("should maintain spaces throughout when decoding", () => {
    const actual = polybius("41 51", encode = false);
    const expected = "d e";
    expect(actual).to.equal(expected);
});
//ignores capital letters 
it("should ignore capital letters", () => {
    const actual = polybius("DEFG");
    const expected = "41511222";
    expect(actual).to.equal(expected);
});
//encodes "i" and "j" as 42
it("should encode 'i' and 'j' as '42'", () => {
    const actual = polybius("ij");
    const expected = "4242";
    expect(actual).to.equal(expected);
});
//shows both "i" and "j" when decoding 42
it("shows both 'i' and 'j' when decoding 42", () => {
    const actual = polybius("42", encode = false);
    const expected = "i/j";
    expect(actual).to.equal(expected);
});
});








