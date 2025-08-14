// arrow_function
//This is a part of modern javascript(MODERN JAVASCRIPT)
const printHellow = () => {
  console.log("Hellow World");
};
printHellow();

const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(10, 7);

const arrowMultiplication = (a, b) => {
  const multi = a * b;
  console.log(`Multiplication of the tow number is : ${multi}`);
};
console.log(arrowMultiplication);
arrowMultiplication(9, 6);

let arrowDiv = (a, b) => {
  const division = a / b;
  return division;
};

let result = arrowDiv(10, 2);
console.log(result);
