//connecting to the JSON site
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

//async function to get the data from url using promised based asynchronous behavior
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
}

//call function getProphetData
getProphetData();


//function that will take the url data and diplay it on site
function displayProphets(prophets) {
    let prophetCards = document.querySelector(".cards");
    prophets.forEach(htmlSetUp);
}

function htmlSetUp(prophet, info) {
    let box 
}
 