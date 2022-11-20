function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Please enter an integer');
    return;
  }

  if (num % 2 === 0) {
    console.log('Number is even'); 
  } else {
    console.log('Number is odd');
  }

}

evenOrOdd(2)
evenOrOdd(3)
evenOrOdd(2.4)
evenOrOdd(2.3)