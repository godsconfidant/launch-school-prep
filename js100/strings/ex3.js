// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().



function repeat(num, str) {
  let rptStr = '';
  
  
  
  while (0 < num) {
    rptStr += str;
    num -= 1
  } 
  
  return rptStr;

};


console.log(repeat(3, 'ha'));

