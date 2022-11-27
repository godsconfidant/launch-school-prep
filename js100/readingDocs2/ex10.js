// TYPE ERROR

//run the following code

let tweet = 'WhooHoo! ;-)';

if (tweet.length > 140) {
    console.log('The tweet is too long');
} else {
  console.log('Tweet has be posted');
}

// In the original example the .length property it had was written .length() like a method. I removed the () as .length is a property of Sting and not a method. 