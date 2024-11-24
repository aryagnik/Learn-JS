// Here also we will talk about Flow Control.

/*
Falsy Values:
false, 0, -0, BigInt 0n, "", null, undefined, NaN

Truthy Values:
true, "0", 'false', " ", [], {}, function(){} Empty Function 
*/


/*
false == 0, false == "", 0 == "" : These all are true.
*/


// How to check for empty arrays.
const arr = [];
if(arr.length === 0){
    console.log("Array is Empty");
}


// How to check for empty objects.
const obj = {};
if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}



// Nullish Coalescing Operator(??) : It is especially made for null and undefined.

let val1;
val1 = 5 ?? 10;   // val1 = 5
val1 = null ?? 15;   // val1 = 15
val1 = undefined ?? 20;   // val1 = 20
val1 = null ?? undefined;    // val1 = undefined
val1 = null ?? 10 ?? undefined;   // val1 = 10
val1 = null ?? undefined ?? 10;   // val1 = 10

console.log(val1);


// Ternary Operator(?):  condition ? true : false

const price = 100;

price >= 50 ? console.log("Expensive") : console.log("Cheap");