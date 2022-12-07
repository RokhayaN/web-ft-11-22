console.log("hello World")

//functions

function printMyName(name, lastname){
    //the function body
    console.log(name, lastname)

};
//es6 functions
//arrow functions

const ethanIscool = (firstM, secondM) =>{
    console.log(firstM, secondM)
};

printMyName("joe","frasier");
ethanIscool("hippity", "get out of my property");

//arrays
let fruits = ["banana","apple","cowboy"]
console.log(fruits[2])
console.log(fruits[1])
//add to the end of an array
fruits.push("straberry")
console.log(fruits)

let students = ["corey","Mauro"]
const newStudent = students.filter((student) => student === "corey");
console.log(newStudent)


//loops in js

for(const fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));
//this is for objects only

//objects
const student = {name: "jaye"};

console.log(student["name"])
console.log(student.name)

// this is how you add v key/value to an existin obj

student.lastname = "";
student[age] = "20";
console.log(student[key]);

//