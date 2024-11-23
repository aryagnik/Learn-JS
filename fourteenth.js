// In previous file we learnt about how to generate objects using literals and in this video we will learn about how to generate objects using Constructors.

const obj1 = new Object();   // Using Constructor, it is a Singleton Object
const obj2 = {};   // Using string literal, not a Singleton Object

console.log(obj1, obj2);



// Now here if we have to merge 2 or more arrays then there are 2 methods to do it:

// 1> using Object.assign():

const object1 = {1:"a", 2:"b"};
const object2 = {3:"c", 4:"d"};

const object3 = Object.assign(object1, object2);
console.log(object3);

// 2> using spread method:

const object4 = {...object1, ...object2};
console.log(object4);



// Now we will learn about keys and values in objects.
const animals = {
    king: "lion",
    bird: "peacock",
    fastest: "cheetah",
    largest: "whale",
}

const arr = Object.keys(animals);
const arr1 = Object.values(animals);
const arr2 = Object.entries(animals);
console.log(arr);
console.log(arr1);
console.log(arr2);

console.log(animals.hasOwnProperty("fastest"));