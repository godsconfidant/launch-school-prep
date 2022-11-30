// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = 1;

function myFunc() {
  a = 2;
}

myFunc(a);


/*
This will return a TypeError. Cosnt cannot be redefined. Const is declared and intialized to a primitive value. The function tries to change what const points to. This is why we get a TypeError about trying to reassign const a.
Also there is no parameter in the function myFunc() so when the function call myFunc(a) tries to pass an argument, the argument is ignored by the function. 
*/
