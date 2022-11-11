//      Intro to Programming in Javascript  THE BASICS EXCERCISES

/* 
Excersise 1
Concatenate 2 or more strings 
*/

let fullName = 'Firstname ' + 'Lastname';

/* 
Excersise 2
Using arithmetic operators, get the individual digits of a 4-digit number like 4936
*/

let num = 4573; // declares number we will be breaking down

let ones = num % 10; // This gets us the remainder of num after the division by 10
console.log(`The ones column is ${ones}`);

num = (num - ones) / 10; /*This line gets rid of the ones and dividing and dividing by 10 moves 
the next column(tens) to be next to find the remainder of */

let tens = num % 10; // This gets us the remainder of num after the division by 10
console.log(`The tens column is ${tens}`);

num = (num - tens) / 10; /*This line gets rid of the ones and dividing and dividing by 10 moves 
the next column(tens) to be next to find the remainder of */

let hundreds = num % 10; // This gets us the remainder of num after the division by 10
console.log(`The hundreds column is ${hundreds}`);

num = (num - hundreds) / 10; /*This line gets rid of the ones and dividing and dividing by 10 moves 
the next column(tens) to be next to find the remainder of */
 
let thousands = (num % 10); // This gets us the remainder of num after the division by 10

console.log(`The thousands column is ${thousands}`);


/*
Excersise 3
Identify the data type for each of the following values: 'true', false, 1.5, 2, undefined, { foo: 'bar' }
*/

console.log(typeof('true')); //string
console.log(typeof(false)); //boolean
console.log(typeof(1.5)); //number
console.log(typeof(2)); //number
console.log(typeof(undefined)); //undefined
console.log(typeof({ foo: 'bar'})); // object


/*
Excesise 4
Explain why this code logs '510' instead of 15
    console.log('5' + 10);

    ans = Because the + operator coerces or changes a  number to a string and the concatenates the values;
 */


/*
Excersise 5
Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

  ans =  console.log(Number('5' + 10)) the Number method converst the string '5' into the number 5
*/ 

/*
Excersise 6
Use the template literal syntax along with the expression Number('5') + 10 to log the following
 sentence to the console:

        The value of 5 + 10 is 15.
*/

    console.log(`The valule of 5 + 10 = is ${Number('5') + 10}`); 



/*
Excersise 7
Will an error occur if you try to access an array element with an index that is greater than or 
equal to the length of the array? For example:
*/

let foo = ['a', 'b', 'c'];
console.log(foo.length);
console.log(foo[3]) // This will result in an error. foo has a length of 3 but a tolal index of 2. Index count start a 0 not 1


/*
Excersise 8
Create an array named names that contains a list of pet names. For instance:
*/

let petNames = ['Fido', 'Lassie', 'Pluto', 'Snoopy', 'Tom', 'Jerry', 'Alvin', 'Simon', 'Theodore'];

/*
Excersise 9
Create an object named pets that contains a list of pet names and the type of animal.
*/

let pets = {
  'Fido': 'dog',
  'Lassie': 'dog',
  'Pluto': 'dog',
  'Snoopy': 'dog',
  'Tom': 'cat',
  'Jerry': 'mouse',
  'Alvin': 'chipmucnk',
  'Simon': 'chipmunck',
  'Theodor': 'chipmunck',
};


/*
Excersise 10
What does this evalute to */  'foo' === 'FOO'   /* This evalutes to FALSE. The === is the strick equality operator which means 
the things compared must be exactly the same, Capitolization included. 
*/

/*
Excersise 11
What value does the following expression evaluate to? */
  '12' < '9'
/* This evaluates to true because '12' is a string. So a Javascript converts these numbers it reads the first number (1)
and compares this value with the converted '9'  */