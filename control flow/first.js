// In control flow we determine the flow in which code will be executed using some conditional operators like <,>,<=,>=,==,===,!=,!==.
// 3=="3" => true, 3==="3" => false
// 3!="3" => false, 3!=="3" => true

/*
let temp = 40;

if(temp<40){
    console.log("thandi hai");
    const name = "Aryan";
}
else{
    console.log("garmi hai");
}
*/


/* Implicit Scope
const balance = 100;

if(balance <1000) console.log("Low Balance"), console.log("Yaaar")
    , console.log("baass");
*/


// if-else ladder
/*

const age = 18;
if(age<18){
    console.log("child");
}
else if(age>40){
    console.log("human");
}
else{
    console.log("Adult");
}
*/


/*
const login = true;
const debit = true;
if(login&& debit && 2==2 && "hi" || false){
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
}
*/


/*
const num = 1;
switch(num){
    default: console.log("Kuch Nahin");
    break;
    case 1: console.log("January");
    break;
    case 2: console.log("February");
    break;
}
*/

// Fall-Through = The condition in which we do not add break under every case and due to which if any one case gets matched then all the cases under it also gets executed.