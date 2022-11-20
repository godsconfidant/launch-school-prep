let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

//   function oddNums(nums) {
//  let red = nums.filter( (filtered) => filtered.length % 2 !== 0);
//  let mapped = red.map( (nums)  => nums.length )
// return mapped;
// }
 
// console.log(oddNums(arr))

function numsOdd(arrStr) {
 //let mapped = arrStr.map( (long) => long.length );
 //let filtered = mapped.filter( (odds) => odds % 2 !== 0);
 return arrStr.map( (long) => long.length ).filter((odds) => odds % 2 !== 0);
}
console.log(numsOdd(arr));