//Variables are used to store data that can be changed later.
//In JavaScript, you can declare variables using var, let, or const.
//The var keyword declares a variable with function scope or global scope.
//if not inside a function. var is function-scoped, meaning it is accessible throughout the function in which it is declared, or globally if declared outside any function.


function exampleVar() {
  var name = "John";
  if (true) {
    var name = "Aman"; // same variable, function-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: Jane
}

exampleVar()

