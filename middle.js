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
const eqArrays = function(arr1, arr2) {
  let result = '';
  arr1.forEach((example1) => arr2.forEach(example2 => {
    if (example1 !== example2) {
      result = false;
    } else {
      result = true;
    }
  }));
  console.log(result);
  //return true outcome for the assertEqual function
  return arr1, arr2 = result;
};

const middle = function (array1) {
  let middleArray = [];
  let workingArray = array1;
  if (array1.length % 2 !== 0) {
    let middleNum = array1.length / 2 - 0.5;
    middleArray.push(workingArray[middleNum]);
  } else {
    let middleNum1 = array1.length / 2 - 1;
    let middleNum2 = array1.length / 2;
    middleArray.push(workingArray[middleNum1]);
    middleArray.push(workingArray[middleNum2]);
  }
  return middleArray;
};
/*assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]); // => [3, 4]*/