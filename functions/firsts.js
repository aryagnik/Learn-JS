// Here we will talk about making functions.

// function to add 2 numbers.

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
addTwoNumbers(3,4);

// Here the values which we pass when we call the function are called as Arguments while number1 and number2 written along side the function in parenthesis are called as Parameters.

// In JS we can make variables to the function.

const answer = addTwoNumbers(5,6);
console.log(answer);

function loginUserMessage(username = "Kavyam"){
    return `${username} just logged in.`
}
console.log(loginUserMessage("Aryan Dave"));
console.log(loginUserMessage());
// Here username has a default value = Kavyam for a condition when the function is called without anu argument.




// Now we will talk about the case when we have to make a function but we do not know about the number of arguments which we will have.
// So to solve this problem we use (...) Rest Operator. The Rest Operator collects multiple arguments and packs them into a single array.
// Spread Operator also has the same symbol (...) but it takes an array or an object and spreads its elements out into individual elements.

function calculatePrice(product1, ...products){
    return products;
}

console.log(calculatePrice("AC","Wheels","Corn"));


// We can also make a function which accepts an object as its argument.

const obj = {
    name: "Aryan",
    age: 20,
}

function biodata(anyObject){
    console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`);
}
biodata(obj);



// Similarly we can also make a function which takes array as one of its arguments.

const arr = [100,200,300,400,500];

function getThirdValue(array){
    console.log(array[2]);
}
getThirdValue(arr);