let list1 = [1, 6, 3, 2]
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];


// Numbers as list - return highest Number;

function highestNum(numArr) {
  let high = [...numArr].sort( (a, b) => a - b)[numArr.length - 1];
  return high;
} 

let y = highestNum(list1)
console.log(y);
Sconsole.log(list1);

// console.log(Math.max(1, 6, 3, 2));
// console.log(Math.max(-1, -6, -3, -2));
// console.log(Math.max(2, 2));




// List as arrays



// function largestNum(numArr) { 
//   let numOrder = numArr.sort(function (a, b) {
//     return a - b
//   });
//   let maxNum = numOrder[numOrder.length - 1];
//     return maxNum
// }


// console.log(largestNum(list1));
// console.log(largestNum(list2));
// console.log(largestNum(list3));

