// let person = {
//   name: 'Jane',
//   age: '23',
//   hobbies: ['photography', 'geneology'],
// };

// person.height = '5 ft';
// person['gender'] = 'Female';

// delete person.age;
// delete person['gender'];
// delete person['hobbies'];



// Write for node on 1 line

let teacher = { name: 'Tom', age: 34, hobbies: ['biking', 'motorcycles'] }
let key = 'name'
//console.log(person[key])

// const myObj = Object.freeze({
//     foo: 'bar',
//     qux: 'abc',
// });

// myObj.qux = 'hey there';
// myObj.pi = 3.1415

// //myObj = {};  this returns an error because we are trying to reassign const myObj

// //console.log(myObj)

// let number = 20;
// let newNumber = number + 1;
// console.log(number);
// console.log(newNumber);

// let object = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// object.c = object.c + 1;
// console.log(object)
// console.log(object.c);

// let hello = function() {
//   console.log('hello there');
// }

// hello();

// let greet = hello;
// greet();

// function greeter(greeting) {
//   return function(name) {
//     return console.log(`${greeting} ${name}`);
//   }
// }

// let hello = greeter('Hello');
// let hi = greeter('Hi');

// console.log(hello('Trever'));
// console.log(hello('Ginni'));
// console.log(hi('Grace'));
// console.log(hi('Spencer'));


// let bob = {
//   name: 'bob',
//   age: 22
// };

// let studentBob = Object.create(bob);
// studentBob['year'] = 'Senior';


// let person = {
//   name: 'Tom',
//   age: 23,
//   height: '6 ft',
// };

// for (let prop in person) {
//   console.log(person[prop]);
// }

// let obj1 = {
//   a: 1,
//   b: 2,
// };

// let obj2 = Object.create(obj1);
// obj2.c = 3;
// obj2.d = 4;

// for (let prop in obj2) {    This returns obj2 own properties and inherited properties for obj1
//   console.log(obj2[prop]);   
// }

//this return just the properties of obj2
// for (let prop in obj2) {    
//  if (obj2.hasOwnProperty(prop)) {
//     console.log(obj2[prop])
//   }
// }

let newHire = {
  name: 'Tom',
  age: 23,
  height: '5ft 6in',
};

let newHireKeys = Object.keys(newHire);
//console.log(newHireKeys);
//newHireKeys.forEach( (key) => console.log(newHire[key]) );

let newHireValues = Object.values(newHire);
//console.log(newHireValues);

let objEnt = Object.entries(newHire);
//console.log(objEnt)

let objA  = {
  a: 'foo'
};

let objB = {
  b: 'bar'
}

let x = Object.assign({}, objA, objB);

console.log(objA);
console.log(x);