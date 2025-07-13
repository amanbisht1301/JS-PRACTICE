let Fname = "Aman bisht";
console.log(Fname);

function additionoftwonumber(a,b){
    return a+b;
}

additionoftwonumber(10,20);
console.log(additionoftwonumber(10,20));

function scope (){
    var heroname = "Captain america";
    if (true){
        var villan = "Thanos"; // var is kept thats why it is working if we keep let it will fail 
        console.log(villan);
    }
    console.log(heroname);
    console.log(villan);
}
scope();

//Object 

let family = {
    familymember : 5,
    familytype: "nuclear",
    familyearningmembers : 3
}

console.log(family);
console.log(family.familymember);
family.totalSalary = "50 lakh"
console.log(family);


//Create an object named book with properties: title, author, and year.

let book = {
    title:"Testingbook",
    author:"Aman Bisht",
    year:"2025"
}

//Update the year of the book.
console.log(book);
book.year = 1995;
console.log(book);

//Delete the author property

delete book.author;
console.log(book);

//Check if the property title exists.

console.log('title'in book);

//Create an object student with: name, rollNo marks object: { math: 80, english: 70 }

let student = {
    name : "Aman",
    rollno : 4,
    marks : {
        math : 80,
        english : 70
    }
}

//Print the math marks.
console.log ("math marks : " + student.marks.math);

//Add a new subject science with 85 marks.
student.marks.science = 85;
console.log("scienec marks: " +student.marks.science);

//Write a function that takes the student object and prints all subject marks.

function subjectmarks(){
    console.log(student.marks);
}

subjectmarks();

//Loop through an object’s keys and print each key and value.

for (let key in book) {
    console.log(`${key} : ${book[key]}`);
}


//Function to count keys in an object
//object values will give whole object but in array 
//Object.keys() is a built-in JavaScript method that returns an array of all the enumerable keys (property names) of an object.
function countKeys(obj) {
    return Object.keys(obj).length;
}

console.log("Book keys count:", countKeys(book));          // Example for `book`
console.log("Marks keys count:", countKeys(student.marks));



//Create an array tools with "Playwright", "Postman", and "JIRA".

let tools = ["Playwright","Postman","JIRA"];

//Add "Zephyr" to the end.

tools.push("Zephyr");
console.log(tools);

tools.shift();
console.log(tools);

//Write a function printArray(arr) that prints each item.

function printArray(arr) {
    for (let item of arr) {
        console.log(item);
    }
}
printArray(tools);

//Given let nums = [4, 2, 9, 7];, write a function that returns only even numbers.

let nums = [4, 2, 9, 7];
function getEvenNumbers(arr) {
    let even = [];
    for (let i of arr) {
        if (i % 2 === 0) {
            even.push(i);
        }
    }
    return even;
}

console.log(getEvenNumbers(nums)); // [4, 2]




//Combine two arrays: ["mobile", "web"] and ["API", "backend"].

let ui = ["mobile", "web"];
let backend = ["API", "backend"];

let combined = ui.concat(backend);
console.log(combined);


// Write a normal function to multiply a number by 2, then convert it to arrow function.


function double(num){
    return num*2;
}

console.log (double(10));

const doubleValue = (num) =>{
    return num*2;
}

console.log(doubleValue(20));


function greet(val){
    return ("Hello " + val);

};

console.log(greet("Aman Bisht"));

const greetagain = (greetvalue)=>{
    return ("Hello " + greetvalue);
};

console.log(greetagain("Ananya Singh"));

//Use forEach() to print each fruit using:

let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruitnew){
    console.log(fruitnew);
});


for (let i of fruits){
    console.log(i);
}

fruits.forEach(fruit => console.log(fruit));


//map 

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);{ // num contains the item 
console.log(doubled);  // [2, 4, 6]
}