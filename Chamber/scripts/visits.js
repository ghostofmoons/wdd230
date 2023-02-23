//check to see if there is something stored
//if there is no logged date say "This is your first visit"
//store date
//else get date and subtract from today's date
//then say "It's beem 'date difference' since last visit"
//get new date and replace old date

let storeDate = localStorage.getItem("date");


if (storeDate == null) {    
    localStorage.setItem("date", todayDate.getDate());
    document.querySelector(".visit").textContent = "This is your first visit";
} else {
    let oldDate = localStorage.getItem("date");
    console.log(oldDate);
    let subDates = todayDate.getDate() - oldDate;
    let message = `Your last visit was ${subDates} days ago`;
    document.querySelector(".visit").innerHTML = message;
    console.log(subDates);
    localStorage.setItem("date", todayDate.getDate());
}
