// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift()
energy.unshift('geothermal');

console.log(energy)