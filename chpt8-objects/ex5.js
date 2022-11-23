//Create a new object named myObj that uses myProtoObj as its prototype

let myProtoObj = {
  foo: 1,
  bar: 2
};

let obj = Object.create(myProtoObj);

console.log(obj); // This is returning an empty object {}