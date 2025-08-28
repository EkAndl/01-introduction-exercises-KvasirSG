// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message 
console.log("Exercise 1");
console.log(greetings.message);
console.log("---------------");
// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 
const student = {firstName:"Kenneth", age:30};
console.log("Exercise 2");
console.log(student);
console.log("---------------");

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

console.log("Exercise 3");
console.log(stackOverflow);
console.log("---------------");

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description;
thisSong.about = "Just a tribute.";

console.log("Exercise 4");
console.log(thisSong);
console.log("---------------");


// --------------------------------------


