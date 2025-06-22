// Objects can store other objects within them, creating nested structures

let student = {
  name: "Alice",
  grade: 12,
  subjects: {
    math: "A",
    science: "B"
  }
};
console.log(student.subjects.math);  // Output: A

