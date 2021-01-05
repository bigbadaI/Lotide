const args = process.argv;
const reverse = function(args) {
  let reverseString = '';
  for (let i = 0; i < args.length; i++) {
    for (let letter = args[i].length - 1; letter >= 0; letter--) {
      if (letter === 0 && i < args.length - 1) {
        reverseString +=  args[i][letter] + '\n';
      } else {
        reverseString += args[i][letter];
      }
    }
  }
  return reverseString;
};
console.log(reverse(args.slice(2)));



