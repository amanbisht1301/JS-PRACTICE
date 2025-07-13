//A callback is just a function passed as an argument to another function 
// — to be called later, usually after some task is complete.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();  // calling the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Aman", sayBye);


//Create a function delayedMessage(message, callback) that:
//Prints the message
//After 2 seconds, calls a callback to print "Task done"

function delayedMessage(message, callback){
    console.log(message);
    setTimeout(() => {
        callback();       
    }, 2000);   
};

function task (){
    console.log("Task complete");
};



delayedMessage("Hello Task",task);


//Write a function calculate(a, b, operation) that:
//Accepts two numbers and a callback function
//Calls the callback to add, subtract, or multiply the numbers


function calculate(a, b, operation){
    console.log(a , b);
    operation(a,b);

};

function operation (a,b){

    console.log (a+b);

};

calculate(10,20,operation);

//Create a function processArray(arr, callback) that:
// Takes an array and a callback
// Loops through the array and calls the callback on each item


function processArray(arr, callback){

    arr.forEach(element => {        
         return callback(element);
    });
    
};

function callback (value){
    console.log("Hello", value);
};

processArray([11,21,35,42,51],callback);



//Write a function validateInput(input, callback) that:
// Checks if the input is a string
// If valid: call the callback with "Valid input"
// Else: print "Invalid input"


function validateInput(input, callback1){
    if (typeof input === "string"){
        callback1(input);
    }
    else{
        console.log("Invalid input");
    }
};

function callback1(input){
    console.log("Valid Input" + input );
}

validateInput("aman",callback1);



//Create a callback function that prints:
// "API returned status <status> with data: <data>"

function mockApiResponse(callback2) {
  setTimeout(() => {
    const response = { status: 200, data: "Test data" };
    callback2(response);
  }, 1000);
}


function callback2(response){
    console.log ("API returned status : "+ response.status + " with data: " + response.data);

};

mockApiResponse(callback2);
