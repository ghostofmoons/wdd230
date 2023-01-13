//Get Current date
const todayDate = new Date();

//Get year from current date and use it next to copyright in footer
document.querySelector("#currentyear").innerHTML = todayDate.getFullYear();

//Get Date and time from todayDate and use it for last update
let editDate = document.lastModified;
document.querySelector("#lastchange").innerHTML = editDate;
