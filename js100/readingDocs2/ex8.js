// String Concatenation
// Find out how we can join two or more strings together.


let str1 = "Fore score and";
let str2 = "seven years ago"

let sent = str1 + ' ' + str2;
console.log(sent)

let strConcat = str1.concat(' ', str2);
console.log(strConcat);

let empty = '';
let emptyFill = empty.concat(str1, ' ', str2);
console.log(emptyFill);

// concat() => takes 2 parameters, the first how to seperate the strings, the second is which str to concat with calling(prototype) string.