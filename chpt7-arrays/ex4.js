// Use map to create an array that tell if each element is 'even' or 'odd' next to element.


let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

  // Solved with Function and map
/*
let mapArr = [];
function evenOdd(arr) {
  arr.map(function(element) {
   if (element % 2 === 0) {
    mapArr.push(`${element} 'even'`)
  }if (element % 2 !== 0) {
    mapArr.push(`${element} 'odd'`);
  }
}); return mapArr;

let x = evenOdd(myArray);
console.log(x)
*/

    // solved just map
/*
let newArr = myArray.map(function(arrElement) {
    if (arrElement % 2 === 0) {
     return `${arrElement} even`;
    } if (arrElement %2 !== 0) {
      return `${arrElement} odd`;
    }
});
console.log(newArr);
*/


// with for loop as a function;


function evenOrOdd(arr) {
    let newArr = [];
for (let i = 0; i < myArray.length; i += 1) {
    
  if (myArray[i] % 2 === 0) {
    newArr.push(`${myArray[i]} even`);
  } else {
    newArr.push(`${myArray[i]} odd`);
  } 
} return newArr
}
console.log(evenOrOdd(myArray));



// ternary 
let newTernary = myArray.map( (value) => value % 2 === 0 ? `${value} even` : `${value} odd`);

//console.log(newTernary);