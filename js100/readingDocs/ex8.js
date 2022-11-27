let tweet = 'I am learning to program! Whooot :-) #Javascript  #LaunchSchool';

let words = tweet.split(' '); // an array of tweet; each word an array element;

let isValid = tweet.length < 140; // true;


console.log(typeof tweet); // string
console.log(typeof words); // object
console.log(typeof isValid); // boolean

console.log(Array.isArray(words)); // true  arrays are object. If needing to know if it is an array specifically use Array.isArray();