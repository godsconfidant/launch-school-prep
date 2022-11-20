// Does the following code produce an error? Why or why not? What is the output to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/* This code will not produce an error since we increment the i (counter value) on the next line. Though we are console.log(i += 1) it still increments to the counter on the next loop. 

also the output will be 

1
2
3
4
5
*/ 