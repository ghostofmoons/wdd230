//calculate windchill and add it to page
let temperature = 40;
let wind = 4;


//if then statement asking if perameters for calculation are met
if (temperature <= 50 && wind > 3) {
    //function takes temperature and wind, windchill formula, rounded to intiger
    function windChillCalculate (temperature, wind) {        
        let windPower = Math.pow(wind, .16)
        let calculation = 35.74 + (.6215 * temperature) - (35.75 * windPower) + (.4275 * temperature * windPower);
        let windChillRounded = Math.round(calculation);
        return windChillRounded;
    };
    let calculateWindchill = windChillCalculate(temperature, wind);    
    let windchill = `Wind Chill: ${calculateWindchill}°`;      
    document.querySelector("#chillWind").innerHTML = windchill;

} else {
    let nochill = `Wind Chill: N/A`;
    document.querySelector("#chillWind").innerHTML = nochill;
}
