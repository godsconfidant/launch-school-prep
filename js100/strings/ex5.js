// Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?


let str1 = 'Polar Bear';
let str2 = 'Polar bear';
let str3 = 'penguin';

function isEqual(param1, param2) {

 if (param1.toLowerCase() === param2.toLowerCase()) {
  console.log('True');
 } else {
  console.log('false');
 }
}

isEqual(str1, str2)
isEqual(str1, str3)
isEqual(str2, str3)