// An array is a special type of object used to store multiple values in a single variable. 
// Each value in an array is indexed starting from 0. 

let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];
console.log(colors[0]);  // Output: red
console.log(colors.length);  // Output: 3
console.log(typeof colors);  // Output: object

// Traditional 
let color = ["red", "green", "blue"];
for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}

// Modern 
let name1 = ["Aman","Arun","Sonu"];
for (let i of name1){ //  i = item , name 1 = array 
    console.log(i);

}

let value  = [10, 20 , 50 , 60];
for (let val in value){
    console.log(value[val]);
}
