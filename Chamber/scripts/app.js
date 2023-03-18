//Get Current date
const todayDate = new Date();

//Get year from current date and use it next to copyright, show only year
document.querySelector("#currentyear").innerHTML = todayDate.getFullYear();

//Get Date and time from todayDate and use it for last update. month, 
//day year time
let editDate = document.lastModified;
document.querySelector("#lastchange").innerHTML = editDate;

//get date for header set up. Get current date, set it up to read weekday,
//month day and year
const nowdate = document.querySelector(".today");
const fulldate = new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(todayDate);
nowdate.innerHTML = `<em>${fulldate}</em>`;

//making the hamburger work. When screen is smaller the hamberger will appear
//when clicked on the navigation will appear.

function toggleNavMenu() {
    document.getElementById("headerNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
const computer = document.getElementById("hamburger");
computer.onclick = toggleNavMenu;




   