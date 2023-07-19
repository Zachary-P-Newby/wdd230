const fruits_url = `https://brotherblazzard.github.io/canvas-content/fruit.json`;
const drinkForm = document.getElementById("drink-form");
const ingredientSelector1 = document.getElementById("ingredient-selector1");
const ingredientSelector2 = document.getElementById("ingredient-selector2");
const ingredientSelector3 = document.getElementById("ingredient-selector3");
const submitBtn = document.getElementById("submit-btn");
const orderMessageBox = document.getElementById("order-message-box");

let fruits = [];

if(parseInt(localStorage.getItem("drinkCount")) <= -1){
    localStorage.setItem("drinkCount", 0)
}


async function getFruit(array){
    let response = await fetch(fruits_url);
    if(response.ok){
        data = await response.json();
        displayFruitOptions(data, array);
    }
    else{
        throw Error(await response.text());
    }
}

function displayFruitOptions(data, array){


    data.forEach(element => {
        
        let fruitOption = document.createElement("option");
        fruitOption.value = `${element.name}`;
        fruitOption.innerText = `${element.name}`;
        
        ingredientSelector1.appendChild(fruitOption);

        let fruitOption2 = document.createElement("option");
        fruitOption2.value = `${element.name}`;
        fruitOption2.innerText = `${element.name}`;
        ingredientSelector2.appendChild(fruitOption2);

        let fruitOption3 = document.createElement("option");
        fruitOption3.value = `${element.name}`;
        fruitOption3.innerText = `${element.name}`;
        ingredientSelector3.appendChild(fruitOption3);

        array.push(element);
    });

}



function submitForm(event){
    let count = parseInt(localStorage.drinkCount);
    count +=1;
    localStorage.drinkCount = count;
    event.preventDefault();
    displayOrderOutput();
}

/* Get Nutritions */
function getCalories(data, value){
    let result;
    data.forEach(element => {
      if(element.name == value){
        result = element.nutritions.calories;
      }
    });

    return result;
}

function getCarbs(data, value){
    let result;
    data.forEach(element => {
      if(element.name == value){
        result = element.nutritions.carbohydrates;
      }
    });

    return result;
}

function getProtein(data, value){
    let result;
    data.forEach(element => {
      if(element.name == value){
        result = element.nutritions.protein;
      }
    });

    return result;
}

function getFat(data, value){
    let result;
    data.forEach(element => {
      if(element.name == value){
        result = element.nutritions.fat;
      }
    });

    return result;
}

function getSugar(data, value){
    let result;
    data.forEach(element => {
      if(element.name == value){
        result = element.nutritions.sugar;
      }
    });

    return result;
}




function displayOrderOutput(){

    const thankYou = document.createElement("h2");
    thankYou.innerText = "Thank you for ordering!";

    const message = document.createElement("p");
    message.innerText = "This website is a school project and not real, not data has been collected beyond the drinks you orderd, which is stored in the local storage of your browser.";

    
    const userInfo = document.createElement("div");
    userInfo.innerHTML = `<h3>User info:</h3><ul><p>Name: ${document.getElementById("name").value}</p><p>Email: ${document.getElementById("email").value}</p><p>Phone: ${document.getElementById("phone").value}</p></ul>`;
    
    const drinkInfo = document.createElement("div");
    
    const drinkInfoHeader = document.createElement("h3");
    drinkInfoHeader.innerText="Drink Information:";
    const ingredientListHeader = document.createElement("h4");
    ingredientListHeader.innerText="Ingredients:";

    const ingredientList = document.createElement("ul");
    ingredientList.innerHTML = `<li>${document.getElementById("ingredient-selector1").value}</li><li>${document.getElementById("ingredient-selector2").value}</li><li>${document.getElementById("ingredient-selector3").value}</li>`;

    let totalCalories = 0;
    totalCalories += getCalories(fruits, document.getElementById("ingredient-selector1").value);
    totalCalories += getCalories(fruits, document.getElementById("ingredient-selector2").value);
    totalCalories += getCalories(fruits, document.getElementById("ingredient-selector3").value);
    
    let totalCarbs = 0;
    totalCarbs += getCarbs(fruits, document.getElementById("ingredient-selector1").value);
    totalCarbs += getCarbs(fruits, document.getElementById("ingredient-selector2").value);
    totalCarbs += getCarbs(fruits, document.getElementById("ingredient-selector3").value);

    let totalProtien = 0;
    totalProtien += getProtein(fruits, document.getElementById("ingredient-selector1").value);
    totalProtien += getProtein(fruits, document.getElementById("ingredient-selector2").value);
    totalProtien += getProtein(fruits, document.getElementById("ingredient-selector3").value);

    let totalFat = 0;
    totalFat += getFat(fruits, document.getElementById("ingredient-selector1").value);
    totalFat += getFat(fruits, document.getElementById("ingredient-selector2").value);
    totalFat += getFat(fruits, document.getElementById("ingredient-selector3").value);

    let totalSugar = 0;
    totalSugar += getSugar(fruits, document.getElementById("ingredient-selector1").value);
    totalSugar += getSugar(fruits, document.getElementById("ingredient-selector2").value);
    totalSugar += getSugar(fruits, document.getElementById("ingredient-selector3").value);
    
    const nutritions = document.createElement("ul");
    nutritions.innerHTML = `<li>Total Calories: ${totalCalories}</li><li>Total Carbohydrates: ${totalCarbs} Grams</li><li>Total Protien: ${totalProtien} Grams</li><li>Total Fat: ${totalFat} Grams</li><li>Total Sugar: ${totalSugar} Grams</li>`;

    drinkInfo.appendChild(drinkInfoHeader);
    drinkInfo.appendChild(ingredientListHeader);
    drinkInfo.appendChild(ingredientList);
    drinkInfo.appendChild(nutritions);


    
    const specialDirections = document.createElement("div");
    specialDirections.innerHTML = `<h3>Special Directions:</h3><ul><p>${document.getElementById("special-instructions").value}</p></ul>`;
    
    
    orderMessageBox.appendChild(thankYou);
    orderMessageBox.appendChild(message);
    orderMessageBox.appendChild(userInfo);
    orderMessageBox.appendChild(drinkInfo)
    orderMessageBox.appendChild(specialDirections);
}


getFruit(fruits);



drinkForm.addEventListener("submit", submitForm);