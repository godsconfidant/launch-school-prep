// Write code that stores all of the vehicle property names in an array called keys.

let car = {
  make: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7,
};

let keys = [];
for (let prop in car) {
  keys.push(prop)
}
//console.log(keys);

let key = Object.keys(car);
console.log(key)