// Here we will talk about filter, map and reduce.

const map = new Map();
map.set(1, "Aryan");
map.set(2, "Kavyam");
map.set(3, "Tanuj");
map.forEach((key, value) => {
  console.log(key, value);
});

const obj = {
  name: "Aryan",
  age: 20,
};
// obj.forEach((key)=>{
//     console.log(key);
// })

// Thus, using forEach loop we can iterate arrays and maps and set collections but not objects. But we can iterate object.keys and values.

const arr = [1, 2, 3, 4];
const ans = arr.forEach((item) => {
  console.log(item);
  return item;
});
console.log(ans);

// Thus we saw that forEach can help us in printing or iterating the array but it is not helping us in returning the values, so for that we have to use  map, reduce, filter.

// filter:
/*
The filter method in JavaScript is used to create a new array filled with elements that pass a test provided by a function. It doesn't change the original array but returns a new array with the elements that satisfy the condition.
How It Works:
--> You have an array of elements.

--> You call the filter method on this array.

--> You provide a callback function that contains the condition to test each element.

--> The method returns a new array with only the elements that pass the test.
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = nums.filter((item) => {
  return item > 4;
});
console.log(newNums);

const userBooks = [
  {
    title: "The Silent Sea",
    genre: "Science Fiction",
    publish: 2022,
    edition: "First",
  },
  {
    title: "Whispers in the Dark",
    genre: "Mystery",
    publish: 2019,
    edition: "Second",
  },
  {
    title: "The Lost Kingdom",
    genre: "Fantasy",
    publish: 2021,
    edition: "First",
  },
  {
    title: "Echoes of the Past",
    genre: "Historical Fiction",
    publish: 2018,
    edition: "Third",
  },
  {
    title: "Beyond the Horizon",
    genre: "Adventure",
    publish: 2020,
    edition: "First",
  },
  {
    title: "Shadows of Time",
    genre: "Thriller",
    publish: 2017,
    edition: "Second",
  },
  {
    title: "The Hidden Truth",
    genre: "Non-Fiction",
    publish: 2023,
    edition: "First",
  },
  {
    title: "Love and Loss",
    genre: "Romance",
    publish: 2015,
    edition: "Fourth",
  },
  {
    title: "Voices from Afar",
    genre: "Travel",
    publish: 2021,
    edition: "Second",
  },
  {
    title: "Tales of Wonder",
    genre: "Fantasy",
    publish: 2016,
    edition: "Third",
  },
];

// Give the name of the books whose publish date is before 2016.
const firstTask = userBooks.filter((item)=>{
    return item.publish < 2019 && item.genre === "Romance";
})
console.log(firstTask);




// Map: The primary purpose of the filter method is to create a new array with elements that pass a specified test. It doesn't perform transformations or operations on the elements themselves, like addition or other arithmetic operations. For that, you would use the map method.

const nums1 = [1,2,3,4,5,6,7,8,9,10];
const nums2 = nums1.map((item)=>{
    return item+10;
})
console.log(nums2);


// Now we will look at the chaining of map and filter.
const nums3 = [1,2,3,4,5,6,7,8,9];
const nums4 = nums3.map((item)=>item*10).
                    map((item)=>item*2).
                    filter((item)=>item>50);
console.log(nums4);



// Reduce:
/**
The reduce method in JavaScript is a powerful array method that allows you to process an array's elements and reduce them to a single value. This could be the sum of all elements, the product, an accumulated object, or any other aggregate result.

How reduce Works:
You have an array.

You call the reduce method on this array.

You provide a callback function that processes each element of the array.

Optionally, you provide an initial value for the accumulator.
 */

const array = [1,2,3,4,5];
const answer = array.reduce((acc, currval)=>{
    return acc+currval;
},0);
console.log(answer);

const answer1 = array.reduce((acc, currval)=>Math.min(acc,currval),Infinity);
console.log(answer1);