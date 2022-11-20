// in the following code what are the length values

let array1 = [1, 2, undefined, 4]; // The array length should equal 4; undefined takes up a space in length
console.log(array1, array1.length)

let array2 = [1];
array2.length = 5;  // The array length should be 5. The original array length was 1, then it was expanded to 5. 1 plus 4 empties;
console.log(array2, array2.length);

let array3 = [];
array3[-1] = [1];  // this should be length of 0: index positions should be non-negative. negative and non-integer don't get taken into account;
console.log(array3, array3.length);

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // This length should be 3 because it was set to 3; We truncated the element and lost the last two. 
console.log(array4, array4.length);

array5 = [];
array5[100] = 3 //This length is the highest position with a value. the index of ([100] = 3) sets the 100 index to 3. That means there will be 100(the index) + 1 (accounting for index starting at 0)
console.log(array5, array5.length)

