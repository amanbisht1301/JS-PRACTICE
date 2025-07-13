//Map Practice Questions 
// Capitalize Names
const names = ["aman", "bisht", "qa"];
const capitalName  = names.map(currentvalue => currentvalue.toUpperCase());
console.log(capitalName);

//Extract Titles

const books = [
  { title: "Test Automation", author: "Aman" },
  { title: "QA World", author: "Ravi" },
];
const extractTitlesValue = books.map(item => item.title);
console.log (extractTitlesValue);

//Add 10% Bonus to Salaries

const employees = [
  { name: "Aman", salary: 50000 },
  { name: "Ravi", salary: 60000 },
];

const hike = employees.map(item => item.salary+item.salary/10);
console.log(hike);
