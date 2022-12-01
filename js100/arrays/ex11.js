// We have made a grocery list, and as we check off items on that list, we would like to remove them.

// Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let grocerylist = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (grocerylist.length > 0) {
  let removedItems = grocerylist.shift();

  console.log(removedItems);
}



// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

//groceryList; // []