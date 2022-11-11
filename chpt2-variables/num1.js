// Intro to JS chpt 2 Variables
// Write a greeter program named greeter.js that greets victor in morning, afternoo, evening;

let name = 'Victor';

let time = new Date().getHours();
switch(time) {
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
  case 0:
  case 1:
  case 2:
  case 3: 
  case 4:
    console.log(`Good evening ${name}`);
    break;

  case 5:
  case 6: 
  case 7: 
  case 8:
  case 9:
  case 10:
  case 11: 
    console.log(`Good morning ${name}`);
    break;

  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log(`Good afternoon ${name}`);
    break;
};