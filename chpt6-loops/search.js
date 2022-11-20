let array = [3, 1, 5, 9, 2, 6, 3, 8];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
} 

console.log(indexOfFive);