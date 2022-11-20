let rlsync = require('readline-sync');
let age = Number(rlsync.question("How old are you?\n"));

let years = [10, 20, 30, 40];

for (let i = 0; i < years.length; i += 1) {
  let newAge = "";
  newAge =console.log(`You are 22 years old.
  In ${years[i]} years, you will be ${age + years[i]} years old`);
}