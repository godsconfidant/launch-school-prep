let myArray = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0]];

// for (let i = 0; i < myArray.length; i += 1) {
//   for (let j = 0; j < myArray[i].length; j+= 1) {
//     let value = myArray[i][j];
//       if (value % 2 === 0) {
//         console.log(value);
//       }
//    } 
//   }

// myArray.forEach(function (num) {
//   if (Array.isArray(num)) {
//     num.forEach(function(nestedNum) {
//       if (nestedNum % 2 === 0) {
//         console.log(nestedNum)
//       };
//     })
//   }
// });

myArray.forEach(function(nestedArray)  {
  nestedArray.forEach(function(nestedArray) {
    if (nestedArray % 2 === 0) {
      console.log(nestedArray);
    }
  })
})