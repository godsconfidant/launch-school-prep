// Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

function isBlank(str) {
  let regex = /\s/;
  if (str.length === 0 || regex.test(str) ){
    return true;
  } else {
    return false;
  }
}

function slimTrim(str) {
  return str.trim().length === 0;
}

console.log(slimTrim('          '))


// console.log(isBlank(""));
// console.log(isBlank(" "));
// console.log(isBlank("str"));