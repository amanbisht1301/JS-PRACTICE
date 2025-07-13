//Print "Starting test..." immediately, and "Test completed!" after 2 seconds.

console.log("Starting Test...")

setTimeout(function(){
    console.log("Test Completed");
},2000);


setTimeout(()=> console.log("test Completed after three seconds through Arrow function"),3000);


function complete (){
    console.log("Name Function timeout ");
};

setTimeout(complete,5000); // always call function without parenthesis in settimeout beacuse it will call immediately 


// Q2. Use a named function greetUser() that prints 
// "Welcome, Aman!", and call it with setTimeout() after 1.5 seconds.

function greetUser(){
    console.log("Welcome Aman");
};

setTimeout(greetUser,1500);


//Print numbers 1 to 5 using setTimeout() 
// so that each number appears 1 second after the previous one.

setTimeout(function(){
    for (let i = 0; i <=6; i++){
        console.log(i);
    }
},2000);