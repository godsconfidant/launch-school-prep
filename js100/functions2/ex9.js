// The function initGame below returns an object. Refactor it using arrow function syntax.

let init = () => ({
    level: 1,
    score: 0, 
  });


let game = init();

console.log('Level ' + game.level);
console.log('Score ' + game.score);