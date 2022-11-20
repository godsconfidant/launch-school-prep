function multiply(left, right) {
  let product = right * left
  return product;
}

function getNumber(prompt) {
  return Number(question(prompt));
}

let left = getNumber('What is your first number');
let right = getNumber('What is your second number');
console.log(`${left} * ${right} = ${multiply(left, right)}`);


/* LINES 10- 11:
The variables left and right on lines 10-11 are global vairables as they were both declared in the main code. They are not in functions.

  LINE 12:
The variables left and right on line 12 are also global, though I would say its a bit different as console.log has not been assinged to a variable ex let answer = console.log(ect ect) that could be used anywher else in the code;

LINES 1-2:
The left and right variables on these two lines are parameters and are not the same as the left and right variables on lines 10/11.
They are available locally in the function multiply
*/