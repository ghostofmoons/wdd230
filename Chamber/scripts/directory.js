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

//Put the JSON data in to a varible and connect it to html page
const displayCompanies = (companies) => {
    let businesses = document.querySelector(".directory");

//For each function going through the data and assigning html
    companies.forEach((company) => {

//Create element for the late out of each company
        let box = document.createElement("section");
        let name = document.createElement("h3");
        let logo = document.createElement("img");
        let address = document.createElement("address");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let catagory = document.createElement("p");
        let nameLogo = document.createElement("div");
        let info = document.createElement("div");

//Tell what the elements will contain
        name.textContent = `${company.name}`;
        logo.setAttribute("src", company.icon);
        logo.setAttribute("alt", `${name}'s logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        website.innerHTML = `Vist ${company.name}'s Website`;
        website.setAttribute("href", company.website);
        
        catagory.textContent = `-${company.businessType}-`;

//What element belongs where
        box.appendChild(nameLogo);
        box.appendChild(info);
        nameLogo.appendChild(name);
        nameLogo.appendChild(logo);
        info.appendChild(address);
        info.appendChild(website);
        info.appendChild(phone);
        info.appendChild(catagory);
        businesses.appendChild(box);

    });
}
