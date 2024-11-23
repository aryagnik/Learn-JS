// Here we will talk about operations.

let value = 3;
let negValue = -(value);
console.log(negValue);

// Basic Operations in JS are:

console.log(2+2);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);
console.log(2**3);  // 2 ki power 3 = 8

// Concatenating Strings

let str1 = "Hello";
let str2 = " Aryan";
let str3 = str1+str2;
console.log(str3);

// Adding numbers and string using +

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");    // 32
console.log(1+2*2+"2");

// Answer is that in JS if string is first then all the operations are performed considering string to be the target datatype or if the string is last or after some values then the operations before the string are performed as they used to be performed.

// Some tricky operations:

console.log(+true);
console.log(+false);
console.log(+"");

// In these due to (+) with which we are incrementing the values of true and false and thus they gets converted from string or boolean to NUMBER.

let x = 3;
let y = 4;
let z = x*(y++);
console.log(z);
console.log(y);

let num1, num2, num3, num4;
num1 = num2 = num3 = num4 = 2+2;
console.table([num1,num2,num3,num4]);