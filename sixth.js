// In this we will look about Data Types in JS.
// JS is a dynamically typed language which means that variables in JS do not have a fixed type and their type can change at runtime based on the assigned value. Means here the type of data is determined during the execution of the code and we do not have to explicitly define the datatype of variable like in C we do: int n = 10; like that.

// In JS the datatypes are typically divided into 2 groups:
// 1> Primtive                            2> Non-Primitive

/**
Primitive ones are:
String, Number, Boolean, null, undefined, Symbol, BigInt   =  7 datatypes.

-> These are all Call By Value ones means that if we use them in any equation or loop then their copies are generated.
 */

/**
Non-Primitive ones are:
Array, Objects, Functions

-> These are all Call By Reference ones means that if we use them and make a change in their value then the change will be reflected in them because here we are not making copies of them.
 */

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 3245184371857891578715n;
console.log(bigNumber);
console.log(typeof bigNumber);

const heros = ['Salman', 'Amir'];
console.log(heros);

let myObj = {
    name: "Aryan",
    age: 20
}
console.log(myObj.name);

const func = function(){
    return "hello";
}
console.log(func());

// 1) Primitive Datatypes and their "type of"
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes and their "type of"
// Arrays  =>  object
// Function  =>  function object
// Object  =>  object