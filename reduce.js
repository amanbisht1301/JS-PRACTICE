// Count Passed/Failed Test Cases
const results = ["pass", "fail", "pass", "pass", "fail"];

const pass = results.reduce((accumulator,currentitem)=> {
    if ( accumulator[currentitem]){
        accumulator[currentitem] += 1;       
    }
    else{
        accumulator[currentitem]= 1
    }
    return accumulator;
},{})

console.log(pass);


//Group Users by Age

const users = [//Array
  { name: "Aman", age: 25 },// object
  { name: "Ravi", age: 30 },
  { name: "Anu", age: 25 },
];

const group = users.reduce((acc,item)=>{
    if (acc[item.age]){
        acc[item.age].push(item);
    }
    else{
        acc[item.age] = [item];
    }
    return acc;
},{})

console.log(group);