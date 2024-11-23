// Here we will talk about Stack and Heap.

// All the variables which we make and are Primitive, they all go to Stack while all the Non-Primitive ones goes to Heap.

// When we try to take a value already stored in stack then stack returns us the copy of that value while heap returns us the reference to that value.

let age = 20;
let newAge = age;
newAge = 40;
console.log(age);
console.log(newAge);   // Only newAge variable will get changed.

let myObj = {
    name: "Aryan",
    age: "0"
}

let newObj = myObj;

myObj.name = "Kavyam";  // Values will be changed in the original myObj also as here we are not giving the copy of object but we are giving the refernce to that object.

console.log(myObj);
console.log(newObj);