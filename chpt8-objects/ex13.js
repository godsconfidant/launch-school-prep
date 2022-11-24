// As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.


function foo(bar) {
  console.log(bar());
}


  
//This code adds a function to bar. So when console.log(bar()) calls a function, an anonymous has been passed to the parameter bar. so parameter bar now = function(){retrun x} 

foo(function() {return 'welcome'} );  // should print 'welcome'

foo(function() {return 3.1435} );  // should print  3.1435

foo(function() {return [1, 2, 3]} );  // should print  [1, 2, 3]

