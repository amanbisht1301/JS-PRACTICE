//A function is a block of reusable code that can be executed when called. 
//Functions in JavaScript are first-class citizens, meaning they can be treated like any other variable.

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John"));  // Output: Hello, John!
console.log(typeof greet);



function evenOddCheck(value){

    if (value % 2 === 0){
        return "it is an even number " + value; 
    
}   else{
        return "it is an odd number " +value;
}
}
console.log(evenOddCheck(5));


function add (a,b,c){
    return a+b+c;
}

console.log(add(10,40,5));