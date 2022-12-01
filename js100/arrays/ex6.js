// We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocab = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['exited', 'eager', 'enthusied', 'animated']
];



// for (let i = 0; i < vocab.length; i += 1) {
//   for (let j = 0; j < vocab[i].length; j += 1) {
//       console.log(vocab[i][j]);
//   }
// }

for (let firstLoop = 0; firstLoop < vocab.length; firstLoop += 1) {
  let syns = vocab[firstLoop];

for (let secondLoop = 0; secondLoop < syns.length; secondLoop += 1) {
  console.log(syns[secondLoop]);
}
}