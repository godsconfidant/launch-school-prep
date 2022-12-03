// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33,
};

let nestArr  = [];
for (let property in person) {
  nestArr.push([property, person[property]]);
}

console.log(nestArr);

let nestedArr = Object.entries(person);
//console.log(nestedArr)