function add(numberOne, numberTwo) {
  //local varibales of this function is numberOne,
  //  numberTwo and sum or known as the scope of the variable
  const sum = numberOne + numberTwo;
  return sum;
  //when a function finally returned something therefore it will be unreachable code!!
}
let result = add(10, 109001);
console.log(result);
