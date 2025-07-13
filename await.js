function delayedGreeting(){
    return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello Aman ");
    }, 2000);
  });
}

async function run() {
  console.log("Starting test...");
  let result = await delayedGreeting();
  console.log(result);
  console.log("Test done!");
}

run();


function login1(){
    return new Promise(resolve => {
    setTimeout(() => {
        resolve("logged In");      
    }, 1000);
})};


function fetchData1(){
    return new Promise(resolve => {
    setTimeout(() => {
       resolve("Data received");      
    }, 1500);
})};

function logout1(){
    return new Promise(resolve => {
    setTimeout(() => {
        resolve ("logged out");      
    }, 1000);
})};

async function runTest1(){
    let loginResult = await login1();
    console.log(loginResult);
    let fetchdataresult = await fetchData1();
    console.log(fetchdataresult);
    let logoutresult = await logout1();  
    console.log(logoutresult);
};

runTest1();


function login(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("✅ Logged In");
            } else {
                reject("❌ Login failed");
            }
        }, 1000);
    });
}

function fetchData(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("📦 Data received");
            } else {
                reject("❌ Failed to fetch data");
            }
        }, 1500);
    });
}

function logout(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("👋 Logged out");
            } else {
                reject("❌ Logout failed");
            }
        }, 1000);
    });
}

async function runTest() {
    try {
        let loginResult = await login(true); // try false here to test failure
        console.log(loginResult);

        let fetchDataResult = await fetchData(true); // try false here too
        console.log(fetchDataResult);

        let logoutResult = await logout(true); // simulate logout failure
        console.log(logoutResult);
    } catch (error) {
        console.error("🔥 Error:", error);
    }
}

runTest();


function checkStatus(passed){
    return new Promise (function (resolve,reject){
        if (passed === true){
            resolve("Test Passed ✅");
        }
        else {
            reject("Test Failed ❌");
        }
    })
}

async function tryCatch(){
    try {
        let result = await checkStatus(true);
        console.log (result);
    }
    catch (error){

        console.log(error);

    }
} 

tryCatch();


function getDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("📦 Data loaded");
    }, 1500);
  });
}

async function fetchData() {
  let result = await getDataAsync(); // wait for promise to finish
  console.log(result);
}

fetchData();