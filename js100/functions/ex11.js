/*
Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:
*/


// function localGreet(local) {
//   let result = '';
//   let region = '';
//   let lang = '';
//   lang = local.split('.')[0].split('_')[0];
//   region = local.split('.')[0].split('_')[1];

//   if (lang === 'en' && region === 'US') {
//       return 'Hey';
//   } else if (lang === 'en' && region === 'GB') {
//       return 'Hello';
//   } else if (lang === 'en' && region === 'AU') {
//       return 'Howdy!'
//   } else if (lang === 'fr' && region === 'FR') {
//       return 'Salut';
//   } else if (lang === 'fr' && region === 'CA') {
//       return 'Salut';
//   } else if (lang === 'fr' && region === 'MA') {
//     return 'Salut';
//   } else {
//     return 'Please teach me hello in your country\'s language!'
//   }
// }


function getRegion(locale) {
  return locale.split('.')[0].split('_')[1];
  }
  
  function getLang(locale) {
    let lang =  locale.split('.')[0].split('_')[0];
    let result = ''
    
    switch(lang) {
      case 'fr':
      result = 'Salut';
      break;
    } return result
    }
  
  
function greet(local) {
    let loc = getRegion(local);
    let lang = getLang(local);
    
    let result = ''
    switch (loc) {
      case 'US':
        result = 'Hey!';
        break;
      case 'GB': 
        result ='Hello!';
        break;
      case 'AU':
        result = 'Howdy';
        break;
      default: 
        result = getLang(local);
     } return result;
}

console.log(greet('en_US.UTF-8')); // 'Hey!'
console.log(greet('en_GB.UTF-8')); // 'Hello!'
console.log(greet('en_AU.UTF-8')); // 'Howdy!'
console.log(greet('fr_FR.UTF-8')); // 'Salut!'
console.log(greet('fr_CA.UTF-8')); // 'Salut!'
console.log(greet('fr_MA.UTF-8')); // 'Salut!'

// console.log(localGreet('en_US.UTF-8')); // 'Hey!'
// console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
// console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
// console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'