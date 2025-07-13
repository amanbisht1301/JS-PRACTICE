//Whenever you pass a function as an argument to another function (like setTimeout), and that function gets executed later, 
// it’s called a callback function.
console.log("Start");
setTimeout(function cb (){
    console.log("waited for 5 seconds")
},5000);
console.log ("end");



//Create a function loginUser(username, callback) that:
//Logs: "User <username> is logged in"

//Then calls the callback() to load dashboard


function loginUser (username, callback) {
    console.log("User " + username+ " is logged in");
    callback();
}

function loadDashboard(){
    console.log ("Inside the dashboard");
}

loginUser("abisht584",loadDashboard);


function example(callback) {
  console.log("Before callback");
  callback(function(status){
    console.log("aman");
  }); // <-- called here
  console.log("After callback");
}

function sayHi(callback) {
  console.log("Hi Aman");
  callback("ready");
}

example(sayHi);


//Write your own goodbye() function and pass it as a callback.

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Aman", sayBye);

//Create a function that accepts a callback and runs it after 2 seconds using setTimeout.

function accept() {
  console.log("pass after 2 sec");
}

setTimeout(accept, 2000);


function orderCoffee(callback) {
  setTimeout(() => {
    callback("☕ Coffee is ready!");
  }, 2000);
}

orderCoffee((coffee) => {
  console.log(coffee);
});
