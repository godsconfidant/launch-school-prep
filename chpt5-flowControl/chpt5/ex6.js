// Falsey Values  false, 0, "", NaN, undefined, null

function empty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Is Empty');
  }
}

empty([]); //This is an empty array so that means it will evaulate to true. 

// ==> 'Not Empty';