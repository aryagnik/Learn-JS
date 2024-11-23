// Now we will talk about the comparison of datatypes.

// console.log(3>=2);
// console.log(3==2);
// console.log(3!=2);
// console.log(3<=2);

// Some tricky comparisons:

console.log("2">1);
console.log("02">"1");
console.log("2"=="2");

console.log(null>0);  // False
console.log(null == 0);   // False
console.log(null>=0);   // True
// Because in JS working of == and <,>,<=,>= is different. <,>,<=,>= while comparing convert null to 0 and then check if null >= 0 and thus returns true.
// Thus, in JS mechanism of Comparion and Equality Check is different.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// All False.

// Strict Check: ===
// In this we not only check the value but also the datatype.

console.log("2" == 2);  // true, as it will also convert the string into value before checking and thus only check the value.
console.log("2" === 2);  // false