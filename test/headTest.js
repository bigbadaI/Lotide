const head = require('../head');
const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5,7,8]), 2);
// assertEqual(head([]), 5);

describe("#head", () => {

  it("return 5 for [5,6,7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("return an error if items do not match like 2 for [5, 7, 8]", () => {
    assert.notStrictEqual(head([5, 7, 8]), 2);
  });

  it("returns 'Hello' for ['Hello', Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 1 for [1, 2, 3,]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);

  });
});