const tail = function(actualArr) {
  const returnArr = [];
  if (actualArr.length < 2) {
    return returnArr;
  } else {
    for (let i = 1; i < actualArr.length; i++) {
      returnArr[i - 1] = actualArr[i];
    }
  }
  return returnArr;
};

module.exports = tail;