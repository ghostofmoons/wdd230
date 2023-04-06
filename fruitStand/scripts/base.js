//Header navigation area
document.querySelector(".icon").onclick = function() {
    //console.log("hi")
    let listNav = document.getElementById("navList");
    if (listNav.style.display === "block") {
        listNav.style.display = "none";
    } else {
        listNav.style.display = "block"
    }
}

//Date info for the footer.  Year copywrite and date and time update

//Get Current date
const todayDate = new Date();

//Get year from current date and use it next to copyright, show only year
document.querySelector("#currentyear").innerHTML = todayDate.getFullYear();

//Get Date and time from todayDate and use it for last update. month, 
//day year time
let editDate = document.lastModified;
document.querySelector("#lastchange").innerHTML = editDate;
