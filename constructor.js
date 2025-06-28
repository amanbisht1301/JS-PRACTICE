// constructor use to create an intialise simliar kind of object 

function person(name ,age ){
    this.name = name;
    this.age = age;

}

const person1 = new person ("aman",30);
const person2 = new person ("Rahul",30);

console.log(person1);
console.log(person2);
