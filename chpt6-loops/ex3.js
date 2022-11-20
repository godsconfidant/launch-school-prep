// Why does this code cause an infinite loop?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;


  if (counter > 2) {
    break;
  }
}

// Because counter is set to = 1 not === 1. This means that the counter will be set back to one on every loop and will never reach greater than 2 in order for counter to break.
