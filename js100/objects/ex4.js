let jane = {
  firstName: 'Jane',
  lastName: 'Harris',
  age: 55, 
  location: {
    country: 'Netherlands',
    city: 'Amsterdam',
  },
  occupation: 'stripper',
  greet: function(name) {
    return `Hej, ${name}`
  },
}

console.log(jane.greet('bobby'))