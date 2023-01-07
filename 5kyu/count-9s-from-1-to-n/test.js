const  number9 = require("./solution.js");

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(number9(1), 0, 'Nein!') 
Test.assertEquals(number9(9), 1, 'Nein!')
Test.assertEquals(number9(100), 20, 'Nein!')
Test.assertEquals(number9(565754),275645, 'Nein!')
Test.assertEquals(number9(10000000000),10000000000, 'Nein!')
Test.assertEquals(number9(3455461945695),4094863113331, 'Nein!')
  });
});


