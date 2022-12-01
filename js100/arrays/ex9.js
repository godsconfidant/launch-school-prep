// The destinations array contains a list of travel destinations 

// Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

// For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.

let dest = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function pickCity(city, destArr) {
    return destArr.indexOf(city) >= 0;
  }

  console.log(pickCity('London', dest));

// function place(city, destArr) {
//   for (let i = 0; i < destArr.length; i += 1) {
//       if (destArr[i] === city) {
//         return true;
//       } 
//   } 
//   return false
// }

// //console.log(place('London', dest))


