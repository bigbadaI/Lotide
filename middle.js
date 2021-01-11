const middle = function(array1) {
  let middleArray = [];
  let workingArray = array1;
  if (array1.length <= 2) {
    return middleArray;
  } else if (array1.length % 2 !== 0) {
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


module.exports = middle;