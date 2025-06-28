// Most Important Array Method - Map , Filter , reduce.

// Map -  Goes through each item in the array and changes it using your function.
//It gives you a new array with the changed items.

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);{ // num contains the item 
console.log(doubled);  // [2, 4, 6]
}

//Convert array of names to uppercase

const names = ["aman", "ravi", "neha"];
const uppercase = names.map(n => n.toUpperCase());
console.log(uppercase);

//From an array of objects, get an array of titles

const books = [
  { title: "Book A", year: 2020 },
  { title: "Book B", year: 2022 }
];

const titles = books.map(n => n.title);
console.log(titles);

//Format names and ages as strings

const people = [
  { name: "Aman", age: 25 },
  { name: "Ravi", age: 30 }
];

const newval = people.map(n => n.name + " is "+ n.age );
console.log(newval);

//Convert an array of numbers to their square values

const nums = [2, 3, 4];
const square = nums.map(n=> n*n);
console.log(square);

// Filter - Keep only that you need 

let values  = [ 1,10,5,4,9,2];
let fill = values.filter(n => n % 2 === 0);
console.log(fill);

// filter the name more than forue letters 

const firstnames = ["Aman", "Ravi", "Neha", "Shubham", "Raj"];
const filterNames = firstnames.filter(n=> n.length > 4);
console.log(filterNames);

// Filter numbers greater than 50

const scores = [10, 55, 80, 30, 100];
const greatervalue = scores.filter(n=> n<50);
console.log(greatervalue);


// reduce 

//const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//const fruitesCount = fruits.reduce((acc,num1)=> );
//console.log(fruitesCount);]

const no = [10, 20, 30, 40];
const addno = no.reduce((acc,n)=> acc+n,0);
console.log(addno);

const users = [{firstname :"Aman",lastname : "bisht",age:20},{firstname :"Amit",lastname : "bisht",age:25}
]

const output = users.reduce(function(acc,item){
  if(!acc[item.age]){
    acc[item.age]= [];
  }
  acc[item.age].push(item.firstname);
  return acc;

},{});

console.log(output);