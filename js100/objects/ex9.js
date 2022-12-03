// Write code that does the reverse, starting from a nested array of pairs and building an object.

let person = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {};

for (let i = 0; i < person.length; i += 1) {
  let objPair = person[i];
  obj[objPair[0]] = objPair[1];
}

console.log(obj)

// let objMeth = Object.fromEntries(person);
// console.log(objMeth);



