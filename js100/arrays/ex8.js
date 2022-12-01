// How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

function filter(input) {
  //Is input an array?
  console.log(Array.isArray(input))
}

let test = [1, 2, 3];
let test2 = 'This is test number 2'

console.log(Array.isArray(test))
console.log(Array.isArray(test2))

filter(test);
filter(test2);