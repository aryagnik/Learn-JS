// Date is an Object in JS.

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// We can create our own dates also.
let date1 = new Date(2020,1,23,5,4);
console.log(date1.toLocaleString());

let date2 = new Date("01-11-2017");
console.log(date2.toDateString());


// Now we can create timestamps using Date.now() and we can compare them with different timestamps and dates also.

let timestamp1 = Date.now();
let timestamp2 = Date.now();
let timestamp3 = Date.now();

console.log(timestamp1-date1.getTime());  // difference in milliseconds.

let currDate = new Date();
console.log(currDate.getMonth()+1);
console.log(currDate.getDay());
console.log(currDate.getFullYear());


// We can also customize the form in which we want our results.

let newDate = new Date();

const dayOfWeek = newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(dayOfWeek);