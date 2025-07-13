function waitWithCallback(ms, callback) {
 setTimeout(() => {
   callback(`⏳ Waited ${ms}ms (callback)`);
 }, ms);
}


console.log("Start (callback)");


waitWithCallback(3000, (msg) => {
 console.log(msg);
 console.log("End (callback)");
});


console.log("This runs immediately after async call");





function meet (value , callback ){
    console.log (value);
    callback("wait for a while ");
};

function men (msg){
    console.log(msg);

}

meet("aman",men);


setTimeout(function login(){
    console.log("Logged in");
    register("Registration Completed");
},3000)

function register(a){
    console.log(a);  
}


