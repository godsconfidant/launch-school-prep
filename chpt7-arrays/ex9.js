// Check the arrays to see if any include the value '3'; If so return 'true', if not return 'false'

let num1 = [1, 3, 5, 7, 9, 11];
let num2 = [];
let num3 = [2, 4, 6, 8];


function isIncluded(arr, num) {
 if (arr.includes(num)) {
  console.log('true');
 } else {
  console.log('false')
  }
}
isIncluded(num2, 4)