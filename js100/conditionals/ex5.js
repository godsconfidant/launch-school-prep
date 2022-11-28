// Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.

let animal = 'dog';

switch(animal) {
  case 'dog':
    console.log('woof');
    //break;

  case 'duck':
    console.log('quack');
    //break;

  case 'horse': 
    console.log('hi o silver');
    //break;

  case 'cat':
    console.log('meow');
    //break;
    
  default: 
    console.log('No animals, lucky you!');
}

// This will console out to all the console logs after the first truthy value. There is no break statement between each case therefore the switch will keep dropping till the end of the entire switch statement excecuting code all the way down.