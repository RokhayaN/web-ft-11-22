//select or  create 
console.log("rokhaya")
let para = document.createElement("p");
let input = document.createElement("input");
let btn = document.createElement("button");
//let main = document.querySelector(".main");
let allTasks = document.querySelector(".allTasks");

// modify
para.innerText = "Add tasks to your todolist";
para.classList = "para1"

input.type = "text";
input.classList = "task";

btn.innerHTML = "Add New Task";
btn.classList = "add_btn";



//add or append
allTasks.append(para,input,btn, );

//create a function
let addTask = () => {
        let task = input.value;
        let newTask = document.createElement("li");
        newTask.innerText = task + " ";
        document.querySelector(".allTasks").appendChild(newTask);
        input.value = "";

    let removeB = document.createElement("button");
    removeB.innerHTML = "Delete Task";
    removeB.classList = "remove_btn";
    removeB.addEventListener("click", removeT)
    //document.querySelector(".remove_btn").removeChild(newTask);

let removeT = () => {
    document.querySelector(".remove_btn").removeChild(newTask);
};
}


//firing our event onclick

btn.addEventListener("click",() => addTask());