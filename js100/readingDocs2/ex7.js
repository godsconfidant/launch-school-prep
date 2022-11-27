//How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

let arr = ['This', 'is', 'join']

console.log(arr.join()); // no parameter => 'This,is,join'
console.log(arr.join('')) // one parameter => 'Thisisjoin'
console.log(arr.join(' ')); // one parameter => 'This is join'
console.log(arr.join(', ')); // one parameter => 'This, is, join'

// parameters or optional, but the one paramenter (a string ex(', ') it takes tells join() method how the string elements are seperated.