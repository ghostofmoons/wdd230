//Meet and Greet take notice, It appears the day before the advent takes place
//if the weekday is monday or tuesday this container will appear. 

const weekday = todayDate.getDay();
if (weekday != 2 && weekday != 1) 
{ //console.log(weekday)
    let meetoff = document.getElementById("meetandgreet");
    meetoff.classList.toggle("off");   
};

// //get the date for the hidden input when submitted
// document.getElementById("joinDateTime").value = todayDate.toDateString();
