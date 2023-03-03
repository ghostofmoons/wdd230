//connecting to the JSON site
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

//async function to get the data from url using promised based asynchronous behavior
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

//call function getProphetData
getProphetData();


//function that will take the url data and diplay it on site
const displayProphets = (prophets) => {
    const cards = document.querySelector(".cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let infoDiv = document.createElement("div");
        let death = document.createElement("p");
        let served = document.createElement("p");


        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
        birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;
        death.textContent = `Death: ${prophet.death}`;
        served.textContent = `Lead as Prophet for ${prophet.length} years.`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(h2); 
        card.appendChild(infoDiv);       
        infoDiv.appendChild(birthDate);
        infoDiv.appendChild(birthPlace);
        infoDiv.appendChild(death);
        infoDiv.appendChild(served);
        card.appendChild(portrait);
        cards.appendChild(card);
        
    });
}