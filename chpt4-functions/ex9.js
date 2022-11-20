function multiply(left, right) {      /* multiply,  left,   right */
  let product = left * right;        /*  product,  left,  right */
  return product;                     /* product */
}

function getNumber(prompt) {                /* getNumber,  prompt */
  return parseFloat(question(prompt));   /* prompt , parseFloat, queston(this 1 is fake)-- Built IN FUNCTION NAMES ALSO COUNT AS VARIABLES   */
}

let left = getNumber('Enter the first number: ');   /* left,  getNumber */
let right  getNumber('Enter the second number: ');     /*  right,  getNumber */
console.log(`${left} * ${right} = ${multiply(left, right)}`);   /* left,  right,  multiply, console  */

    /*  console is the VARIABLE name for BUILT-IN CONSOLE OBJECT.  console.log   log is the name of a METHOD(function) in that object     */

// Identify all the variables named on each line of code