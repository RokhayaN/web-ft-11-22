//select
console.log(document)
const mainDiv = document.querySelector("div");


//create 
const RokhayaImg = document.createElement("img");
const Rokhayaheader = document.createElement("h1");
const RokhayaPara = document.createElement("p");

//create an array of picture
plants = []

//modify
RokhayaImg.src  = "r.JPG";
RokhayaImg.classList = "rokhayaImg";
RokhayaImg.innerText = "Rokhaya";
RokhayaImg.alt = "Rokhaya pic";

Rokhayaheader.innerText = "Rokhaya Bio";
RokhayaPara.innerText = "Hey Rokhaya here! Im a coffee + plant lover ..I love everything nature related.  \n In my spare time you can catch me at the dojo or hunting cute places brunch/coffee "



//append

mainDiv.append(RokhayaImg, Rokhayaheader, RokhayaPara);
