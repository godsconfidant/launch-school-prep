// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let arr1 = [2, 6, 4];
let arr2 = [2, 6, 4];

console.log(arr1 === arr2);

/*
I would guess the result will be false as the arrays don't know what is inside/ the values of the other array; Objects are not primitives. The === operator works on primitaves because they point to the same location in memor. These two arrays do not point to the same memory location.

let arr1 = [2, 6, 4];
let arr2 = arr1

console.log(arr1 === arr2)  This would return true because arr2 is pointing to the same location as arr1; 
*/