// Consider the following code:
//As written, this code will raise an error on line 6. Without creating a new function or changing lines 8 or 9, update this code to work as intended.

function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo; // assign a alias to bar

foo('hello');
bar('hi');

