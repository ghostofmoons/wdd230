


let storeDate = localStorage.getItem("date");




//const todayDate = new Date()
const date =  Date.now();
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
let staticDate = Math.round(date / day);
console.log(staticDate) 

if (storeDate == null) {       
    localStorage.setItem("date", staticDate);
    document.querySelector(".visit").textContent = "-This is your first visit-";
} else {
    let oldStaticDate = localStorage.getItem("date");
    console.log(oldStaticDate);
    console.log(staticDate)    
    let subDates = staticDate - oldStaticDate;
    let message = `- Your last visit was ${subDates} days ago -`;
    document.querySelector(".visit").innerHTML = message;
    
    console.log(subDates);
    localStorage.clear();
    localStorage.setItem("date",staticDate);
}