// Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:

function greet(greeting = 'Hello', rec = 'world') {
  console.log(`${greeting} ${rec}`);
}

console.log(greet())
console.log(greet('Salutaions'))
console.log(greet('Good morning', 'Launch School'))