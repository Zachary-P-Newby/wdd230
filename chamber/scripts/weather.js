/* Cosntants */
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=37.1795&lon=-94.555&appid=17c3be04bdd5b8a448abfd68abc1e93f&units=imperial`;
const weatherIcon = document.getElementById("weatherImage" );

const conditionElement = document.querySelector("#condition");
const tempratureElement = document.querySelector("#temperature");
const windChillElement = document.querySelector("#windChill");
const windSpeedElement = document.querySelector("#windSpeed");



/* Prepare weather Display*/
async function apiFetch(){
    try{
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
            
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}


function displayWeather(data){
    
    let condition = data.weather[0].description;
    let temperature = data.main.temp;
    let windSpeed = data.wind.speed;

    condition = formatCondition(condition);

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", condition);

    conditionElement.innerHTML = condition;

    conditionElement.innerHTML = condition;
    tempratureElement.textContent = `${temperature}`
    windSpeedElement.textContent = `${windSpeed}`;
    let windchill = getWindChill(temperature, windSpeed);

    windChillElement.textContent = `${windchill}`;
}
    /* Calculate Windchill */
function getWindChill(temperature, windSpeed){
    
    if (windSpeed >= 5 && temperature <=50){
        let f = 0;

    f = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));

    return Math.round(f * 100) / 100;
    }
    else{
        return "N/A";
    }
}

function formatCondition(word){
    wordlist = word.split(" ");

    let outputList = [];

    wordlist.forEach(element => {
        capital = element[0].toUpperCase();
        element = capital + element.slice(1);
        outputList.push(element);
    });

    let output = outputList.join(" ");
    console.log(output);
    return output
}


/* let temperature = 64;

let windSpeed = 5; */
/* 
conditionElement.textContent = "Windy"; */
// Ground work for tempratue input






/* Display weather */
apiFetch();