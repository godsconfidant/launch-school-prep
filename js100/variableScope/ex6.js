// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// The console will log false. The b that is initialzed in the if block is for that block. The b that was initialized on line 4 (line 2 on example) is what the console.log outside of the if block will reference.