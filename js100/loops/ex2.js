//  The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

//   let cdown = [];
//   let launch = 'Launch!';
//   for (let i = 10; i >= 1; i -= 1) {
//     cdown.push(i)
//   }; 

//  cdown.push(launch);
//  let finalCountDown = cdown.join(' ');

//  console.log(finalCountDown);

for (let i = 10; i >= 0; i -= 1) {
    if (i === 0) {
        console.log('Launch') 
    } else {
      console.log(i);
    }
}