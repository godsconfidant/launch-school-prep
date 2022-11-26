// Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(arr, regex) {
  let match = arr.filter(function (word) { 
    return word.match(regex) 
  });
  return match;
};

//console.log(allMatches(words, /lab/));

function matches(words, parameter) {
  let foundWords = [];
  for (let i = 0; i < words.length; i += 1) {
    if (parameter.test(words[i])) {
      foundWords.push(words[i]);
    }
  } return foundWords;
};
console.log(matches(words, /lab/));