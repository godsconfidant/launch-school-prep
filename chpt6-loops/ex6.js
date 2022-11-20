//  function fact(num) {
//   let accumulator = 1;
//   for (let counter = num; counter > 0; counter -= 1) {
//     accumulator = accumulator * counter;
//   } return accumulator;
//  }

//  console.log(fact(5));

function fact(num) {
  if (num === 1) {
    return num
  } 
    return num * fact(num - 1)
  
}
console.log(fact(5));