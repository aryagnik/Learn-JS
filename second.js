"use strict";   // treat all JS Code as newer version code.

// alert(3+3);  // It will throw an error because we are using nodejs and not browser.

// DataTypes in JS are:
/*
1> number : let age = 18;

2> string : let name = "Aryan";

3> boolean : let flag = true/false;

4> bigint

5> null : standalone value. null amtlab khaali(kuch nahin).
Example in some situations where we have to send a number like AC temperature but if we do not get any value from server then we can't put 0 in the column otherwise the user will think that 0 is the temperature so in such situations we put NULL.
let temp = null;

6> undefined : when the value is not defined yet or assigned.
let state; then here the value of state is undefined.

7> symbol : used to set uniqueness among different blocks.

8> object
*/

let age = 20;

console.log(typeof age);

console.log(typeof null) // ---> Object

console.log(typeof undefined) // ---> undefined