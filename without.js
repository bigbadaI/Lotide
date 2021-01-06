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
const without = function(originalArray, erase) {
  let withoutArray = originalArray.filter((item) => !erase.includes(item));
  return withoutArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
