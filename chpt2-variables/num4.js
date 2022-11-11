// Intro to JS chpt 2 Variables 
// Excersise # 4


// What happens when we run this code

const NAME = 'Victor';
console.log('Good morning ' + NAME);


NAME = 'Joe';
console.log('Good morning ' + NAME);

// The original NAME declaration was do with 'const', therefore it cannot be assined to another value; So it will console.log the original value and then throw errow when it gets to the NAME assigntment of "Joe"