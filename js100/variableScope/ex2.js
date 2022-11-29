// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

let greeting = 'Hello World';

//This will console an error that greeting has not been declared. Const and let are hoisted to the top of the code but not initialized to anything. This is called 'Temporal Dead Zone'.  So they will not return anything. So error will be

// Cannot access 'greeting' BEFORE INITIALIZATION (all caps for emphasis)