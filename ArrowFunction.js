//Arrow Function 

const add = (a,b)=>a+b;
console.log(add(5,5));

const greet = names=> "hello" + names;
console.log(greet("Bob"));

const multiply = (a,b )=>{
    const value = a * b;
    return value;// always put return type in arrow function multiline 
}

console.log(multiply(6,2));