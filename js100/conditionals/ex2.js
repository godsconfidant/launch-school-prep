// The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

// Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

let randNum = Math.round(Math.random());

if (randNum) {
  console.log('Yes ', randNum); 
  
} else {
  console.log('No ', randNum);
}