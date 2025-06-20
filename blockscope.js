function exampleLet() {
  let name = "John";
  if (true) {
    let name = "Jane"; // different variable, block-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: John
}

exampleLet();
