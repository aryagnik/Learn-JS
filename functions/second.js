// Now we will talk about Scope = {}.
// So basically curly braces defines the scope.

var c = 300;

if(true){    // {} is a blockscope as a whole.
    let a = 20;
    const b = 10;
    var c = 30;
}
// Values outside the block scope are called as Global Values and can be used by values inside block scope but values declared inside block scope can not be used by values outside block scope.

// console.log(a);   Error due to block scope by let
// console.log(b);   Error due to block scope by const
console.log(c);  // But var is not affected by block scope and thus we do not use it much.

let d = 10;
if(true){
    d = 20;
    console.log("Block Scope",d);
}
console.log("Global Scope",d);
// In this both global and block scope will have same values of "d" as d is not declared separately in the global and block scope.



// Now:
let e = 200;

if(true){
    let e = 5;
    console.log("Block Scope",e);
}

console.log("Global Scope",e);


// Global Scope in the console of a web browser and in the terminal of node is different.


// Now we will talk about Closures.
// here in nested scopes, child scope can access the elements of the parent scope but vice versa is not true.


function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);   // No error as we are executing this while username is in its scope.
    }
    // console.log(website);   // It will give an error as scope of website gets over before this.
    two();   // If I comment out this call of two() and only one() is being called then two() will not be executed.
}
one();



// Mini-Hoisting:

addOne(4);   // No error
function addOne(number){
    console.log(number+1);
}


// func(6);  // Error due to hoisting as in this func variable will be first declared on the top of the script then func(6) will be called but it will give error as func is still not initialized or assigned any function, it is just declared and thus, we will get an error.

const func = function addTwo(number){
    console.log(number+2);
}