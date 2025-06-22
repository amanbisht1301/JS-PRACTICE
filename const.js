//The const keyword declares a variable that cannot be reassigned after its initial assignment. Like let, const is block-scoped.

function exampleConst() {
  const name = "John";
  if (true) {
    // name = "Jane"; // This will throw an error because `const` variables cannot be reassigned
    console.log(name); // Output: John
  }
}

exampleConst();
