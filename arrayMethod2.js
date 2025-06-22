// Most Important Array Method - Map , Filter , reduce.

// Map -  Goes through each item in the array and changes it using your function.
//It gives you a new array with the changed items.

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);  // num contains the item 
console.log(doubled);  // [2, 4, 6]



const names = ["aman", "ravi", "neha"];
const uppercase = names.map(n => n.toUpperCase());
console.log(uppercase);


const books = [
  { title: "Book A", year: 2020 },
  { title: "Book B", year: 2022 }
];

const titles = books.map(n => n.title);
console.log(titles);

const people = [
  { name: "Aman", age: 25 },
  { name: "Ravi", age: 30 }
];

const newval = people.map(n => n.name + " is "+ n.age );
console.log(newval);

const nums = [2, 3, 4];
const square = nums.map(n=> n*n);
console.log(square);