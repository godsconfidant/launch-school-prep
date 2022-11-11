let rlsync = require('readline-sync');
let firstName = rlsync.question("What's your name?\n");
let lastName = rlsync.question("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);