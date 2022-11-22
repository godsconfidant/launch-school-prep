let obj = {
  b: 2,
  a: 1, 
  c: 3,
}

let arr =  Object.keys(obj);

let upper = arr.map( (strArr) => strArr.toUpperCase());
console.log(upper);
console.log(arr);

// let uppArr = [];
// arr.forEach(function (str) {
//     uppArr.push(str.toUpperCase())
// })

// console.log(uppArr);
