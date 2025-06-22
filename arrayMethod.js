// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// pop(): Removes the last element from an array and returns that element

let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]
fruits.pop();
console.log(fruits);  // Output: ["apple", "banana"]

// shift(): Removes the first element from an array and returns that element. This method changes the length of the array.
//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

let colours  = ["red","green","blue","orage","yellow"];
console.log(colours);
colours.shift();
console.log(colours);
colours.unshift("Kiwi");
console.log(colours);

//splice(): Adds/removes items to/from an array, starting from a specific index

let num = [19,20,36,42,7];
console.log(num);
num.splice(2,1,19,202,1000); // 2 = index , 1 = how many element need to change after that index , number added to that index 
console.log(num);

//slice(): Returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included)
 
let num1 = [1000,2000,3000,5000,500];
 console.log(num1);
 numvalue = num1.slice(1,3);
 console.log(numvalue);

//indexOf(): Returns the first index at which a given element is found in the array, or -1 if it is not found.

let fruitsnew = ["apple", "banana", "orange"];
let index = fruitsnew.indexOf("banana");  
console.log(index);

// includes(): Determines whether an array includes a certain value among its entries, returning true or false.

let electronic = ["TV","Fan","AC","Lights"];
let check = electronic.includes("Yellow");
console.log(check);

//reverse(): Reverses the elements of an array in place. The first array element becomes the last, and the last becomes the first.

let Tv  = ["Samsung","Amazon Basics","Lg"];
let rev = Tv.reverse();
console.log(rev);

//sort(): Sorts the elements of an array in place and returns the sorted array.

let newfruits = ["banana", "apple", "orange"];
newfruits.sort();  
console.log(newfruits);  // Output: ["apple", "banana", "orange"]