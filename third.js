// Here we will talk about Conversion of datatypes.

let age = "33";

let ageInNumber = Number(age);

console.log(typeof(ageInNumber));
console.log(ageInNumber);
// But here only if boolean or numbers are there in the string then obly we can generate the corresponding numbers otherwise it will not generate any error but the answer will be NaN or undefined.

let x = "33Aryan";
let x1 = Number(x);
console.log(typeof(x1));
console.log(x1);

let y = null;
let y1 = Number(y);
console.log(typeof(y1));
console.log(y1);

let z = undefined;
let z1 = Number(z);
console.log(typeof(z1));
console.log(z1);

/*
"33" => 33
"33Aryan" => NaN
true => 1; false => 0
*/

let isLoggedIn = NaN;

let boolIsLoggedIn = Boolean(isLoggedIn);

console.log(boolIsLoggedIn);  // It will return true;

/**
 1 => true
 0 => false
 "" => false
 "Aryan" => true
 null => false
 undefined => false
 NaN => false
 */


// Similarly we can perform String conversion.

let marks = 33;
let stringMarks = String(marks);

console.log(stringMarks);
console.log(typeof(stringMarks));

let date = true;  // --> will convert it to "true".
let stringDate = String(date);

console.log(stringDate);
console.log(typeof(stringDate));