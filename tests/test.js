
const { expect } = require("chai");
const { volumebox } = require("../volumebox.js");

describe("volumebox", function () {
  it("volumebox Should throw an error if given an input that is not a string", () => {
    const badInput = volumebox.bind(null, 9999);
    const goodInput = volumebox.bind(null, "Yo!");
    expect(badInput.loud).to.throw();
    expect(goodInput.quiet).to.not.throw();
  });

  it("volumebox Should return a string", () => {
    const outputTypeCheck = volumebox("hey world");
    expect(typeof outputTypeCheck).to.equal("string");
  });

  it("volumebox.loud Should return a string that is call caps", () => {
    const lowToHigh = volumebox.loud("whatup homie?!");
    const highToHigh = volumebox.loud("ay, nothin' much! whats good with you??");
    const loudCheck = function (string){
      errorFlag = false;
      for(letter in string){
        if(letter !== letter.toUpperCase()) errorFlag = true;
        return errorFlag;
      }
      return errorFlag;
    }
    expect(loudCheck(lowToHigh)).to.equal(false);
    expect(loudCheck(lowToHigh)).to.not.equal(true);
  });

  it("volumebox.quiet Should return a string that is call lowercased", () => {
    const highToLow = volumebox.quiet("whatup homie?!");
    const lowToLow = volumebox.quiet("ay, nothin' much! whats good with you??");
    const lowCheck = function (string){
      errorFlag = false;
      for(letter in string){
        if(letter !== letter.tolowerCase()) errorFlag = true;
        return errorFlag;
      }
      return errorFlag;
    }
    expect(lowCheck(highToLow)).to.equal(false);
    expect(lowCheck(lowToLow)).to.not.equal(true);
  });
});