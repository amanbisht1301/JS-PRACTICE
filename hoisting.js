//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during compilation. However, only the declarations are hoisted, not the initializations.
//Hoisting with var
//Variables declared with var are hoisted to the top of their function or global scope but initialized with undefined.

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

//Hoisting with let and const
//Variables declared with let and const are also hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError due to the "temporal dead zone."

console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;

console.log(z); // Error: Cannot access 'z' before initialization
const z = 15;
