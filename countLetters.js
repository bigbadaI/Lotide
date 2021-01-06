const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let usedLetters = {};
  // loop through each letter
  for (const letter of str) {
    // check to make sure we are not counting whitespace
    if (letter !== ' ') {
      //if we want to count the letter it'll hit else if we haven't found that letter yet and if we have "if" will incriment it
      if (usedLetters[letter]) {
        usedLetters[letter]++;
    
      } else {
        usedLetters[letter] = 1;
      }
    }
  }
  return usedLetters;
};

console.log(countLetters('B is for bullets bitch'));