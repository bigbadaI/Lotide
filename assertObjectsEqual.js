const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let errorCount = 0;
  let trueStatement = `👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let falseStatement = `🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    errorCount += 1;
  }

  for (const key in actual) {
    if (Array.isArray(actual[key])) {
      if (!eqArrays(actual[key],expected[key])) {
        errorCount += 1;
      }
    } else if (typeof actual[key] === "object") {
      if (!assertObjectsEqual(actual[key],expected[key])) {
        errorCount += 1;
      }

    } else if (actual[key] !== expected[key]) {
      errorCount += 1;
    
    
    }
  }
  if (errorCount > 0) {
    console.log(falseStatement);
  } else {
    console.log(trueStatement);
  }

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
  return arr1, arr2 = result;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false