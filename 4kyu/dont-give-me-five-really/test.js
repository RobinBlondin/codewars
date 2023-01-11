const dontGiveMeFive = require("./solution.js");

const chai = require("chai");
const assert = chai.assert;

describe("Example Tests", function(){
  it("small numbers", function(){
    assert.strictEqual(dontGiveMeFive(-17, 9), 24);
    assert.strictEqual(dontGiveMeFive(1, 9), 8);
    assert.strictEqual(dontGiveMeFive(4, 17), 12);
    assert.strictEqual(dontGiveMeFive(-17, -4), 12);
  });
  it("larger numbers", function(){
    assert.strictEqual(dontGiveMeFive(984, 4304), 2449);
    assert.strictEqual(dontGiveMeFive(2313, 2317), 4);
    assert.strictEqual(dontGiveMeFive(-4045, 2575), 4819);
    assert.strictEqual(dontGiveMeFive(-4436, -1429), 2194);
  }); 3302
  it("huge numbers", function(){
    assert.strictEqual(dontGiveMeFive(40076, 215151422963990), 49707598394353);
    assert.strictEqual(dontGiveMeFive(-206981731, 223575697903165), 51841599744277);
    assert.strictEqual(dontGiveMeFive(-249022878360451, -249022878219653), 79380);    
    assert.strictEqual(dontGiveMeFive(-90000000000000, 900000000000000), 203349266266321);
  });
  it("edge cases", function(){
    assert.strictEqual(dontGiveMeFive(0, 1), 2);
    assert.strictEqual(dontGiveMeFive(5, 15), 9);
    assert.strictEqual(dontGiveMeFive(-5, 4), 9);
    assert.strictEqual(dontGiveMeFive(51, 60), 1);
  });
});

