let myPromise = new Promise((resolve, reject) => {
  let passed = true;

  if (passed) {
    resolve("QA Test Passed!");
  } else {
    reject("QA Test Failed.");
  }
});

myPromise
  .then(result => console.log(result))     // if resolved
  .catch(error => console.log(error));     // if rejected

  //Create a promise that:
  // Resolves with "✅ Test Passed" after 2 seconds
  // Use .then() to print the message

  let passpromise = new Promise (function(resolve,reject){
    let pass = false;
    setTimeout(() => {
        if (pass){
        resolve("✅ Test Passed");
    }   else{
        reject("❌ Test Failed");
    }
 }, 2000);

    
  });

passpromise
.then(result => console.log(result))
.catch(error => console.log(error));

//rite a function runTest(success) that:
// Returns a Promise
//If success === true, resolve with "All tests passed"
// If false, reject with "Tests failed"
// Handle both cases using .then() and .catch()


function runTest(passed) {
  return new Promise(function(resolve, reject) {
    if (passed === true) {
      resolve("✅ All tests passed");
    } else {
      reject("❌ Some tests failed");
    }
  });
}

// Call the function and handle the result
runTest(true)
  .then(message => console.log(message))
  .catch(error => console.log(error));

runTest(false)
  .then(message => console.log(message))
  .catch(error => console.log(error));



  //Simulate a login test:
  // Use setTimeout() inside the promise
  // After 1.5 seconds, resolve with "Login Successful"
  // If a variable isLoggedIn = false, reject instead

  let promise = new Promise (function(resolve,reject){
        LoggedIn=true;
        setTimeout(()=>{
            if (LoggedIn === true){
            return resolve ("Login Success one");}
        },1500);
  });

  promise.then(message => console.log(message));

//Create a promise that resolves a number (like 5), then:
// In the first .then(), multiply it by 2
// In the second .then(), add 10
// Finally print the result
// Expected output:(5 * 2) + 10 = 20

let aman = new Promise(function (resolve){
    resolve (5);
});

aman
.then(num => {
    return num*5;
}
)
.then (res =>{
    return res+10;
})
.then (fres => {
    console.log("Final Result:", fres);

})