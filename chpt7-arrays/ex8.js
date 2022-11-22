let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddsLengths(strArr) {
  let ans = [];
  return strArr.reduce((accumulator, element) => {
    let length = element.length; 
    if (length % 2 !== 0) {
         ans.push(length);
     } return ans;
  }, 0); return ans;
}

console.log(oddsLengths(arr)); // => [1, 5, 3];

// function accLength(getArr) {
//   return getArr.reduce( (accumulator, element) => {
//     let length = element.length;
//     if (length % 2 !== 0) {
//       accumulator.push(length);
//     } return accumulator

//   }, []);
// }

// console.log(accLength(arr))