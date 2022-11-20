let array = [3, 5, 7];

// function sumOfSquares() {
//  let multi = array.map( (nums) => nums * nums )
//   let sum = multi.reduce( (accumulator, element) =>  accumulator + element, 0)
//   return sum;
// }
// let x = (sumOfSquares(array))
// console.log(x)

function sumOfNums(functArr) {
 return functArr.reduce( (accumulator, element) => {
   return  accumulator + element * element; }, 0)
}

let z  = sumOfNums(array);
console.log(z)