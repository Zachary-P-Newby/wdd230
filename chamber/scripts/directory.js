let showCards = true;

const cardsButton = document.getElementById("cardsButton");
const listButton = document.getElementById("listButton");
const cardDiv = document.querySelector("#cardsDiv");
const listDiv = document.querySelector("#listDiv");
const businessList = document.querySelector("#businessList");


const url = "json/data.json";

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    
    let businesses = data;
/* Create card and list elements */
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
        
        cardDiv.appendChild(card);

        let item= document.createElement("li");
        item.innerHTML = `<strong>${business.name}</strong> | Address: ${business.address} | Membership: ${business.level} `;
        businessList.appendChild(item);
  });
    
   /*  if(showCards == true){
        displayBusinessCards(businesses);
    }
    else{
        displayBusinessList(businesses);
    }

    return data */

}

getBusinessData();



function ShowCards(){
    showCards = true;
    cardDiv.style.display = "grid";
    listDiv.style.display = "none";
    /* displayBusinessCards(businesses); */
}

function ShowList(){
    showCards = false;
    cardDiv.style.display = "none";
    listDiv.style.display = "block";
    /* displayBusinessList(businesses); */
}

cardsButton.onclick = function(){ShowCards()};
listButton.onclick = function(){ShowList()};

/* Not gonna lie, I reused code from the learning activity */

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


let lastmod = document.lastModified;

document.getElementById("last_mod_date").innerHTML = lastmod;


/* function displayBusinessCards(businesses){
    
    businesses.forEach((business) => {
        let card= document.createElement("article");
        let name = document.createElement("h2");
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
        
        cardDiv.appendChild(card);
  });
} */


/* function displayBusinessList(businesses){
    
    businesses.forEach((business) => {
        let item= document.createElement("li");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let level = document.createElement("p");
        
        name.textContent = business.name;
        
        address.textContent = business.address;
        level.textContent = business.level;
        
        item.appendChild(name);
        item.appendChild(address);
        item.appendChild(level);

        item.textContent = `${business.name} | Address: ${business.address} | Membership: ${business.level} `;
        
        businessList.appendChild(item);
  });
} */
