//assertObjectsFunction runs to given objects through eqObjects (and eqArrays if needed) to decide if the objects equal each other
//If the two objects are equal console log a pass statement showing the objects written side by side and also if !equal with a fail statement



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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === "object") {
      if (!eqObjects(object1[key],object2[key])) {
        return false;
      }

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let trueStatement = `👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let falseStatement = `🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)) {
    console.log(trueStatement);
  } else {
    console.log(falseStatement);
  }
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