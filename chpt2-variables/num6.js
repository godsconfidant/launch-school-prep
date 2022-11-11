// Intro to JS chpt 2 Variables 
// Excersise # 6

const FOO = 'bar';
 
{
  const FOO = 'qux';
}

console.log(FOO);

// This will console log to 'bar'. Even though it is const, the original const cannot access the original FOO. Will try it with the console FOO in the blocks and see what happens

const EXFOO = 'test';

{
  const EXFOO = 'Block EXFOO';
  console.log(EXFOO);
}



// This consoled block EXFOO. So that tells me that what's in the block as a const does not look outside of the block for its value. It is a complete new constant!!