// What will the following code log to the console and why? Don't run it until you have tried to answer.

// var greeting; (but this greeting will return undefined);

var greeting;
console.log(greeting);

var greeting = 'Hello World!';
console.log(greeting);

// DECLARATION ---  var greeting;  (just declared)
// INITIALIZATION -- var greeting = 'this is initialized'


//This will return undefined. In javascript the var declaration is hoisted to the top of the code and initialzed to undefined.  The console.log will access the var initialization and return the initialzed value of undefined.

