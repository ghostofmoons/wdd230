// variable to connect with fruit json
let fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

//Function for fetching the information from fruit json
async function fetchFruitLists() {
    let response = await fetch(fruitURL);
    let fruitLists = await response.json();
    //console.log(fruitLists);
    firstDrinkChoice(fruitLists);
    secondDrinkChoice(fruitLists);
    thirdDrinkChoice(fruitLists);
    firstBasketChoice(fruitLists);
    secondBasketChoice(fruitLists);
    thirdBasketChoice(fruitLists);
    fourthBasketChoice(fruitLists);
    fruitDiscriptions(fruitLists);
}

// call fetchFruitLists function
fetchFruitLists()

//Discriptions for all the fruit put in to element and connect to html page
const fruitDiscriptions = (fruitItems) => {
    const discribeFruit = document.querySelector(".fruitdescription");

    //For each to sort through arrays
    fruitItems.forEach((fruitItem) => {
        let card = document.createElement("section");
        let fruitname = document.createElement("h3");
        let nutrition = document.createElement("h4");
        let nutritionCarbohydrates = document.createElement("p");
        let information = document.createElement("div");
        let nutritionCalories = document.createElement("p");
        let nutritionFat = document.createElement("p");
        let nutritionProtein = document.createElement("p");
        let nutritionSugar = document.createElement("p");
        let listNutrition = document.createElement("div");        
        
    //What the elements will contain
        fruitname.textContent = fruitItem.name;
        nutrition.textContent = "Nutrition:";
        nutritionCalories.textContent = `Calories: ${fruitItem.nutritions.calories}`;
        nutritionCarbohydrates.textContent = `Carbs: ${fruitItem.nutritions.carbohydrates}`;
        nutritionFat.textContent = `Fat: ${fruitItem.nutritions.fat}`;
        nutritionProtein.textContent = ` Protein: ${fruitItem.nutritions.protein}`;
        nutritionSugar.textContent = `Sugar: ${fruitItem.nutritions.sugar}`;
        
        
       
        

    //Where the elements belong
        card.appendChild(information);
        information.appendChild(fruitname);
        information.appendChild(nutrition);
        information.appendChild(listNutrition);
        listNutrition.appendChild(nutritionCalories);
        listNutrition.appendChild(nutritionCarbohydrates);
        listNutrition.appendChild(nutritionFat);
        listNutrition.appendChild(nutritionProtein);
        listNutrition.appendChild(nutritionSugar);
        discribeFruit.appendChild(card);
    });
}


// Drink Choices JSON data put in to elements and connected to html page
const firstDrinkChoice = (fruitLists) => {
    let firstOptions = document.querySelector("#firstchoice");
    
   
    //For each function to sort thur arrays
    fruitLists.forEach((fruitList) => {
        let fruitOption = document.createElement("option");

    //What the element will contain
        fruitOption.textContent = fruitList.name;
    //Where element belongs
        firstOptions.appendChild(fruitOption);
        
    });    
}
const secondDrinkChoice = (fruitLists) => {    
    let secondOptions = document.querySelector("#secondchoice");   

    //For each function to sort thur arrays
    fruitLists.forEach((fruitList) => {
        let fruitOption = document.createElement("option");

    //What the element will contain
        fruitOption.textContent = fruitList.name;

    //Where element belongs        
        secondOptions.appendChild(fruitOption);
        
    });    
}
const thirdDrinkChoice = (fruitLists) => {    
    let thirdOptions = document.querySelector("#thirdchoice");
   
    //For each function to sort thur arrays
    fruitLists.forEach((fruitList) => {
        let fruitOption = document.createElement("option");

    //What the element will contain
        fruitOption.textContent = fruitList.name;

    //Where element belongs        
        thirdOptions.appendChild(fruitOption);
    });    
}

//Fruit basket choices JSON data put in to elements and connected to html page
const firstBasketChoice = (fruitLists) => {    
    let firstOptions = document.querySelector("#firstfruits");
   
    //For each function to sort thur arrays
    fruitLists.forEach((fruitList) => {
        let fruitOption = document.createElement("option");

    //What the element will contain
        fruitOption.textContent = fruitList.name;

    //Where element belongs        
        firstOptions.appendChild(fruitOption);
    });    
}
const secondBasketChoice = (fruitLists) => {    
    let secondOptions = document.querySelector("#secondfruits");
   
    //For each function to sort thur arrays
    fruitLists.forEach((fruitList) => {
        let fruitOption = document.createElement("option");

    //What the element will contain
        fruitOption.textContent = fruitList.name;

    //Where element belongs        
        secondOptions.appendChild(fruitOption);
    });    
}
const thirdBasketChoice = (fruitLists) => {    
    let thirdOptions = document.querySelector("#thirdfruits");
   
    //For each function to sort thur arrays
    fruitLists.forEach((fruitList) => {
        let fruitOption = document.createElement("option");

    //What the element will contain
        fruitOption.textContent = fruitList.name;

    //Where element belongs        
        thirdOptions.appendChild(fruitOption);
    });    
}
const fourthBasketChoice = (fruitLists) => {    
    let fourthOptions = document.querySelector("#fourthfruits");
   
    //For each function to sort thur arrays
    fruitLists.forEach((fruitList) => {
        let fruitOption = document.createElement("option");

    //What the element will contain
        fruitOption.textContent = fruitList.name;

    //Where element belongs        
        fourthOptions.appendChild(fruitOption);
    });    
}

//get form data for drink thank you
let  fruitForm = document.querySelector("#drinkForm");
fruitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let oneFruit = document.getElementById("firstchoice").value;
    let twoFruit = document.getElementById("secondchoice").value;
    let threeFruit = document.getElementById("thirdchoice").value;
    let nameFruit = document.getElementById("nameFruit").value;
    let emailFruit = document.getElementById("emailFruit").value;
    let phoneFruit = document.getElementById("phoneFruit").value;
    let instructions = document.getElementById("fruitspecialInstruction").value;

  

// put form data into thank area    
    let fruitName = document.querySelector("#fruitName");
    let fruitemail = document.querySelector("#fruitemail");
    let fruitphone = document.querySelector("#fruitphone");
    let fruitOne = document.querySelector("#fruitOne");
    let fruitTwo = document.querySelector("#fruitTwo");
    let fruitThree = document.querySelector("#fruitThree");
    let fruitInstructions = document.querySelector("#fruitInstructions");

//change what the element contains
    fruitName.textContent = `Name: ${nameFruit}`;
    fruitemail.textContent = `Email: ${emailFruit}`;
    fruitphone.textContent = `Phone: ${phoneFruit}`;
    fruitOne.textContent = `1st Choice: ${oneFruit}`;
    fruitTwo.textContent = `2st Choice: ${twoFruit}`;
    fruitThree.textContent = `2st Choice: ${threeFruit}`;
    fruitInstructions.textContent = `Special Instructions: ${instructions}`; 

//turn on and off block display for thank you
    let thankYou = document.getElementById("drinkThanks");
    if (thankYou.style.display === "block") {
        thankYou.style.display = "none";
    } else {
        thankYou.style.display = "block"
    }
    
    
})

//get form data for drink thank you
let  basketForm = document.querySelector("#basketForm");
fruitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let oneFruit = document.getElementById("firstfruits").value;
    let twoFruit = document.getElementById("secondfruits").value;
    let threeFruit = document.getElementById("thirdchoice").value;
    let fourFruit = document.getElementById("fourthfruits").value;
    let nameFruit = document.getElementById("basketname").value;
    let emailFruit = document.getElementById("basketemail").value;
    let phoneFruit = document.getElementById("basketemail").value;
    let instructions = document.getElementById("basketspecialInstruction").value;

  

// put form data into thank area    
    let fruitName = document.querySelector("#basketName");
    let fruitemail = document.querySelector("#basketemail");
    let fruitphone = document.querySelector("#basketphone");
    let fruitOne = document.querySelector("#basketOne");
    let fruitTwo = document.querySelector("#fruitTwo");
    let fruitThree = document.querySelector("#basketThree");
    let fruitFour = document.querySelector("#basketFour");
    let fruitInstructions = document.querySelector("#basketInstructions");

//change what the element contains
    fruitName.textContent = `Name: ${nameFruit}`;
    fruitemail.textContent = `Email: ${emailFruit}`;
    fruitphone.textContent = `Phone: ${phoneFruit}`;
    fruitOne.textContent = `1st Choice: ${oneFruit}`;
    fruitTwo.textContent = `2nd Choice: ${twoFruit}`;
    fruitThree.textContent = `3rd Choice: ${threeFruit}`;
    fruitFour.textContent = `4th Choice: ${fourFruit}`;
    fruitInstructions.textContent = `Special Instructions: ${instructions}`;
    
//turn on and off block display for thank you 
    let thankYou = document.getElementById("basketThanks");
    if (thankYou.style.display === "block") {
        thankYou.style.display = "none";
    } else {
        thankYou.style.display = "block"
    }

})


    
    
    

