//set up varibles to connect with HTML

const temp = document.querySelector("#temp");
const iconWeather = document.querySelector("#iconWeather")
const weatherDescription = document.querySelector("figcaption");
const windSpeed = document.querySelector("#windSpeed")


//variable for connecting with weather API
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=40.5219&lon=-111.9391&units=imperial&appid=f6db6bc304682febe0fa24a0e884ae0c"

//async and fetch information don't do anything unless respose is made
async function weatherFetch() {
    try{
        const response = await fetch(weatherURL);
        if (response.ok) {
            const weatherInfo = await response.json();
            //console.log(weatherInfo);
            weatherResults(weatherInfo);
            chillCalculate(weatherInfo);
        }else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

weatherFetch();

//function collecting the data from from weatherFetch and diplaying it on page
function weatherResults(infoWeather) {
    temp.textContent = `${infoWeather.main.temp.toFixed(0)}\u00B0`;
    const weatherIcon = `https://openweathermap.org/img/w/${infoWeather.weather[0].icon}.png`;
    const descriptWeather = infoWeather.weather[0].description;
    const wind = infoWeather.wind.speed;

    iconWeather.setAttribute("src", weatherIcon);
    iconWeather.setAttribute("alt", descriptWeather);
    weatherDescription.textContent = descriptWeather;
    windSpeed.textContent = `Wind Speed: ${wind} m/h`;

}

//function to get the weather information from open weather & need variables
function chillCalculate(windinfo){
    let temperature = windinfo.main.temp.toFixed(0);
    let speed = windinfo.wind.speed;
    let windy = Math.round(speed);



//if then statement asking if perameters for calculation of windchil are met
    if (temperature <= 50 && windy > 3) {

        //function takes temperature and wind, windchill formula, rounded to intiger
        function windChillCalculate (temperature, windy) {        
            let windPower = Math.pow(windy, .16)
            let calculation = 35.74 + (.6215 * temperature) - (35.75 * windPower) + (.4275 * temperature * windPower);
            let windChillRounded = Math.round(calculation);
            return windChillRounded;
        };
        let calculateWindchill = windChillCalculate(temperature, windy);    
        let windchill = `Wind Chill: ${calculateWindchill}°`;      
        document.querySelector("#chillWind").innerHTML = windchill;

    } else {
        let nochill = `Wind Chill: N/A`;
        document.querySelector("#chillWind").innerHTML = nochill;
    }

}