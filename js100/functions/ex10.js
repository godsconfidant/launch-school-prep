// Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

function getLoc(loc) {
  //return loc.slice(3 , 5);
 return loc.split('.')[0]
           .split('_')[1];

}



console.log(getLoc('en_US.UTF-8'));  // 'US'
console.log(getLoc('en_GB.UTF-8'));  // 'GB'
console.log(getLoc('ko_KR.UTF-16')); // 'KR'