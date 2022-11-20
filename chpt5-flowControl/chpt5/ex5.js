//Refactor using if statements

return foo() ? 'bar' : qux();


if (foo()) {
  return 'bar';
} else {
  return qux();
}
