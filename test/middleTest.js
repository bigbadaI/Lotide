const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


// assertArraysEqual(middle([1, 2]));
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]); // => [3, 4]
// assertArraysEqual(middle(['Alex', "cool", 'dogs', 'beer']), ["cool", 'dogs']);

describe('#middle', () => {
  it("should return empty array if array length is <= 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [2] for the array [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3,]), [2]);
  });
  it("should return [2, 3] for the array [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return error for comparing [3] to [1, 2, 3, 4, 5, 6]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5, 6]), [3]);
  });
  it("should return ['cool', 'dogs',] for the array ['Alex', 'cool', 'dogs', 'beer']", () => {
    assert.deepEqual(middle(['Alex', "cool", 'dogs', 'beer']), ["cool", 'dogs']);
  });

});









