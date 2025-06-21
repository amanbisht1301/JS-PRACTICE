//Filter ()

let val = ["Aman","Amit","men"]
let wantAname = val.filter(i => i.includes("A"));
console.log(wantAname);


// Given:
const users = [
  { name: 'Aman', age: 25 },
  { name: 'Ravi', age: 17 },
  { name: 'Neha', age: 19 },
];

//Filter out users who are under 18
let underage  = users.filter(i => i.age<18);
console.log(underage);


// Given:
const products = [
  { name: 'Laptop', inStock: true },
  { name: 'Mouse', inStock: false },
  { name: 'Keyboard', inStock: true },
];

// Task:
const availableProducts = products.filter(i => i.inStock===false );
console.log(availableProducts); 
// Output: [{ name: 'Laptop', inStock: true }, { name: 'Keyboard', inStock: true }]
