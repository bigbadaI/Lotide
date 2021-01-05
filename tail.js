const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(actualArr) {
  const returnArr = [];
  if (actualArr.length < 2) {
    return returnArr;
  } else {
    for (let i = 1; i < actualArr.length; i++) {
      returnArr[i - 1] = actualArr[i];
    }
  }
  return returnArr;
};
const words = ["Yo Yo", "LightHouse","Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(words);