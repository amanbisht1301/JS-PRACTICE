//Imagine you're testing a web app. You first need to log in. After login, 
// the app should load the dashboard. But login is asynchronous 
// (like calling an API), so you need to wait for it to complete before checking the dashboard.

setTimeout(function login(){
    console.log("User Logged In");
    loadDashboard("Dashboard is ready");
},2000);

function loadDashboard(value){
    console.log(value);
}

//Write a function signUpUser() that takes a username and a callback function sendWelcomeEmail. 
// The email should only be sent after the signup completes (simulate delay).

function signUpUser(username, callback) {
  console.log("🔐 Signing up " + username + "...");

  setTimeout(function() {
    console.log("✅ " + username + " signed up successfully.");
    callback(username); // Call the callback with username
  }, 2000);
}

function sendWelcomeEmail(user) {
  console.log("📧 Welcome email sent to " + user + "!");
}

signUpUser("aman.qa", sendWelcomeEmail);
