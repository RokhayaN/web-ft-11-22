//select or create 
let container = document.querySelector(".main-container");
let input = document.createElement("input");
let sButton = document.createElement("button");

//modify

input.classList = "weather";
input.type = "text";

sButton.classList = "search";
sButton.innerText = "Search";

//add or append
container.append(input, sButton)

//fetch api func to get data

const getWeather = async () => {
    const wInput = document.querySelector(".weather").value;
    const wData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${wInput}&appid=c1359cf7d69d160e660509bf5e14db7a&units=imperial`);
    
//convert data to json
let jData = await wData.json();
console.log(jData)

const city = document.createElement("p")
city.innerText = `Hello! Welcome to the City of : ${jData.name} .\n The weather is currently ${jData.main.temp} and the sky is ${jData.weather[0].main} \n  . The max-temp today will be  ${jData.main.temp_max} and the minimum will be ${jData.main.temp_min} above sea level` ;
city.classList = `${jData.name}`;

const cityImg = document.createElement("img")
cityImg.src = "./images/weather1.jpg";
cityImg.classList = "img"
container.append(city, cityImg);


};

sButton.addEventListener("click", () =>{
    getWeather();
})


