// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character

function last(word) {
  //let letterToRemove = word.length - 1
  return word.slice(0, -1);
}

console.log(last('Hello'));
console.log(last('chao!'))