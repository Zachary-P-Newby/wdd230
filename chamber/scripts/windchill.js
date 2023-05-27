const conditionElement = document.querySelector("#condition");
const tempratureElement = document.querySelector("#temperature");
const windChillElement = document.querySelector("#windChill");
const windSpeedElement = document.querySelector("#windSpeed");

let temperature = 64;

let windSpeed = 5;

conditionElement.textContent = "Windy";
// Ground work for tempratue input
tempratureElement.textContent = `${temperature}` /* - degree symbol */
windSpeedElement.textContent = `${windSpeed}`;

function getWindChill(temperature, windSpeed){
    let f = 0;

    f = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));

    return f
}

let windchill = getWindChill(temperature, windSpeed);

windChillElement.textContent = `${windchill}`;