// String
let name = "Tulsi";

// Number
let age = 25;

// Boolean
let isStudent = true;

// Null
let job = null;

// Undefined
let hobby;

// Object
let man = { name: "Tulsi", age: 25 };

// Array
let myArr2 = ["apple", "banana", "mango"];

  // ARRAY

let arr3 = ["apple", "banana", "mango"];

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach method
fruits.forEach(function(fruit) {
  console.log(fruit);
  });


// METHODS IN ARRAY 

//PUSH
let myarr4 = ["apple", "banana"];
myarr4.push("mango");
console.log(myarr4); // ["apple", "banana", "mango"]
//POP
myarr4.pop();
console.log(myarr4); // ["apple", "banana"]
//UNSHIFT
myarr4.unshift("kiwi");
console.log(myarr4); // ["kiwi", "apple", "banana"]
//SHIFT
myarr4.shift();
console.log(myarr4); // ["apple", "banana"]
//SPLICE
myarr4.splice(1, 1, "orange"); // at index 1, remove 1 item, add "orange"
console.log(myarr4); // ["apple", "orange"]

//ADD IN BETWEEN 

let colors = ["red", "blue", "green"];
// Insert "yellow" between "blue" and "green"
colors.splice(2, 0, "yellow");
console.log(colors); // ["red", "blue", "yellow", "green"]

//SLICE
let fruits = ["apple", "banana", "cherry", "mango"];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ["banana", "cherry"]

       //OBJECT

let person = { name: "Tulsi", age: 25, city: "Pune" };

// for...in loop
for (let key in person) {
  console.log(key + ":", person[key]);
}
     //STRING

let text = "hello";

// for loop
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// for...of loop
for (let char of text) {
  console.log(char);
}

// example 
let myArr = [1,23,4,5,6]
for(let i=0;i<myArr.length ;i++)
{
 myArr[i]= myArr[i]+2;
console.log(myArr[i]);

}
