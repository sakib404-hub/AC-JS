// for(initialization, condition, increment & decrement)

let count0 = 0;
for (let i = 0; i < 10; i++) {
  console.log("Hellow", i + 1);
  count0++;
}
console.log("The Loop is Executed", count0, "Times");

// While Loop
// while(condition){code execution and increment, decrement}
count0 = 0;
let i = 0;
while (i < 10) {
  console.log("Hellow", i + 1);
  i++;
  count0++;
}
console.log("The Loop is Executed", count0, "Times");

//At leat one task will be performed here before checking the condition
//thus it's saying do(work) while(before condition)
// Do-While Loop

let j = 0;
count0 = 0;
do {
  console.log("Hellow");
  j++;
  count0++;
} while (j < 10);
console.log("The Loop is Executed", count0, "Times");

// FOR OF LOOP[STRING AND ARRAY]
let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
for (let num of numbers) {
  //iterator -> characters
  console.log(num);
}

// FOR-IN LOOP for string index and object key pair values
let name = "Javascript";
// Example usage of for-in loop with a string
for (let index in name) {
  console.log(`Character at index ${index}: ${name[index]}`);
}

let student = {
  name: "Rahul Kumar",
  age: 20,
  cgpa: 3.95,
  isPassed: true,
};
for (let i in student) {
  //   console.log(i);
  console.log("Key", i, "value =", student[i]);
}

// Sum of 1 to n
let sum = 0;
let num = 20;
for (let i = 0; i < num; i++) {
  sum += i;
  if (sum > 100) {
    break;
  }
}
console.log("Sum is Equal to ", sum);

// checking if a number is a prime number
let number = 7;
let flag = true;

if (number <= 1) {
  flag = false;
} else if (number === 2) {
  flag = true;
} else {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
}

if (flag) {
  console.log("The Number is a prime Number :", number);
} else {
  console.log("The Number is not a prime Number :", number);
}
console.log(Math.sqrt(49));

// how many prime number is availabe in 1 to n and printing them

count0 = 0;
for (let number = 2; number < 20; number++) {
  let isPrime = true;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number);
    count0++;
  }
}
console.log("Prime Number between 1 to 20 is :", count0);

let gameNumber = 25;
let userNumber = prompt("Guess the Game Number : "); //This Value for for user input always comes in string format only

console.log(userNumber);

while (gameNumber != userNumber) {
  console.log("You Entered the Wrong Number,Guess Again.......");
  let userNumber = prompt("Guess the Game Number : ");
}
console.log("You Entered the Right Number");
