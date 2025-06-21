//Three Array Methods also called a higher order functions
//Map, Filter and reduce 

//map()- change each item as per the function 

let number  = [1,2,3];
let doubled = number.map(num =>num*2);// num is the item inside the array 
console.log(doubled);

let rollno = [101,102];
let adddate = rollno.map(num1 => num1+2025);// num 1 item inside the array 
console.log(adddate);  



const nums = [1, 2, 3, 4];
let square = nums.map(value => value*2);
console.log(square);

const numbers = [1, 2, 3];
let convertString = numbers.map(value => String(value));
console.log(convertString);

const arr = [5, 10, 15];
let add = arr.map(value => value+10);
console.log(add);






const items = [
  { id: 1, price: 100 },
  { id: 2, price: 150 }
];
// Apply 10% discount and return updated objects

//const discount = items.map(discountValue => discountValue.price*0.90);
//console.log(discount);

const discount = items.map(item => ({
  ...item,
  price: item.price * 0.9
}));
console.log(discount);



const cities = [
  { name: 'Delhi', country: 'India' },
  { name: 'Paris', country: 'France' }
];
const formatted = cities.map(city => `${city.name}, ${city.country}`);
console.log(formatted);











