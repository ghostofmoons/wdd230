//Meet and Greet take notice, It appears the day before the advent takes place
//if the weekday is monday or tuesday this container will appear. 

const weekday = todayDate.getDay();
if (weekday != 2 && weekday != 1) 
{ //console.log(weekday)
    let meetoff = document.getElementById("meetandgreet");
    meetoff.classList.toggle("off");   
};


//connect to JSON file
const dataUrl = "json/data.json";

//Function async to fetch the data from JSON file asynchronously
async function getDirectoryData() {
    let response = await fetch(dataUrl);
    let data = await response.json();
    //console.table(data.companies);
    displayCompanies(data.companies);
}

getDirectoryData();

function spotLightArea(company, spot) {
    console.log(spot)
    
//Create element for the late out of each company
    let box = document.createElement("div");            
    let logo = document.createElement("img");            
    let info = document.createElement("div");
    let website = document.createElement("a");            
    let nameLogo = document.createElement("div");
    let pitch = document.createElement("p");  

//Tell what the elements will contain
    
    logo.setAttribute("src", company.icon); 
    logo.setAttribute("alt", `${company.name}'s logo`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");            
    pitch.textContent = `${company.pitch}`;
    
    website.setAttribute("href", company.website);
    
    

//What element belongs where
    box.appendChild(nameLogo);
    box.appendChild(info);            
    website.appendChild(logo);         
    nameLogo.appendChild(website);
    info.appendChild(pitch);
    spot.appendChild(box);
       
}

//function set up to use the data from the Jason file
function displayCompanies(companies) {
    companies.forEach(company => {

        //single out only the gold companies
        if (company.memberLevel === 'Gold') {

            let firstSpot = document.querySelector(".spot1")
            let secondSpot = document.querySelector(".spot2");
            let thirdSpot = document.querySelector(".spot3");
            
           //console.table(company);
           if (company.name === "SingleCert LLC") {
                //console.log(company);
                

            spotLightArea(company, firstSpot); 

           } else if (company.name === "Riverton Hotel and Spa") {

            spotLightArea(company, secondSpot);
           } else {
            spotLightArea(company, thirdSpot);
           }
            

        }
    });
}

