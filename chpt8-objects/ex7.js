// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets

// Will the produce the same value

// Yes. They both will

let myProtoObj = {
  foo: 1,
  bar: 2,
  fun: false,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;



let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// forEach will only loop through the objects direct keys. It will NOT access the prototype it came from

for (let key in myObj) {
  // if (myObj.hasOwnProperty(key))  - this conditonal will make it loop though itself only
  console.log(key);
}
// for in - will loop through the object and the prototype it came from returning all of the keys