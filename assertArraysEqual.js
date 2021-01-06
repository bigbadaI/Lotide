const assertArraysEqual = function(actual, expected) {
  let result = '';
  actual.forEach((example1) => expected.forEach(example2 => {
     
    if (example1 !== example2) {
      result = `🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`;
    } else {
      result = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
    }
  
  }));
  console.log(result);
};

/*assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false*/
