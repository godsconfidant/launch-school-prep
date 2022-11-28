//  What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

let counter = 0;

while (counter > 0) {
  console.log('Whooot!')
  counter -= 1;
}

do {
  console.log('whoot!');
  counter -= 1;
} while (counter > 0);

//The do while loop will execute 1 time before the conditional statement gets read. After the conditional statement is read it stops the loop. do while loops will always run at least on time before the conditional statement is read and executed