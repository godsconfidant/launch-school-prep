
function greeter() {
let rlsync = require('readline-sync');
let firstName = rlsync.question("What's your first name?\n");
let lastName = rlsync.question("What's your last namme?\n");

return `Nice to meet you, ${firstName} ${lastName}!`
};

let x = greeter();
console.log(x)

function sayHi(questionToAsk) {
  let rlsync = require('readline-sync');
  let name = rlsync.question(questionToAsk);
  return name;
}

let frstName = sayHi('What is your first name?\n');
let lstName = sayHi('What is your lastName?\n');

console.log(`Hello, ${frstName} ${lstName}`)