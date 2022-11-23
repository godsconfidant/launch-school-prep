let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


function copyObj(prototype, keyArr) {
  let newObj = {};

  if(keyArr) {
    keyArr.forEach(function(key) {
      newObj[key] = prototype[key];
    });  return  newObj 
    } else {
      newObj = Object.assign(newObj, prototype);
    } return newObj; 
}


console.log(copyObj(objToCopy)); // => { 'foo': 1, 'bar': 2, 'qux': 3};
console.log(copyObj(objToCopy, ['foo'])); // => {'foo': 1}; 
console.log(copyObj(objToCopy, ['foo', 'bar'])) // => {'foo': 1, 'bar': 2, 'qux': 3}
console.log(copyObj(objToCopy, ['foo', 'bar', 'qux']))  // => {'foo': 1, 'bar': 2, 'qux': 3}
console.log(objToCopy) // => {'foo': 1, 'bar': 2, 'qux': 3}