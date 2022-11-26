//What does the following function do?

function doesSomething(string) {
    
  return string.split(" ").reverse().map( (value) => value.length);
};

let testStr = 'This is the test string';
console.log(doesSomething(testStr));

// This function recieves an aurgument of a string passed to its parameter sting. The function then passes the uses the split() method/function.

//The split() Method  puts the values of string into an array. The empyt " " mark tell split to split the string at every empty space ex. every word gets its own array index.

// The string array is then passed to the reverse() method, which as the name say reverse the order of the items in the array. So the original last value in array now has an index of [0];

// The map() method takes the array, makes a copy and returns a new array with whatever functions/ operations were set to be taken. In this case it return the length of each value in the array. It returns the length of each word of the sentence in reverse order. 