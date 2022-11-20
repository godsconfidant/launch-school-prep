// Write function findIntegers that takes an arugument of an array and returns an array that contains only the intergers from the input array;

let things = [1, 'a', '1', NaN, 3.1415, -4, null, false];
let ints = [];


function forInts(arr) {
  ints = arr.filter( (num) => Number.isInteger(num))
}
forInts(things);
console.log(ints)

// function findInts(arr) {
//    arr.filter(function (num) {
//     if (Number.isInteger(num)) {
//       return ints.push(num);
//     }
//   })
// }
