let colours = ["red","white","green"];
console.log(colours[0]);
console.log(colours.length);
console.log(typeof colours);

colours.push("Yellow") // added to the last 
console.log(colours);
colours.pop("Yellow") // remove from the last 
console.log(colours)
let removeFirstelement = colours.shift(); //remove first element 
console.log(removeFirstelement);
console.log(colours);
let addFirstelement = colours.unshift("red");
console.log(colours)
//For loop 

for (let i = 0 ; i< colours.length ;i++){
    console.log(colours[i])
}

for (let colour of colours){ // let variable name of array name 
    console.log(colour);
}


function bottlecall(){
let bottle  = {
    bottleName : "Kinley",
    bottleprice : 20,
    isrecycle : true
}
bottle.lter = "one"
console.log(bottle);
}

bottlecall();



let num  = [12,20,55,5];
let sortnum = num.sort();
console.log(sortnum);