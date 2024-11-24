// Here we will talk about this keyword and arrow functions.

// We use this keyword when we have to talk about the current context of any scope.

const user = {
    name: "Aryan",
    age: 20,

    welcomeMsg(){
        console.log(this.name);
        console.log(this);   // It will output the user object.
    },
}

user.welcomeMsg();
user.name = "Kavyam";
user.welcomeMsg();

console.log(this);  // It will return {} empty in node env as there is no context in global scope here and in browser we will get Window Object(global object).
// In a Node.jsenvironment, the global context (outside any function) has this referring to an empty object {} because Node.jsmodules have their own scope.
// In a browser environment, this in the global context refers to the window object, which is the global object in browsers.


function chai(){
    console.log(this);  // refers to the global object.
    let username = "hitesh";
    // username = "hitesh";
    console.log(this.username);   // undefined, because username is not a property of a global object but if we declare username like: username = hitesh, no it has a global scope and thus it will be give "hitesh" as the answer.
}
chai();



// Now we will talk about Arrow Functions:

const f1 = ()=>{
    let username = "Aryan";
    console.log(this.username);  // result will be undefined as arrow function captures this value from the surrounding context(scope) and use it throughout their execution.In arrow functions this does not refer to obj, it refers to surrounding scope.(global scope in NodeJS and Window Object in Browsers).
    console.log(this);   // {}
}
f1();




// Arrow Function:

// 1st way with parenthesis{}, need to write return if we want to return something. Explicit Declaration
const addTwo = (num1,num2)=>{
    console.log(num1+num2);
    return "yes";
}
addTwo(4,3);

// 2nd way without parenthesis: Implicit declaration
const addThree = (num1,num2,num3) => num1+num2+num3;   // Here no need to write return.

console.log(addThree(1,2,3));

// 3rd way using () and no {}.
const addFour = (n1,n2,n3,n4) => (n1+n2+n3+n4);

console.log(addFour(1,2,3,4));

// How to return an object.
const obj = ()=>({name: "hitesh"});

console.log(obj());