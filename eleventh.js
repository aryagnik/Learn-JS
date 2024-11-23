// Here we will talk about arrays.
// Arrays in JS can have different datatypes in one array, they are resizable but not Associative means we can't access their elements using strings as indices. ex myarr['one'].
// Here shallow copies are made which means that if we make one array using other array then the copy is not shared to the new array instead of it the common reference is shared due to which the changes made in one array can cause changes in the other array also.


// const myArr = [1,2,3,4,5,true,"Aryan","Dave"];
// const myArr1 = myArr;
// myArr1.push(34);
// console.log(myArr);


// Now we will talk about Array Operations:
const nums = new Array(10,20,30,40);
nums.push(100);  // add value at the last of the array
console.log(nums);
nums.pop();   // removes last value of the array
console.log(nums);
nums.unshift(0);   // adds value at the start of the array
console.log(nums);
nums.shift();   // removes the first value of the array
console.log(nums);
console.log(nums.includes(20));
console.log(nums.indexOf(30));


const newArr = nums.join();   // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr);
console.log(typeof(newArr));


// Difference between Slice and Splice:

const arr = [1,2,3,4,5,6];

console.log("A",arr);

// Slice:
const n1 = arr.slice(1,3);
console.log(n1);
console.log("B",arr);

// Splice:
const n2 = arr.splice(1,3);
console.log(n2);
console.log("C",arr);


/*
Slice vs Splice:
-> Slice only return the elements in the specified range and the last value in the specified range is not included.[). and the original array is not changed.
-> Splice returns the elements in the specified range and both the starting and the ending limits are included. It also removes all those elements from the original array and thus changes the array.
*/