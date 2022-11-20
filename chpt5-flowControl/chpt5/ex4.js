// This excersise will return 'Product2', 'Product3', Product not found!' because there are no break statements after each case. this code will skip till it finds the correct case and execute all cases underneath it, falling-through (fall-through) till in can't fall any further which will be the default statement.

//Output => 'Product2', 'Product3', 'Product not found!'

function barCodeScanner(serial) {
  switch(serial) {
    case '123':
      lsconsole.log('Product1');
      //break;
    case '113':
      console.log('Product2');
      //break;
    case '142':
      console.log('Product3');
      //break;
    default:
      console.log('Product not found');  
  }
}

barCodeScanner('142');