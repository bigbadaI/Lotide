const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  let result = '';
  arr1.forEach((example1) => arr2.forEach(example2 => {
    if (example1.length > 1 && example2.length) {
    } else if (example1 !== example2) {
      result = false;
    } else {
      result = true;
    }
  }));
  console.log(result);
  //return true outcome for the assertEqual function
  return arr1, arr2 = result
};
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS