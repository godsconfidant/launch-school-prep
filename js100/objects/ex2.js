// Given the below object jane, write code that retrieves the country in which Jane is located.

let jane = {
  firstName: 'Jane',
  lastName: 'Harris',
  age: 55,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'stripper',
}

let location = jane.location.country;
console.log(location)