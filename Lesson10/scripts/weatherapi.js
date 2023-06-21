// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

/* Something must have changed so I had to use the latitude and longitude. I got them from OpenWeather's geocoding api */

// Carl Junction url = `https://api.openweathermap.org/data/2.5/weather?lat=37.1795&lon=-94.555&appid=17c3be04bdd5b8a448abfd68abc1e93f&units=imperial`;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=64.837845&lon=-147.716675&appid=17c3be04bdd5b8a448abfd68abc1e93f&units=imperial`;

/*Carl Junction Geocoding api call: "http://api.openweathermap.org/geo/1.0/direct?q=CarlJunction,MO,US&limit=5&appid=17c3be04bdd5b8a448abfd68abc1e93f";*/

/*Fairbanks Geocoding api call: "http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks,AK,US&limit=5&appid=17c3be04bdd5b8a448abfd68abc1e93f";*/

/* weather api call: https://api.openweathermap.org/data/2.5/weather?lat=37.1795&lon=-94.555&appid=17c3be04bdd5b8a448abfd68abc1e93f */


async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
            
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }


}

apiFetch();

function displayResults(weatherData){
    /* Display current temprature Gets temp from weather data */
    currentTemp.innerHTML= `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const weatherDescript = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", weatherDescript);
    captionDesc.textContent= weatherDescript;
}