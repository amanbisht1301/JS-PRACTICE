//reduce ()
//Given:
const items = [
  { name: 'pen', quantity: 3 },
  { name: 'book', quantity: 7 },
  { name: 'notebook', quantity: 5 }
];

// Task:
const totalQuantity = items.reduce((acc,num)=> acc+num.quantity,0);
console.log(totalQuantity); // Output: 15