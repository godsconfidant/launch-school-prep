//  In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.


let ice_cream_taste = 'chocolate' // variables names should be camel case and end with semicolon
let ice_cream_density = 10

while(ice_cream_density > 0)//while block needs open bracket first line/space btween while and ()
{
      console.log('Drip...');  //The block statement should be indented 2 spaces or 1 tab
      ice_cream_density -= 1;
}


console.log('The ' + ice_cream_taste + ' ice cream melted.'); // use string literal 

// rewritten

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip..');
  iceCreamDensity -= 1;
};

console.log(`The ${iceCreamTaste} ice cream melted.`)