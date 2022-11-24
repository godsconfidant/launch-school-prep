// Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

function bar(arg1, arg2) {
  let foo = 'hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };
  return qux;
}
let result = bar('Victoria', 'Antonina');

/*
variables: bar, arg1, arg2, foo, qux, result

object property names: abc, def, ghi, jkl, mno, pqr, [0, 1, 2], [1][1,2,3]] indexed array 

primitive values: hello, 1,2,3,4,5,6, null, NaN, Victoria, Antoina, abcdefghijklnmopqr 1 2 3[indexes] 

objects: bar function, qux, [total array], [ [inner array]]
*/