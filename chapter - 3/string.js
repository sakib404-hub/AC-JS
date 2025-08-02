// String is a sequence of character to represnt texts

let str1 = "Self Learning"; //Single Quotation
let str2 = "Self Learning is Difficult"; //Double Quotation
let backTick = `This is called a template \n \t literal and it is a special String`; //template literal

console.log(backTick);
console.log(typeof backTick);
console.log(str2.length);

let obj = {
  item: "pen",
  price: 20,
};
console.log("The cost of", obj.item, "is  : ", obj.price);
let output = `The cost of ${obj.item} is ${obj.price} ruppes`; //Template Literal also known as String Interpolation
console.log(output);

// Inbuild property
// length -> used to get the number of the symbol or the character used in the string
