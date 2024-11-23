const score = 400;

console.log(score.toString().split("0"));
console.log(score.toString().match(/0/));

// In JavaScript, the match() method is used to search a string for a match against a regular expression. It returns an array containing the results of the search, or null if no match is found. Here's a basic overview of how match() works:

// Pattern Matching: The method takes a regular expression as an argument and matches it against the calling string.

// Returns an Array: If a match is found, it returns an array containing the matched substrings. If no match is found, it returns null.

// Global and Case-Sensitive: By default, the search is case-sensitive. You can use flags like g for a global search and i for a case-insensitive search.

const city = "jaipur is the capital of India";
console.log(city.match(/i/g));

const balance = new Number(100);
console.log(typeof balance);  // Object

console.log(balance.toFixed(2));

const num = 123.8746;
console.log(num.toFixed(2));
console.log(num.toPrecision(4));
console.log(num.toPrecision(3));
console.log(num.toPrecision(2));

console.log(Number.isInteger(num));

const num1 = 1000000000000;
console.log(num1.toLocaleString('en-IN'));


// ##################################################

// Now we will talk about Math operations.

let x = 34.45;

// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.abs(-4));
// console.log(Math.sqrt(4));
// console.log(Math.min(2,3,4,5,6,7,1));

console.log(Math.random());
// It always gives the values between 0 and 1.

// If we want to get the random values bwtween any 2 numbers then:
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);