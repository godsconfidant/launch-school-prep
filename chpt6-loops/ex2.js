// Factorial  reprepsented by !n: is a number strating at one and multiplyed by every number till it reaches itself.  Ex. !5 = 1 * 2 * 3 * 4 * 5 = 120  



function fact(number) {
  let accumulator = 1;
  
  for (let counter = number; counter > 0; counter -= 1) {
    accumulator = accumulator * counter;
  }
  return accumulator;
}

console.log(fact(5))