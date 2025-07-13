//Create an object book with properties title, author, and year

let book = {
    title : "Testing Demo",
    author : "Testing",
    year : "1998"
}

console.log (book);

//Update the year

book.year = "2025";
console.log(book) ;

//Delete the author
delete book.author;
console.log(book) ;

//Check if title exists using in

console.log('title' in book);

//Add a nested ratings object: { goodreads: 4.5, amazon: 4.7 }

book.ratings = { goodreads: 4.5, amazon: 4.7 };

console.log(book);

let tools = ["Playwright", "Postman", "JIRA", "Zephyr"];

tools.forEach(function(tools){
    return console.log (tools);

});

tools.forEach (tools =>console.log(tools));

//Write a normal function that multiplies a number by 5.
//Convert it to an arrow function

function multiply (num){
    return num*5;

};

console.log(multiply(2));


let multiplyvalue = (value) => console.log (value*5);

multiplyvalue(5);

//Use map() to create a new array with 5 bonus marks added to each.

let marks = [60, 70, 80];

let newmarks = marks.map(element => element+5);
console.log(newmarks);

let newmark = marks.map(element => {
    return element+10;
});
console.log(newmark);

marks.forEach (marks => console.log (marks+2));

//Convert this array to lowercase using map():

let names = ["AMAN", "ANANYA", "RAVI"];

let lowercasenames = names.map(element => element.toLowerCase());
console.log(lowercasenames);

//Use map() to extract an array of just names

let users = [
  { name: "Aman", role: "QA" },
  { name: "Sana", role: "Developer" },
  { name: "Ravi", role: "QA" }
];

let extractnames = users.map(element =>element.name);
console.log(extractnames);

//Use forEach() to print: "Aman is a QA", "Sana is a Developer"

users.forEach (user => {
    if (user.name === 'Aman'|| user.name === "Sana"){
        console.log (user.name + " is a " + user.role);
    } 

});


//From this array, get only numbers greater than 50:

let scores = [30, 55, 85, 45, 90];

let greternumber = scores.filter( element => element > 50);
console.log (greternumber);

// get only failed test cases 

let tests = [
  { name: "Login", status: "pass" },
  { name: "Signup", status: "fail" },
  { name: "Search", status: "fail" },
  { name: "Cart", status: "pass" }
];

let failedcases = tests.filter(element=> element.status === "fail");
console.log (failedcases);

// get only those which are ending weith man

let tool = ["Postman", "JIRA", "Zephyr", "Newman"];

let filter = tool.filter(element => element.endsWith("man"));
console.log(filter);


let to = ["JIRA", "Postman", "Playwright"];

let combined = to.reduce((acc, curr) => acc + ", " + curr);

console.log(combined);
// "JIRA, Postman, Playwright"


let nums = [10, 5, 15, 20];

let addednum = nums.reduce((acc,curr)=> acc+curr,0);
console.log(addednum);


let students = [
  { name: "Aman", marks: 80 },
  { name: "Sana", marks: 70 },
  { name: "Ravi", marks: 90 }
];

let totalmarks = students.reduce((acc,mark)=> acc + mark.marks,0);
console.log(totalmarks);


let testing = [
  { name: "Login", status: "pass" },
  { name: "Signup", status: "fail" },
  { name: "Search", status: "pass" },
  { name: "Cart", status: "fail" }
];


let pass = testing.reduce((acc,state)=> {
    if (state.status === "pass"){

        acc +=1

    }
    return acc;
    },0);


console.log("Passed test cases:", pass);


// find user QA role 

let newone = [
  { name: "Ravi", role: "QA" },
  { name: "Sana", role: "QA" },
  { name: "Aman", role: "Developer" }
];

let first = newone.find(element=> element.role === "QA");
console.log(first);

let second = newone.some(element => element.role === "QA");
console.log (second);

let score = [65, 78, 88, 91, 56];
let check = score.some(element => element > 90);
console.log(check);

let check2 = score.find(element=> element > 90);
console.log(check2);





function construction (name ,age ){
    this.name = name;
    this. age = age;
    return console.log(name , age);
};

let one = new construction("Aman",30);
let two = new construction("Ananya" ,30);


//["JIRA", "POSTMAN"] → ["jira", "postman"]

let arr = ["JIRA", "POSTMAN"];

let newarr = arr.map(elemet => elemet.toLowerCase());

//anoanymoud function will work only for map for each and set timeout 

arr.forEach (function(elemnt){
    console.log (elemnt);

});

arr.forEach (element => console.log(element));

