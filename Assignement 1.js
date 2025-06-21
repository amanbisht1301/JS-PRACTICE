let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
//Using reduce(), write a JavaScript function to count how many times each status appears

let passresult = testResults.reduce((acc,i) => i == 'pass'? acc+1:acc,0);
console.log("Passed: " + passresult);
let failresult = testResults.reduce((acc,i) => i == 'fail'? acc+1:acc,0);
console.log("failed: "+failresult);
let skippedresult = testResults.reduce((acc,i) => i == 'skipped'? acc+1:acc,0);
console.log("skipped: "+skippedresult);