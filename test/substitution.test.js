const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
//ignores capital letters 
it("should ignore capital letters when encoding", () => {
    const actual = substitution("DEFG", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "wvut";
    expect(actual).to.equal(expected);
});
it("should ignore capital letters when decoding", () => {
    const actual = substitution("SVOOL", "zyxwvutsrqponmlkjihgfedcba", encode = false);
    const expected = "hello";
    expect(actual).to.equal(expected);
});
it("should return false if alphabet input doesn't have exactly 26 characters", () => {
    const actual = substitution("defg", "zyxwvutsrqponmlkjihgfedcb");
    expect(actual).to.be.false;
});
it("should return false if alphabet input has duplicate characters", () => {
    const actual = substitution("defg", "zzzzzvvvvvwwwwwuuuuufffffh");
    expect(actual).to.be.false;
});
it("correctly translates the input phrase based on the given alphabet", () => {
    const actual = substitution("hello", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "svool"
    expect(actual).to.equal(expected);
});
it("maintains spaces when encoding", () => {
    const actual = substitution("he llo", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "sv ool"
    expect(actual).to.equal(expected);
});
it("maintains spaces when decoding", () => {
    const actual = substitution("sv ool", "zyxwvutsrqponmlkjihgfedcba", encode = false);
    const expected = "he llo"
    expect(actual).to.equal(expected);
});
it("maintains signs and symbols when decoding", () => {
    const actual = substitution("%#@#%$#%", "zyxwvutsrqponmlkjihgfedcba", encode = false);
    const expected = "%#@#%$#%"
    expect(actual).to.equal(expected);
});
it("maintains signs and symbols when encoding", () => {
    const actual = substitution("%#@#%$#%", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "%#@#%$#%"
    expect(actual).to.equal(expected);
});
})