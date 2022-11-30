// What will the following code log to the console and why? Don't run it until you have tried to answer.


const a = {
  firstName: 'John',
  lastName: 'Doe',
};

function myFunc() {
  a.firstName = 'Jane';
}

myFunc();

console.log(a);

// This will return firsName: Jane;  function changes the value of firstName in the const a object. Objects are mutable so the key value pairs in objects and the index values in arrays can be altered. What can't be changed is that const a points to a different object. Ex const a = const b. 