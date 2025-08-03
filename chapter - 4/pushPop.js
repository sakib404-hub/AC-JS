//Method -> Method is thing that do some works for us
// push() -> Used to add to the end of an Array
// pop() -> Delete from the end and return the value of that
// toString() -> Converts Arrays to String
//Concat() -> joins multiple arrays and returns the result
//unshift() -> Used to add values to the top of the array meaning adding element at the first index
//shift() -> deleting the element from the first index of the array

// Push-Pop
let veg = [
  "tomato",
  "apple",
  "cucumber",
  "grapes",
  "litche",
  "watermelon",
  "jackfruit",
];

veg.push("Mango", "Orenge", "Banana");

let delValue = veg.pop();
console.log(veg);
console.log(delValue);

let marks = [90, 87, 76, 89, 92];

marks = marks.toString;
console.log(typeof marks);
console.log(marks);

// concat
let marvelHeros = ["Thor", "Spiderman", "Ironman", "Captain Amercia"];
let dcHeros = ["Superman", "Aquaman", "Cyborg", "Wonder Women"];
let indianHeros = ["Saktiman", "Krish", "Flying Jatt"];

let heros = marvelHeros.concat(dcHeros).concat(indianHeros);
console.log(marvelHeros);
console.log(dcHeros);
console.log(indianHeros);
console.log(heros);

// Slice Method
console.log(heros.slice(1));

// Splice Method
// Splice(Starting indexedDB, Deletecount, newElement)
heros.splice(2, 3, "Sakib Hossen");
console.log(heros);
