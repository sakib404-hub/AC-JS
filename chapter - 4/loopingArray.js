let heros = ["Ironman", "Superman", "Hakweye", "Antman", "Black Widow", "Thor"];

// console.log(heros[0]);
// console.log(heros[1]);
// console.log(heros[2]);
// console.log(heros[3]);
// console.log(heros[4]);
// console.log(heros[5]);

//Way - 1
for (let hero of heros) {
  console.log(hero);
}

//printing a newline here
//We can use \n for newline \t for new tab
console.log();

//Way - 2
for (let index = 0; index < heros.length; index++) {
  console.log(heros[index]);
}

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
let length = marks.length;

for (let mark of marks) {
  sum += mark;
}

let avg = sum / length;
console.log("Avarage Mark of the Student is : ", avg);
console.log(`Avarage mark of the Student is = ${avg}`); //Using Template Literal

let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
  let offer = prices[i] * 0.1;
  prices[i] = prices[i] - offer; // subtract 10% offer
}

console.log(prices);

// let index = 0;
// for (let price of prices) {
// //   console.log(price);
//   console.log(`Value at index ${index} = ${price}`);
//   index++;
// }
