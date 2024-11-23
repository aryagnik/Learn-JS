// Here also we will talk about arrays.

const arr1 = [1,2,3];
const arr2 = [4,5,6];

// If i want to merge them:
// arr1.push(arr2);
// console.log(arr1); // But it is taking arr2 as a new element and thus it is not looking like we merge them lets's try concat.
// console.log(arr1[3][2]);

const arr3 = arr1.concat(arr2);
console.log(arr3); // It is giving us the desired result but we can also try one new method called as spread.

// Spread: It spreads the array into individual elements.
console.log(...arr1);

// Merging the arrays using Spread.
const arr4 = [...arr1,...arr2];
console.log(arr4);

// Can also use spread to solve a function:
const sum = function(a,b,c){
    return a+b+c;
}
console.log(sum(...arr1));





// using flat method =  It is used when we want to spread out all the elements of our array into one array.

const newArray = [1,2,3,[4,5],[5,6,[7,8,[9,10]]]]
const n1 = newArray.flat(Infinity)
console.log(n1)
// Here infinity signifies the depth in which we want to open our arrays.





console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));
console.log(Array.from({name: "Aryan"}));  // Interesting Case.



let val1 = 100;
let val2 = 200;
let val3 = 300;
console.log(Array.of(val1,val2,val3));