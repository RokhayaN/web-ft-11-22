//select
const buttons = document.querySelectorAll("button");
console.log(buttons)
 //create
 const header = document.createElement("h1");
 const body = document.getElementsByTagName("body")
body.classList = "body" ;
 //modify

for(let button of buttons){
    
    button.addEventListener("click", () => {
    console.log(`i m button number ${button.innerText} and i was clicked`)

})
let OpArr = [];
let numArr = [];
let value = button.innerText;
if (isNaN(value)){
    OpArr.push(OpArr);
    console.log(OpArr);
}else{
numArr.push(button)
    console.log(numArr);
}
};

//add/appending
body.append(header)
 
