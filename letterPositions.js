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



const letterPositions = function(str) {
  let usedLetters = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (usedLetters[str[i]]) {
        usedLetters[str[i]].push(i);
      } else {
        usedLetters[str[i]] = [str.indexOf(str[i])];
      }
    }
  }
  return usedLetters;
};


console.log(letterPositions("B is for bullets bitch"));
