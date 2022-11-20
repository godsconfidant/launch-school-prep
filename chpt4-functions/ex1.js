let bar = 1;
function foo() {
  let bar = 2;
} 

foo();
console.log(bar);

// console.log(bar) Will console to 1. The bar in the function is has been declared therfore it is a different foo with no connection or scope with anything outside of the function. 

let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);
// This will log 2. The function foo() is called and runs the call stack. Bar is assinged in the function and is available globally. 