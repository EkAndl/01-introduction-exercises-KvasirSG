// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat (numberTwo);
console.log("Exercise 3");
console.log(result);
console.log("---------------");

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
console.log("Exercise 4");
const total = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(total.toFixed(2));
console.log("---------------");

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const avg = (one + two + three) / 3;
console.log("Exercise 5");
console.log(avg.toFixed(5));
console.log("---------------");


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("Exercise 6");
const char = letters[2];
console.log(char);
console.log("---------------");


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
console.log("Exercise 7");
const fixedFact = fact.replace("javascript", "Javascript");
console.log(fixedFact);
console.log("---------------");


// --------------------------------------



