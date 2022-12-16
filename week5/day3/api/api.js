//select elements
const searchButton = document.querySelector(".search");
const mainContainer = document.querySelector(".main-container")
//create a fetch api fuction - to get data
const getWeather = async () => {
    //select eleemnts
    const weatherInput = document.querySelector(".weather").value;
    const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${weatherInput}&appid=ff1cadec65d9f10c3aafc2a01b14612c`
        );
        //convert data to json - stringify
        const json = await weatherData.json();
        console.log(json) 
        //create an el
        const cityH = document.createElement("h1");
        //modify an el
        cityH.innerText = `It's ${json.main.temp} F in ${json.name} and the sky is ${json.weather[0].main}`;
        //add el to Dom
        mainContainer.append(cityH)
};

searchButton.addEventListener("click", getWeather);
//const container = document.querySelector(".main-container");
//const para = document.createElement("p");
//para.innerText = `this is cityname ${json.name}`;
//container.append(para);

