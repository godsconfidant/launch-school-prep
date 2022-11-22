// Given this object access the name of person

let person = {
  name: 'Richard',
  occupation: 'Web Developer',
  hobbies: 'gardening'
}

let objName = person['name'];
// or
let otherWay = person.name;

console.log(objName);