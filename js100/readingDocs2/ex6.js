//The MDN page for Date lists two methods to get the year of a date

let now = new Date;


let justYear = now.getYear(); // this will give is current year minus 1900 

    // WINNER!!!
let full = now.getFullYear(); // this will return the current year in 4 digits 2022;
console.log(justYear);
console.log(full);