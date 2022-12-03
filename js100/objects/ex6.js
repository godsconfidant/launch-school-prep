// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('harr, harr');
  },
};

// for (let prop in obj) {
//   console.log(prop)
// }

// for (let prop of obj) {
//   console.log(prop)
// }

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}

// The strict equality operator will return false because nothing in the object matches === true; All of the objects names are strings, not the boolean value of true. 

// The for (let prop IN obj) loops through the objects property names
// The for (let prop OF obj) loops through the objects property values