// Different Types of if-else execution 

// let age = 25;

// // if statement 
// if(age >= 18){
//     console.log("You can vote");
// }
// if(age < 18){
//     console.log("you can't vote");
// }

// color 
let mode = 'light';
let color;

if(mode === 'dark'){
    color = 'black'
}
// checking multiple condition using the else -if 
else if(mode == 'light'){
    color = 'white';
}
else if(mode =='pink'){
    color = 'pink';
}
else if(mode = 'blue'){
    color = 'black';
}
else{
    color = 'aliceblue';
}
console.log(color);

// if-else statement 
if(mode ==='black'){
    color = 'black';
}
// else can not be written without if 
else{
    color ='white';
}
console.log(color);

// odd-even 
let number = 21;
if(number % 2 === 0){
    console.log('The number is an even number');
}
else{
    console.log(number ,',The number is and odd number');
}
// syntax -> rules

// Ternary operator 
let age = 16;
// condition ? truthy values : false-values; 
let check = (age >= 18) ? 'adult' : 'not adult';
console.log(check);

// Switch Case 
 // Expected output: "Mangoes and papayas are $2.79 a pound."
let expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
    console.log('Mangoes and Papayas are $2.79 Pounds');
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

