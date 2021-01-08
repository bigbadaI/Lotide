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




const takeUntil = function(array, callback) {
  let results = [];
  array.forEach(element => {
    //console.log(element);
    if (callback(element)) {
      console.log(element);
      let stop = (array.indexOf(element));
      if (array.indexOf(element) <= stop) {
        results.push(element);
      }
    }
  });
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

