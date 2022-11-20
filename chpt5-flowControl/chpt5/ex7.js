function toCaps(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

// or

function caps(str) {
 return str.length > 10 ? str.toUpperCase() : str;
}

let y = toCaps('greetings sir!');
let x = caps('greetings!');
console.log(y, x);
