const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  array.shift();
  return array;
};
const words = ['hey'];
tail(words);
assertEqual(words.length, 3);