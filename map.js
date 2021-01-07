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



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;

};






const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);