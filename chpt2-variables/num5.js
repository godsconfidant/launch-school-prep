// Intro to JS chpt 2 Variables 
// Excersise # 5

let foo = 'bar';

{
  let foo = 'qux';
}

console.log(foo);

//This will log the value 'bar'. The second for was declared in a block, so it is not available to the original declaration or the log method that is outside of the block / {} 