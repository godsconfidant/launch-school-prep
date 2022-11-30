// Determine the output that the following code will log to the console.

function mulitplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor  + ' = 3');
    divisor += 1;
  }
}

//  No output as function invocation did not have parenthesis
// After parenthesis are added to the fucntion invocation
//This will log all the numbers from 3 to 30 by counting threes, 3, 6, 9, 12 ect that when divided result in 3;

mulitplesOfThree();