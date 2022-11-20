function even(num) {
  if (!Number.isInteger(num)) {
    console.log('Is not an integer');
    return;
  }

  if (num % 2 === 0) {
    console.log('Num is even')
  } else {
    console.log('Num is odd')
  }
}


even(2);
even(3);
even(12323);
even(122736);
even(47587.23);
even(3747.233);

