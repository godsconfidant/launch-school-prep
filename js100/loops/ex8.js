// Write a while loop that logs all odd natural numbers between 1 and 40

let i = 1;
while (i <= 40) {
  console.log(i) 
    i += 2;
}

//or

let j = 1;
while (j <= 40) {
  if (j % 2 !== 0) {
    console.log(j);
    
  } j += 1;
}