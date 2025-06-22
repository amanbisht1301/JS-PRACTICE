//The let keyword declares a variable with block scope, meaning it is only accessible within the block where it is defined (e.g., inside a {} block).

function exampleLet() {
  let name = "John";
  if (true) {
    let name = "Jane"; // different variable, block-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: John
}

exampleLet();

