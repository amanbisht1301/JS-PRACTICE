//Create an object laptop with properties brand, model, and price.

let laptop = {
    brand : "Mac",
    model : "M4",
    price : 84000
};

console.log(laptop);

//Update the price

laptop.price = 52000;
console.log(`${laptop.brand} ${laptop.model}, price has dropped to ₹${laptop.price}`);

//Delete the model
delete laptop.model
console.log(laptop);

//Check if the brand key exists

console.log('brand'in laptop);


//Create a nested object user with:

let Employee = {
  name: "Aman",
  skills: {
    frontend: "React",
    backend: "Node"
  }
};

//Print the frontend skill

let frontendSkill = Employee.skills.frontend;
console.log(frontendSkill);

//Add a new skill devops: "Docker"

Employee.skills.devops  = "Docker";
console.log (Employee.skills);

//Write a function to print all skill names

function printAllSkillName(){

    return Employee.skills;

}

console.log(printAllSkillName());

//Create an array of tools: ["JIRA", "Postman", "Playwright"]

let tools = ["JIRA", "Postman", "Playwright"];

//Add "Zephyr" to the end

tools.push("Zephyr");
console.log (tools);

//Remove the first tool

tools.shift();
console.log (tools);

//Print each tool using forEach tools.forEach()

tools.forEach(tool => console.log(tool));

//Write a function printArray(arr) that takes an array and prints all elements.

let arr = ['orange','banana','coconut','melon'];

function printArray(arr){
    for (let i of arr){
        console.log(i);
    }

};

printArray(arr);



//Create an array of numbers. Use map() to:

let number = [10,20,30,40,50];

//Add 10 to each number

let addnew = number.map(element=>
    {
        return element+10;

});

console.log(addnew);

//Convert all numbers to strings

let numbertostring = number.map(element => element.toString());

console.log(numbertostring);


tools.forEach(tool => console.log(tool));


//Convert this array to lowercase using map():

let uppercasearray = ["AMAN", "BISHT", "TESTING"];
let lowercasearray = uppercasearray.map(element => element.toLowerCase());
console.log (lowercasearray);


// From this array, get numbers greater than 50:
let scores = [40, 55, 65, 20, 90];
let newscore = scores.find(element => element >50); // which ever it find the first element 
console.log(newscore);

let findallnewscore  = scores.filter(element => element > 50);
console.log(findallnewscore);

//From this array, get only the failed test cases:

let tests = [
  { name: "Login", status: "pass" },
  { name: "Signup", status: "fail" },
  { name: "Cart", status: "fail" }
];

let failedtestcase = tests.filter(element => element.status === "fail");
console.log(failedtestcase);

//Use .some() to check if any score is above 90

let abovescore = scores.some(element => element > 90);
console.log (abovescore);

//Use .find() to return the first tool that ends with "man" from:

let toolname = ["Newman", "JIRA", "Postman", "Zephyr"];
let findtoolname = toolname.find(element => element.endsWith("man"));
console.log(findtoolname);

//Print "Hello Aman" after 2 seconds using setTimeout().

setTimeout(function(){
    console.log(" Hello Aman ");
},2000);

function greet(name){
    return console.log("Hello Aman Bisht");
};

setTimeout(greet,1000);

setTimeout((element) =>{

    return console.log ("new Aman");

},3000);

//Print numbers 1 to 5 with a 1-second delay between each using setTimeout.


    for (let i=1; i<5; i++){
        setTimeout((element) => {
            console.log(i);             
        }, i*1000);
    }
    
//Loop through the array ["Login", "Signup", "Dashboard"] 
// and print each item with 2s delay between each.

let array = ["Login", "Signup", "Dashboard"] ;

array.forEach(element => {
    setTimeout(function(){
        console.log(element);
    },element * 10000 )
});