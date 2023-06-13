const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    /* console.table(data.prophets); */  // note that we reference the prophet array of the data object given the structure of the json file
    
    displayProphets(data.prophets);
    }


function displayProphets(prophets){
  const cards = document.querySelector("div.cards");

  prophets.forEach((prophet) => {
    let card= document.createElement("section");
    let h2 = document.createElement("h2");
    let bDate = document.createElement("p");
    let placeOfBirth = document.createElement("p");
    let portrait = document.createElement("img");

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    bDate.textContent = `Date of Brith: ${prophet.birthdate}`
    placeOfBirth.textContent = `Place of Brith: ${prophet.birthplace}`

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portait of ${prophet.name} ____________`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "220");
    portrait.setAttribute("height","320");

    card.appendChild(h2);
    card.appendChild(bDate);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}

getProphetData();