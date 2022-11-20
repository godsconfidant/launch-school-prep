function multiply(a, b) {
  return a * b;
} 


function getNum(askForNum) {
  let rlsync = require('readline-sync');
  let num = Number(rlsync.question(askForNum));
  return num;
}

let num1 = getNum('Enter a number\n');
let num2 = getNum('Enter another number\n');


console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`)

