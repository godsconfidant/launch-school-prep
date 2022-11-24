// let count = 1;
// count = 2;
// console.log(count);

// let obj = {
//   a: 1,
// }

// obj = {
//   b: 2,
// }
// console.log(obj)


// let e = [1, 2];
// let f = e;
// e.push(3, 4); 
// console.log(f);


// let g = ['a', 'b', 'c',];

// let h = g;
// console.log(h);

// g[1] = 'x';
// console.log(h);

// let obj5 = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// }

// for (let key in obj5) {
//   console.log(key);
// };

// let arr = [10, 20, 30];
// for (let value in arr) {
//   console.log(value);
// }

// let arrOf = [10, 20, 30];
// for (let value of arrOf) {
//   console.log(value);
//  }

//  let strOf= 'abc';
//  for (let char of strOf) {
//   console.log(char)
//  }

//  let nameStr = 'pete hanson';
//  let nameProper = nameStr.toUpperCase().split(' ').reverse().join(', ')
 
//  console.log(nameProper)

// function contain(word) {
// if (/o/.test(word)) {
//   console.log('Yes it contains the letter "o"');
// } else {
//   console.log('No it does not contain the letter "o"');
// }
// }
// contain('weather');

// function hasAorE(str) {
//   let word = str.match(/[ae]/);
//   if(word) {
//       console.log(`The letter ${word} is present`);
//   } else {
//     console.log(`The letters ${word} are not present`);
//   }
// }

// hasAorE('pissed');

// let regex = /b/g;
// let str = 'ababa';
// console.log(regex.test(str));
// console.log(regex.test(str));
// console.log(regex.test(str));


//function getDayOfWeek
// let date = new Date('November 23, 2022');
// let day = date.getDay();
// console.log(day);

// let names = ['bob', 'tom', 'bill', undefined, 'timmy'];

// names.forEach(function(name) {
//   try {
//     console.log(`${name} has ${name.length} letters in it`);
//   } catch(exceptio) {
//     console.log('Something went wrong');
//   }
// });


// function foo(number) {
//   if (typeof number !== "number") {
//     throw new TypeError("expected a number");
//   }

//   // we're guaranteed to have a number here
// }

// foo(8);

function foo() {
  console.log(bar);
}



foo()