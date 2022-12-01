// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let sent = 'launch school tech & talk';

let sentArr = sent.split(' ');
let upper = [];


function sentUp(str) {
  str.map(function (word) {
   upper.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return upper.join(' ');
}


console.log(sentUp(sentArr));

