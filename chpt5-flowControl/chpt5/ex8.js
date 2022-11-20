function range(num) {
  if (num < 0) {
      return `${num} is less than zero`;
  } else if (num <= 50) {
    return `${num} is between 0 and 50 (inclusive)`;
  } else if (num <= 100) {
    return `${num} is between 51 and 100 (inclusive)`;
  } else {
    return 'Number is greater than 100';
  }
}

console.log(range(-3))
console.log(range(4))
console.log(range(50))
console.log(range(51))
console.log(range(100))
console.log(range(101))