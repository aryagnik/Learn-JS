// Here we will learn about strings in detail.

const name = "Aryan";
const age = 20;

// There are two ways to concatenate a sentence and variables:

// 1> Using +
console.log("Hello "+name+". Your age is: "+age);

// 2> Using String Interpolation: In this we use the part of the sentence using backticks and variables are written inside parenthesis.
console.log(`Hello my name is ${name} and my age is ${age}`);

const city = new String("Jaipur");
console.log(typeof city);  // -> object
console.log(typeof name);  // -> string
console.log(city.length);
console.log(name.length);
console.log(name.toUpperCase());
console.log(city.toUpperCase());
console.log(name[0]);
console.log(city[0]);
console.log(name.charAt(3));
console.log(city.charAt(4));

const substr = city.substring(-8,4);
console.log(substr);

const substr1 = city.slice(-4,4);
console.log(substr1);

const str = "           Aryan       ";
const str1 = str.trim();
const str2 = str.trimStart();
const str3 = str.trimEnd();
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);

console.log(str1.replace("Aryan","Kavyam"));
console.log(str1);

console.log(str1.includes("aryan"));


const str4 = "url-sjdn-sdmkmd-sfdlk";
console.log(str4.split("-"));