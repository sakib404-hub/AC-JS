function countVowels(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (
      words[i] === "a" ||
      words[i] === "e" ||
      words[i] === "i" ||
      words[i] === "o" ||
      words[i] === "u" ||
      words[i] === "A" ||
      words[i] === "E" ||
      words[i] === "I" ||
      words[i] === "O" ||
      words[i] === "U"
    ) {
      count++;
    }
  }
  console.log(
    `This here is done by the Normal Function and the number of Vowels is : ${count}`
  );
  return count;
}

const countVowel = (words) => {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (
      words[i] === "a" ||
      words[i] === "e" ||
      words[i] === "i" ||
      words[i] === "o" ||
      words[i] === "u" ||
      words[i] === "A" ||
      words[i] === "E" ||
      words[i] === "I" ||
      words[i] === "O" ||
      words[i] === "U"
    ) {
      count++;
    }
  }
  console.log(
    `This here is done by the Arrow Function and the number of Vowels is : ${count}`
  );
  return count;
};

let result = countVowel("I am Ariyan Ahmed Shakib");
console.log(result);
let result1 = countVowels("I am Ariyan Ahmed Shakib");
console.log(result1);
