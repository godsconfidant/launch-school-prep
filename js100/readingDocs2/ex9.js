//      SYNTAX ERROR
// The below code raises a SyntaxError. If you run the code, you'll see the following error message:

let speedLimit = 60;
let currentSpeed = 80;

//SyntaxError: Unexpected token &&

if ( (currentSpeed > speedLimit ) && ( currentSpeed - speedLimit > 5 )) {
  console.log('"People are so bad at driving cars ' +
  'that computers don\'t have to be that good to be much better." ' +
  '-- Marc Andreessen');
}

// The original code was missig () around each if statement. 