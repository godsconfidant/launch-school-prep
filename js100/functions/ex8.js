// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.


function greet(lang) {
  let greeting = '';
  switch(lang) {
    case 'ga': 
      greeting = 'dai dhuit';
      break;
    case 'fr':
      greeting = 'bon jour';
      break;
    case 'kg':
      greeting = 'annyeonghaseyo'
      break;

     
  } return greeting
}


console.log(greet('ga'));
greet('fr');
greet('pt');
greet('de');
greet('sv');
greet('af');