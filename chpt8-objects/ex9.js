//  What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
  // qux = 'hi'
}

bar(foo, qux);


console.log(foo.a); // This should return 'hi' this is taking the foo object and argument1.a is foo.a = 'hi'
console.log(qux);  // This should return 'hello'. argument2 is trying to mutate a primitive value, argument 2 is trying to change variable qux to argument 2