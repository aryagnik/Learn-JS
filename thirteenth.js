// Here we will talk about objects.

// There are 2 ways to create an object:
// 1> Using Constructor
// 2> Using Literals

// A singleton object in programming is a design pattern that restricts the instantiation of a class to exactly one instance. This single instance is accessible globally and can be used whenever the object of that class is needed. Whenever we make an object using literals then it is not a singleton object. And it will always be a singleton object when it is made using a constructor.

// Creating objects using Object Literals.

const mySym = Symbol("key1");
const JsUser = {
  name: "Aryan",
  age: 20,
  email: "aryan@google.com",
  password: "main nahin bataunga",
  [mySym]: "mykey1", // Correct way to put symbols into an object.
};

console.log(JsUser.name); // using (.) we can access elements whose keys are not written in "".
// 2nd way to acccess object elements
console.log(JsUser["name"]); // using [] we can access elements whose keys are written in "".

console.log(JsUser[mySym]); // Correct way to print symbols from an object.

// We can make changes to the object elements:
JsUser["height"] = 200; // added new element
JsUser["password"] = "Jaipur11"; // changed the existing element

console.log(JsUser);

// If we want to make sure that no one could make any changes to the object then we have to freeze the object.

Object.freeze(JsUser);
// Now our object is freezed so even if we try to make any change to the object then also we will not get any error but our object will also not change.

JsUser.password = "Aryan11";

console.log(JsUser); // No change occured.

// In objects we can add anything as elements like variables, functions, other objects everything.

const obj = {
  name: "Aryan",
  age: 20,
};

obj.greeting = function () {
  console.log("hey There, keep smiling");
};

console.log(obj.greeting); // It will just share the reference to that function.
console.log(obj.greeting());

obj.greetingAdvance = function () {
  console.log(`Hey there ${this.name}, keep smiling okay!`);
};

console.log(obj.greetingAdvance());
