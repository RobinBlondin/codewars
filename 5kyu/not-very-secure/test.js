const alphanumeric = require("./solution.js");

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(alphanumeric("Mazinkaiser"), true)
    assert.strictEqual(alphanumeric("hello world_"), false)
    assert.strictEqual(alphanumeric("PassW0rd"), true)
    assert.strictEqual(alphanumeric("     "), false)
  });
});
