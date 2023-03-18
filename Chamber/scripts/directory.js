//connect to JSON file
const dataUrl = "json/data.json";

//Function async to fetch the data from JSON file asynchronously
async function getDirectoryData() {
    let response = await fetch(dataUrl);
    let data = await response.json();
    //console.table(data.companies);
    displayCompanies(data.companies);
}

//Call function getDirectoryData
getDirectoryData();


//connect with buttons and set up listeners.  Have class turn on and off on click
let gridBtn = document.querySelector("#directoryGridBtn");
let listBtn = document.querySelector("#directoryListBtn");
let directoryButtons = document.querySelector("article");

//grid button on
gridBtn.addEventListener("click", ()=> {
    directoryButtons.classList.add("directoryGrid");
    directoryButtons.classList.remove("directoryList");
})

//List button off
listBtn.addEventListener("click", () => {
    directoryButtons.classList.add("directoryList");
    directoryButtons.classList.remove("directoryGrid")
})


//Put the JSON data in to a varible and connect it to html page
const displayCompanies = (companies) => {
    let businesses = document.querySelector("#directory");

//For each function going through the data and assigning html
    companies.forEach((company) => {

//Create element for the late out of each company
        let box = document.createElement("section");
        let name = document.createElement("h3");
        let logo = document.createElement("img");
        let address = document.createElement("address");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let catagory = document.createElement("h4");
        
        let info = document.createElement("div");
        let weblogosite = document.createElement("a");

//Tell what the elements will contain
        name.textContent = `${company.name}`;
        logo.setAttribute("src", company.icon);
        logo.setAttribute("alt", `${company.name}'s logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        website.innerHTML = `Vist ${company.name}`;
        website.setAttribute("href", company.website);
        weblogosite.setAttribute("href", company.website);
        
        catagory.textContent = `-${company.businessType}-`;

//What element belongs where
        
        box.appendChild(info);
        info.appendChild(name);
        info.appendChild(logo);
       
        info.appendChild(address);
        info.appendChild(website);
        info.appendChild(phone);
        info.appendChild(catagory);
        businesses.appendChild(box);

    });
}
