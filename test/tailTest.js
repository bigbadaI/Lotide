const assert = require('chai').assert;
const tail = require('../tail');


// const words = ["Yo Yo", "back", "Dog"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(words);

describe("#tail", () => {

  it("return [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("return an error if items do not match like 2 for [5, 7, 8]", () => {
    assert.notDeepEqual(tail([5, 7, 8]), [2]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});