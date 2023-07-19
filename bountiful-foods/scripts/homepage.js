/* Current weather */
const weatherImg = document.getElementById("weather-img");
const weatherConditions = document.getElementById("weather-conditions");
const weatherDescription = document.getElementById("weather-description");
const temprature = document.getElementById("temprature");
const humidity = document.getElementById("humidity");
/* Forecast */
const day1Img = document.getElementById("day1Img");
const day1Conditions = document.getElementById("day1Conditions");
const day1Temp = document.getElementById("day1Temp");
const day2Img = document.getElementById("day2Img");
const day2Conditions = document.getElementById("day2Conditions");
const day2Temp = document.getElementById("day2Temp");
const day3Img = document.getElementById("day3Img");
const day3Conditions = document.getElementById("day3Conditions");
const day3Temp = document.getElementById("day3Temp");
/* urls */
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=117.3506&appid=17c3be04bdd5b8a448abfd68abc1e93f&units=imperial`;
const dailyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=117.3506&cnt=4&appid=17c3be04bdd5b8a448abfd68abc1e93f&units=imperial`
/* area selection */
const areaBtn = document.getElementById("area-btn");
const areaBtnList = document.getElementById("area-btn-list");
const carlsbadBtn = document.getElementById("carlsbad-btn");
const oceansideBtn = document.getElementById("oceanside-btn");
const encinitasBtn = document.getElementById("encinitas-btn");
const solanaBtn = document.getElementById("solana-btn");
const santaBarbraBtn = document.getElementById("santa-barbra-btn");

const carlsbadInfo = document.getElementById("carlsbad-info");
const oceansideInfo = document.getElementById("oceanside-info");
const encinitasInfo = document.getElementById("encinitas-info");
const solanaInfo = document.getElementById("solana-info");
const santaBarbraInfo = document.getElementById("santa-barbra-info");

const today = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/* Functions */


async function getWeatherInfo(){
    try{
        let response = await fetch(currentUrl);
        if(response.ok){
            const data = await response.json();

            displayWeather(data);
        }
        else{
            throw Error(await response.text());
        }

        let response2 = await fetch(dailyUrl);
        if(response2.ok){
            const data2 = await response2.json();

            displayForecast(data2);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch(error){
    }
}

function displayWeather(data){
    weatherImg.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherImg.setAttribute("alt", data.weather[0].main);

    weatherConditions.textContent = data.weather[0].main;
    weatherDescription.textContent = data.weather[0].description;
    temprature.textContent = data.main.temp;
    humidity.textContent = `${data.main.humidity}%`
}

function displayForecast(data){
    day1Img.setAttribute("src", `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`);
    day1Img.setAttribute("alt", data.list[1].weather[0].main);
    document.getElementById("tomorrow").innerText = dayNames[today.getDay()+1];

    day1Conditions.textContent = data.list[1].weather[0].main;
    day1Temp.textContent = data.list[1].main.temp;

    day2Img.setAttribute("src", `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`);
    day2Img.setAttribute("alt", data.list[2].weather[0].main);
    document.getElementById("overmorrow").innerText = dayNames[today.getDay()+2];

    day2Conditions.textContent = data.list[2].weather[0].main;
    day2Temp.textContent = data.list[2].main.temp;

    day3Img.setAttribute("src", `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`);
    day3Img.setAttribute("alt", data.list[3].weather[0].main);
    document.getElementById("next-day").innerText = dayNames[today.getDay()+3];

    day3Conditions.textContent = data.list[3].weather[0].main;
    day3Temp.textContent = data.list[3].main.temp;
}


/* ------------------------------------------- */


if(parseInt(localStorage.getItem("drinkCount")) >= -1){
    
    let count = parseInt(localStorage.drinkCount);

    localStorage.drinkCount = count;
    
}
else{
    localStorage.setItem("drinkCount", 0)

}


let drinkCount = localStorage.getItem("drinkCount", 0);

document.querySelector("#drink-count").innerHTML = drinkCount;


/* ------------------------------------------- */

function toggleMenu(){
    areaBtn.classList.toggle("open");
    areaBtnList.classList.toggle("open");
}
areaBtn.onclick = toggleMenu;

document.getElementById("area-btn-span").innerText = "Carlsbad";
    
carlsbadBtn.addEventListener("click", () => {
    carlsbadInfo.style.display = "block";
    oceansideInfo.style.display = "none";
    encinitasInfo.style.display = "none";
    solanaInfo.style.display = "none";
    santaBarbraInfo.style.display = "none";
    document.getElementById("area-btn-span").innerText = "Carlsbad";
    toggleMenu();
})

oceansideBtn.addEventListener("click", () => {
    carlsbadInfo.style.display = "none";
    oceansideInfo.style.display = "block";
    encinitasInfo.style.display = "none";
    solanaInfo.style.display = "none";
    santaBarbraInfo.style.display = "none";
    document.getElementById("area-btn-span").innerText = "Oceanside";
    toggleMenu();
})

encinitasBtn.addEventListener("click", () => {
    carlsbadInfo.style.display = "none";
    oceansideInfo.style.display = "none";
    encinitasInfo.style.display = "block"
    solanaInfo.style.display = "none";
    santaBarbraInfo.style.display = "none";
    document.getElementById("area-btn-span").innerText = "Encinitas";
    toggleMenu();
})

solanaBtn.addEventListener("click", () => {
    carlsbadInfo.style.display = "none";
    oceansideInfo.style.display = "none";
    encinitasInfo.style.display = "none";
    solanaInfo.style.display = "block";
    santaBarbraInfo.style.display = "none";
    document.getElementById("area-btn-span").innerText = "Solana Beach";
    toggleMenu();
})

santaBarbraBtn.addEventListener("click", () => {
    carlsbadInfo.style.display = "none";
    oceansideInfo.style.display = "none";
    encinitasInfo.style.display = "none";
    solanaInfo.style.display = "none";
    santaBarbraInfo.style.display = "block";
    document.getElementById("area-btn-span").innerText = "Santa Barbara";
    toggleMenu();
}) 


/* ------------------------------------------- */
getWeatherInfo();