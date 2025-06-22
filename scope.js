//Scope determines the accessibility of variables and functions in different parts of your code. JavaScript has two main types of scope:
// Global Scope
//Variables declared outside any function or block are in the global scope and can be accessed anywhere in the code.

var globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Output: I'm global
}

showGlobal();

//Local Scope
//Variables declared inside a function or block are local to that function or block.

function localScope() {
  var localVar = "I'm local";
  console.log(localVar); // Output: I'm local
}

localScope();
console.log(localVar); // Error: localVar is not defined

