// Method means to do any of the work
//is like a block of code that works for us

//toLowerCase Method
let name = "Md. Sakib Hossen";
let newName = name.toUpperCase();
console.log(newName);

// toUpperCase Method
let fullName = "ARIYAN AHMED SHAKIB";
let newFullName = fullName.toLowerCase();
console.log(newFullName);
console.log("length of the string is :", newFullName.length);

//Trim Method
let add = "     Mipur        ";
console.log(add.trim());

// slice Method
console.log(fullName.slice(3, 10));

// concatination method
let firstName = "Apna";
let lastName = "Collage";

// let userName =firstName + ' ' + lastName;
let userName = firstName.concat(" ").concat(lastName);
console.log(userName);

// replace method
let str = "hellow";
console.log(str.replace("hellow", "help")); //Onetime
