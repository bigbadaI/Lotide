const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  
  let trueStatement = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  let falseStatement = `🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`;
  
  if (eqArrays(actual, expected)) {
    console.log(trueStatement);
  } else {
    console.log(falseStatement);
  }
    
};


module.exports = assertArraysEqual;
