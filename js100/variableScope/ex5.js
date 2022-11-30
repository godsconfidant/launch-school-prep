function myFunc() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2
    console.log(a);
  }
};

myFunc();

// This will throw a ReferenceError. The first console.log is trying to get the value of a hoisted let declaration. This let declaration will not have a value so there will be a Reference Error as the first console.log is trying to referece something that is not there.  