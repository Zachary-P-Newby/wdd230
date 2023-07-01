/* Const Variables */
const hamburger = document.getElementById("navBurger");
const Spotlight = document.querySelector("#spotlightSidebar");
const url = "json/data.json";



/* Nav Menu ------------------------------------------------------------ */
function toggleMenu (){
    document.getElementById("navBurger").classList.toggle("open");
    document.getElementById("navMenu").classList.toggle("open");
}
hamburger.onclick = toggleMenu;

/* Date ----------------------------------------------------------------- */
let currentDate = new Date;
let weekDay = currentDate.getDay();
let month = currentDate.getMonth();

let week = Array(null, "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday", "Sunday");

let months = Array("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

document.getElementById("date").textContent = `${week[weekDay]}, ${currentDate.getDate()} ${months[month]} ${currentDate.getFullYear()}`;

let banner = document.querySelector("#banner");
if (weekDay  == 1 || weekDay == 2){
    banner.style.display = "block";
}
else{
    banner.style.display = "none";
}

/* CJ Spotlight--------------------------------------------------------------- */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();

    makeCards(data);
}

function makeCards(data){

    businesses = [];
    let count = 0;
    while(count < 3){
        busy = data[getRandomInt(12)]
        
        if (busy in businesses === false && (busy.level != "Bronze" && busy.level != "Non-Profit")){
            businesses.push(busy);
            count++;
        }
        /* else if{
            businesses.push(busy);
            count++;
        } */
    }



    businesses.forEach((business) => {
        let card= document.createElement("article");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let level = document.createElement("p");
        let logo = document.createElement("img");
        
        name.textContent = business.name;
        
        address.textContent = business.address;
        level.textContent = business.level;
        
        logo.setAttribute("src", business.image);
        logo.setAttribute("alt", `${business.name} Logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "120");
        logo.setAttribute("height","120");
        
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(level);
        
        Spotlight.appendChild(card);
        });
}

/* Last modified Date ------------------------------------------------------------------------- */

let lastmod = document.lastModified;

document.getElementById("last_mod_date").innerHTML = lastmod;

/* Function Calls */
getBusinessData();

/* 

 */

        /* let item= document.createElement("li");
        item.innerHTML = `<strong>${business.name}</strong> | Address: ${business.address} | Membership: ${business.level} `;*/