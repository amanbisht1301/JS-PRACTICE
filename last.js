// // JavaScript Practice Questions for QA
// // Section 1: Variables, Scoping & Hoisting
// // 1. Declare a let, const, and var variable and try reassigning all three what happens?

// let x = "aman";
// x = "chaman";
// console.log(x);

// var y = 10;
// y = 20;
// console.log(y);

// // const z = true;
// // z = false;
// // console.log (z); this will not work as const value cant be changes once declare in js.
// // 2. What happens if you log a variable before it's declared using:
// // - let?
// // - var?
// // - const?


// // console.log (value); for var it will give undefined for other it will show error.
// // const value = 100; cannot access before initialising.

// // 3. Create a function with a var inside and try to access it outside the function.
// // function run(val){
// //     var running = "Boy is running";
// //     return running;

// // };

// // run("Hero");
// // console.log (running);

// //-----------------------------------------//

// // Section 2: Primitive Data Types
// // 4. Declare variables with values of type: number, string, boolean, undefined, null.

// let num = 10;
// let str = "aman";
// let bool = true;
// let n = null;
// let u = undefined;

// console.log (num,str,bool,n,u);


// // 5. Create a function that takes a name (string) and age (number) and prints a greeting.

// function greet (name , age){
//     console.log (`My name is ${name} and age is ${age}`);
// };

// greet ("Aman" , 30);



// // Section 3: Non-Primitive Types - Objects
// // 6. Create a book object with keys: title, author, year.

// let title = {
//     author : "Aman Bisht",
//     year : "2025"
// };

// console.log (title);


// // - Update the year
// console.log (title.year = "1995");
// console.log (title);

// // - Delete the author
// delete title.author;
// console.log(title);

// // - Add a nested ratings object with goodreads and amazon
// title.rating = {goodreads:"4 star",
//     amazon : "5 star"
// }
// console.log (title);

// // - Write a function to print all properties using a for...in loop.
// function printall(title){
//     for (let i in title){
//         console.log(title[i]);
//     }
// };

// printall(title);



// // Section 4: Arrays
// // 7. Create an array tools = ["Postman", "JIRA", "Zephyr"]

// let tool = ["Postman", "JIRA", "Zephyr"];


// // - Add "Playwright" to the end

// tool.push("Playwright");
// console.log(tool);

// // - Remove "JIRA"
// tool.pop();
// console.log(tool);

// // - Print each tool using forEach()
// tool.forEach (element => console.log(element));


// // 8. Write a function printArray(arr) that prints each item using a for...of loop.
// function printArray(arr){
//     for (let i of tool){
//         console.log(i);
//     }
// };

// printArray(tool);


// // Section 5: Array Methods
// // 9. Given [10, 20, 30], use:
// // - map() to double each value
// // - filter() to return values > 15
// // - reduce() to get the sum of all numbers

// let arr = [10, 20, 30];
// let newarr= arr.map(element => element*2);
// console.log(newarr);

// let newarr1 = arr.filter(element => element >15);
// console.log(newarr1);

// let newarr2 = arr.reduce ((acc,element)=> acc+element,0);
// console.log(newarr2);

// // 10. Convert ["AMAN", "BISHT"] to lowercase using map()

// let currentArray = ["AMAN", "BISHT"];
// let newcurrentArray = currentArray.map(element=> element.toLowerCase());
// console.log(newcurrentArray);

// // Section 6: High-Order Functions
// // 11. Given an array of users:
//  let users = [
//  { name: "Aman", role: "QA" },
//  { name: "Ravi", role: "Developer" },
//  { name: "Sana", role: "QA" }
// ];
// // - Use filter() to get only QA

// let filterQA = users.filter(element => element.role === "QA");
// console.log(filterQA);

// let filterQA1 = users.filter(element => {
//     if (element.role === "QA"){

//         console.log(element.name);

//     }
// });

// // - Use map() to extract names

// let extractname = users.map(element=> element.name);
// console.log(extractname);


// // - Use forEach() to print: Aman is a QA
// users.forEach (function(users){
//     if (users.name === "Aman"){
//         console.log(`${users.name} is a ${users.role}`);
//     }
// }  );

// // Section 7: Asynchronous JS - setTimeout
// // 12. Print "Hello" after 2 seconds using setTimeout

// setTimeout(function (){
//     console.log("Hello")
// },2000);

// // 13. Print numbers 1 to 5 with a 1-second delay between each using setTimeout

// for (let i = 1 ; i <= 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000);
// }


// // Section 8: Callback Functions
// // 14. Create a function greet(name, callback) 
// // that prints "Hello <name>" and then calls the callback to
// // say "Goodbye!"

// function greet1(name, callback){
//     console.log(`Hello ${name}`);
//     callback();
// };

// function say(){
//     console.log("Bye");
// };

// greet1("Aman", say);


// 15. Write a function processArray(arr, callback) 
// that calls the callback on each item of the array.

let fruits = ["Orange","Pineapple","Apple","Dragon Fruit"];

function processArray(fruits, callback2) {
    for (let i of fruits){
        console.log (i);
        callback2()
    }


};

function calling (){
    console.log ("calling everytime");
};


processArray(fruits , calling);


// Section 9: Promises
// 16. Create a promise that resolves with " Test Passed" after 2 seconds.
 let promise = new Promise((resolve) =>{
        resolve ("Test Passed");
 });

 promise.then(message => console.log(message));

 let promise1  = new Promise (function(resolve ,reject){
    setTimeout(()=>{
        resolve("Test Passed fully");
    },2000)

 });

promise1.then(message => console.log(message));


// 17. Create a function runTest(passed) that:
// - Resolves if passed === true
// - Rejects otherwise
// - Handle both using .then() and .catch()


function runTest(passed){
    return new Promise((resolve , reject ) =>{
    if (passed === true){
        resolve ("Test Run is Passed");
    }
    else{
        reject("Test run is Failed");
    }
            
})};


runTest(false)
.then(message => console.log(message))
.catch (error => console.log (error));


// 18. Chain a promise: Start with 5 multiply by 2 add 10 print final result.

let pro = new Promise(function (resolve, reject) {
    resolve(5); // start with 5
});

pro
    .then(value => value * 2)      // 5 * 2 = 10
    .then(value => value + 10)     // 10 + 10 = 20
    .then(result => {
        console.log("Final Result:", result); // Output: Final Result: 20
    });

// Section 10: async/await
// 19. Convert Q16 into async/await



// 20. Create 3 async functions: login(), fetchData(), logout(), each with delays.
// - Call them in order using await inside runAll()
// 21. Create a try/catch block to handle a function that may reject based on a passed flag.
// Bonus: Mixed Real-World QA Simulations
// 22. Simulate a test suite using Promises:
// - checkLogin() 1s delay
// - checkDashboard() 2s delay
// - checkLogout() 1s delay
// Chain them using async/await.
// 23. Mock an API response that resolves after 1.5s with { status: 200, data: "OK" }.
// - Print "Test passed" if status === 200, else "Test failed"