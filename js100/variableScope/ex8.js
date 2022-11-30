// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1;

function myFunc(a) {
  console.log(a)
}

let b = 2;

myFunc(b);

// This should return b or 2.  The a in the myFunc(parameter) is shadowing let a = 1 (still confused on shadowing), But my understanding is that myFunc(a), this a is a parameter a will pass on any argument that is passed to it. This case being let b = 2. So console.log(a) will be being passed b = 2