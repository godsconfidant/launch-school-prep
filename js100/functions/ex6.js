// Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

function compareByLength(str1, str2) {
  let result = ''
  if (str1.length > str2.length) {
    result = 1 + ' str 2 is shorter';
  } else if (str1.length < str2.length) {
    result = -1 + ' str 1 is shorter';
  } else {
    result = 0 + ' same length';
  } return result;
}


let x = compareByLength('pasll', 'prel');
console.log(x)