/*
Write a function clone that takes an object as argument and returns a shallow copy of that argument. A shallow copy returns a new object that is a copy of the original object. However, only the object itself and any properties with primitive values are duplicated. Properties that are themselves objects are copied "by reference" -- that is, only a pointer to the object is copied.

For instance, consider the following object:
*/

// let obj = {
//   num: 1,
//   string: 'abc',
//   array: [1, 2, 3],
// };

// let objcopy = {...obj};

// console.log(objcopy);



let person = {
  title: 'Duke',
  name: {
    value: 'nukem',
    isStageName: true,
  },
  age: 33,

};

function clone(arr) {
  return Object.assign({}, arr);
}
 
let newClone = clone(person);
//console.log(newClone);

newClone.age = 34;
person.name.isStageName = false;

console.log(newClone);
console.log(person)