function multiply(left, right); {    // multiply: GLOBAL   left/right: LOCAL scope
  let prodcut = left * right;        // product / left / right:  LOCAL scope
  return prodcut;                    // product: LOCAL    the return statment carries it out of the local scope
}

function getNumber(prompt) {             // getNumber: GLOBAL  prompt: LOCAL
  return Number(question(prompt));       // Number/ question / prompt: LOCAL
}

let left = getNumber(`Please enter your first number `);    // left: GLOBAL  getNumber: GLOBAL
let right = getNumber(`Please enter your second number `);  // right: GLOBAL  getNumber: GLOBAL
console.log(`${left} * ${right}  =  ${multiply(left, right )}`); // console: GLOBAL   left / right / multiply: GLOBAL