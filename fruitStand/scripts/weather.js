// variable to connect with weather API forcast
let weatherforcastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=33.1581&lon=-117.3506&units=imperial&appid=f6db6bc304682febe0fa24a0e884ae0c";

//function to fetch information from the forcast API
async function fetchforcastWeather() {
    
    let response = await fetch(weatherforcastURL);        
    let weatherforcastFetched = await response.json();
    
    firstWeather(weatherforcastFetched);
    secondWeather(weatherforcastFetched);
    thirdWeather(weatherforcastFetched);    
}

//Connect to open weather and get current weather
let weatherCurrentURL = "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&units=imperial&appid=f6db6bc304682febe0fa24a0e884ae0c";

//function to fetch information from current weatherAPI
async function fetchcurrentWeather() {
   
    let response = await fetch(weatherCurrentURL);        
    let weathercurrentFetched = await response.json();
    console.log (weathercurrentFetched);
    currentWeather(weathercurrentFetched);
        
}

//Call async functions
fetchforcastWeather();
fetchcurrentWeather();


//varibles need to connect with HTML
let currentWeatherIcon = document.querySelector("#curWeatherIcon");
let currentHumidity = document.querySelector("#currentHumidity");
let currentTemp = document.querySelector("#currentTemp");
let currentHighLow = document.querySelector("#currentHighLow");
let currentDiscription = document.querySelector("#curWeatherDiscription");


//Setting up current date area
function currentWeather(currentWeatherInfo) {
    
    let currentIcon = `https://openweathermap.org/img/w/${currentWeatherInfo.weather[0].icon}.png`;
    let descriptionCurrent = currentWeatherInfo.weather[0].description;
    let currentHigh = currentWeatherInfo.main.temp_max.toFixed(0);
    let currentLow = currentWeatherInfo.main.temp_min.toFixed(0);
    let humiditycurrent = currentWeatherInfo.main.humidity;
    
    //setting up display and attributes
    currentTemp.textContent = `${currentWeatherInfo.main.temp.toFixed(0)}\u00b0f`;
    currentWeatherIcon.setAttribute("src", currentIcon);
    currentWeatherIcon.setAttribute("alt", descriptionCurrent); 
    currentHighLow.textContent = `${currentHigh}\u00b0f | ${currentLow}\u00b0f`;    
    currentDiscription.textContent = descriptionCurrent;
    currentHumidity.textContent = `Humidity ${humiditycurrent}%`;
}

//Setting up the look of the first forecast area
let firstWeatherIcon = document.querySelector("#firstWeatherIcon");
let firstHumidity = document.querySelector("#firstHumidity");
let firstHighLow = document.querySelector("#firstHighLowTemp");
let firstDiscription = document.querySelector("#firstWeatherDiscription");
let firstDate = document.querySelector("#firstDate");

//Function for setting first date area
function firstWeather(weatherforcastInfo) {
    
    let firstIcon = `https://openweathermap.org/img/w/${weatherforcastInfo.list[1].weather[0].icon}.png`;
    let descriptionFirst = weatherforcastInfo.list[1].weather[0].description;
    let firstHigh = weatherforcastInfo.list[1].temp.max.toFixed(0);
    let firstLow = weatherforcastInfo.list[1].temp.min.toFixed(0);
    let humidityFirst = weatherforcastInfo.list[1].humidity;

    let timefirst = weatherforcastInfo.list[1].dt;
    let rtimefirst = new Date(timefirst * 1000);
    let weekdayfirst = new Intl.DateTimeFormat("en-US", {weekday: "short"}).format(rtimefirst);
        
    //setting up display and attributes    
    firstWeatherIcon.setAttribute("src", firstIcon);
    firstWeatherIcon.setAttribute("alt", descriptionFirst); 
    firstHighLow.textContent = `${firstHigh}\u00b0f | ${firstLow}\u00b0f`;    
    firstDiscription.textContent = descriptionFirst;
    firstHumidity.textContent = `Humidity ${humidityFirst}%`;
    firstDate.textContent = weekdayfirst;
}

//Setting up the look of the Second forecast area
let secondWeatherIcon = document.querySelector("#secondWeatherIcon");
let secondHumidity = document.querySelector("#secondHumidity");
let secondHighLow = document.querySelector("#secondHighLowTemp");
let secondDiscription = document.querySelector("#secondWeatherDiscription");
let secondDate = document.querySelector("#secondDate");

//Function for setting Second date area
function secondWeather(weatherforcastInfo) {
    
    let secondIcon = `https://openweathermap.org/img/w/${weatherforcastInfo.list[2].weather[0].icon}.png`;
    let descriptionSecond = weatherforcastInfo.list[2].weather[0].description;
    let secondHigh = weatherforcastInfo.list[2].temp.max.toFixed(0);
    let secondLow = weatherforcastInfo.list[2].temp.min.toFixed(0);
    let humiditySecond = weatherforcastInfo.list[2].humidity;
    
    let timesecond = weatherforcastInfo.list[2].dt;
    let rtimesecond = new Date(timesecond * 1000);
    let weekdaysecond = new Intl.DateTimeFormat("en-US", {weekday: "short"}).format(rtimesecond);
    

    //setting up display and attributes    
    secondWeatherIcon.setAttribute("src", secondIcon);
    secondWeatherIcon.setAttribute("alt", descriptionSecond); 
    secondHighLow.textContent = `${secondHigh}\u00b0f | ${secondLow}\u00b0f`;    
    secondDiscription.textContent = descriptionSecond;
    secondHumidity.textContent = `Humidity ${humiditySecond}%`;
    secondDate.textContent = weekdaysecond;
}

//Setting up the look of the Third forecast area
let thirdWeatherIcon = document.querySelector("#thirdWeatherIcon");
let thirdHumidity = document.querySelector("#thirdHumidity");
let thirdHighLow = document.querySelector("#thirdHighLowTemp");
let thirdDiscription = document.querySelector("#thirdWeatherDiscription");
let thirdDate = document.querySelector("#thirdDate");

//Function for setting third date area
function thirdWeather(weatherforcastInfo) {
    
    let thirdIcon = `https://openweathermap.org/img/w/${weatherforcastInfo.list[3].weather[0].icon}.png`;
    let descriptionThird = weatherforcastInfo.list[3].weather[0].description;
    let thirdHigh = weatherforcastInfo.list[3].temp.max.toFixed(0);
    let thirdLow = weatherforcastInfo.list[3].temp.min.toFixed(0);
    let humidityThird = weatherforcastInfo.list[3].humidity;

    let timethird = weatherforcastInfo.list[3].dt;
    let rtimethird = new Date(timethird * 1000);
    let weekdaythird = new Intl.DateTimeFormat("en-US", {weekday: "short"}).format(rtimethird);
    
    
    //setting up display and attributes    
    thirdWeatherIcon.setAttribute("src", thirdIcon);
    thirdWeatherIcon.setAttribute("alt", descriptionThird); 
    thirdHighLow.textContent = `${thirdHigh}\u00b0f | ${thirdLow}\u00b0f`;    
    thirdDiscription.textContent = descriptionThird;
    thirdHumidity.textContent = `Humidity ${humidityThird}%`;
    thirdDate.textContent = weekdaythird;
}