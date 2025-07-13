//promise 


let promise = new Promise(function(resolve,reject){
    console.log("Hello I am a promise");
    resolve(56);
})

console.log(promise);

const promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Task Completed");
  }, 2000);
});

promise1.then(function(message) {
  console.log("Regular Function:", message); // 👉 "Task Completed"
});







let failPromise = new Promise (function ( resolve ,reject){
    setTimeout(function (){
        reject ("Task is not completed");
    },2000);
});

failPromise.then(function(message){
    console.log(message);})
.catch(function(error){
    console.log(error);
});    



let passPromise = new Promise((resolve ,reject)=>{
    setTimeout(val=>{
        reject("Not a good task to complete");
    },2000);
});

passPromise.then(message =>
    console.log( message))
    .catch(error=>
        console.log("Task was meant to fail test case pass" +error)
    );

let num = 5;

let promiseresult = new Promise((reject,resolve)=>{
    if( num%2 === 0){
        resolve("It is an even number");
    }
    else {
        reject("it is not an even number");
    }
    
});

promiseresult.then(message =>  
    console.log(message))
    .catch(error =>
        console.log(error))



let newnum = 2;

let result = new Promise((resolve,reject)=>{
    resolve (newnum+2*3);
});

result.then(function(value){
    console.log ("value is " +value);
})