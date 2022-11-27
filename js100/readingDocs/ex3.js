//Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

let word = 'mountain';

// There is no built in method to capitalize the first letter of a string. It could be done with multiple methods

let firstLetter = word.slice(0, 1).toUpperCase();
let capital = firstLetter + word.slice(1); // Mountain
console.log(capital);