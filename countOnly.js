const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countOnly = function(allItems,itemsToCount) {
  const results = {};
  // for loop of to check and compare all items inside allItems
  for (const item of allItems) {
    //checks to see if we should be counting the item
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      //if multiple items match increment by one
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }
  return results;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

