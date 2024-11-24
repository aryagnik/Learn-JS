// Here we will talk about loops for arrays.

// 1> (for of) loop

const arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
}

const greetings = "Hello World!";
for(let greet of greetings){
    console.log(greet);
}


// Maps:

const map = new Map();
map.set('IN',"INDIA");
map.set('US',"USA");
map.set('FR',"FRANCE");
console.log(map);
for(let count of map.keys()){
    console.log(count);
}
for(let count of map.values()){
    console.log(count);
}
for(let [key, value] of map){
    console.log(key,":-",value);
}


// Objects:

const obj = {
    name: "Aryan",
    age: 20,
}
// for(let [key,value] of obj){
//     console.log(key,":",value);
// }


console.log("**************************************");






// for in loop:

const arr1 = [100,200,300,400];
for(const num in arr1){
    console.log(arr1[num]);
}


const m1 = new Map();
map.set("91","India");
map.set("92","Pakistan");
map.set("00","Dubai");
// for(const tel in m1){
//     console.log(m1[])
// }

const obj1 = {
    name: "Aryan",
    age: 20,
}
for(const item in obj1){
    console.log(item,":",obj1[item]);
}


// Thus ""for in"" loop does not work for maps and work for objects and arrays.
// Thus ""for of"" works for maps, arrays but not for objects.





console.log("**************************************");






// ''for each'' loop
// Here we use function for printing and the function we use is a type of Callback Function means it will not have any name.
// In simple terms, forEach helps you go through all the items in a list and do something with each one, like printing them, adding them up, or anything else you need. 😊

const coding = ["js","Python","java","cpp","ruby"];

coding.forEach((item)=>{
    console.log(item);
})

// We can also print array elements using for each by sending reference of other function which will do printing.

function print(item){
    console.log(item);
}

const arr2 = ["bat","cat","rat","sat","fat"];
arr2.forEach(print);

// Now this forEach does not bring only "item", it also brings index and arr.
arr2.forEach((item,index,arr)=>{
    console.log(item);
    console.log(index);
    console.log(arr);
})



// We can also use for each to iterate over arrays having objects as their elements.

const arr3 = [
    {
        name: "Aryan",
        age: 20,
    },
    {
        name: "Kavyam",
        age: 14,
    },
    {
        name: "Tanuj",
        age: 21,
    }
]

arr3.forEach((item)=>{
    console.log(item.name);
})