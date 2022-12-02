// Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below

function greeting() {
  return 'Good Morning';
};

function recpt() {
  return 'Launch School';
}

function greet() {
  return `${greeting()}, ${recpt()}!`;
}

console.log(greet())