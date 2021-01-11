const assertEqual = require('./assertEqual')
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


module.exports = eqArrays;