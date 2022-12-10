console.log(window)
console.log(typeof document)
console.log(document)
// you have to select what it is that you want to change 
//select
const howdyHeader = document.getElementById("howdy");
const howdyHeader2 = document.getElementsByClassName("howdy");
//console.log(howdyHeader)
console.log(howdyHeader2[0].innerHTML);
const faculty = document.querySelector("#joe");
console.log(faculty)

const ethan = document.querySelector("#ethan")
console.log(ethan)

const joesDiv = document.querySelector(".joesContainer")


//you then can create, modify or delete whatever you want
//modify
ethan.innerText = "the best TA"

//creates
const JoesTitle = document.createElement("h2")

//you then append it back to the dom
//append - add
joesDiv.append()
