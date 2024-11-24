// Here we will talk about IIFE(Immediately Invoked Function Expressions)
// Sometimes we have functions which needs to get run everytime the file is opened.

// For that we use ()parenthesis.

(function needToRush(){
    console.log("Flash");
})();  // semicolon is required as the IIFE does not know where to end its context.

// just like we do:  func() === (function func(){})()

// Sometimes we have to face problems due to the pollution causes by the global scope and to get safe from that corruption we use IIFE.


((name)=>{
    console.log(name); 
})('Aryan');