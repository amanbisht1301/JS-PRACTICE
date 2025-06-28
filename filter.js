//Filter Adults

const people = [
  { name: "Aman", age: 20 },
  { name: "Anu", age: 16 },
];

const adult = people.filter(item => item.age > 18);
console.log(adult);

//Find Passed Test Cases

const testResults = [
  { testCase: "Login", status: "pass" },
  { testCase: "Signup", status: "fail" },
];

const passtestcase = testResults.filter(item => item.status ==='pass');
console.log(passtestcase);

//Filter Numbers > 50

const numbers = [10, 45, 60, 80];
const numbergreaterthan50 = numbers.filter(item => item > 50);
console.log(numbergreaterthan50);


const greater = numbers.filter(item =>{
    const newitem = item >50;
    return newitem;
})


console.log(greater);