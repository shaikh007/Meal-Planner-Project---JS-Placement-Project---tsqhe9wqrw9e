let totalCalorieRequired = JSON.parse(localStorage.getItem('totalCalorieValue'));
let spanTag = document.createElement("span");
spanTag.innerHTML = totalCalorieRequired.toFixed(0) + " kcal";
calorieElement.append(spanTag);

let mealDataObj = JSON.parse(localStorage.getItem('mealData'));
document.querySelector(".title-1").innerHTML = mealDataObj.meals[0].title;
document.querySelector(".title-2").innerHTML = mealDataObj.meals[1].title;
document.querySelector(".title-3").innerHTML = mealDataObj.meals[2].title;

let breakfastImageObj = JSON.parse(localStorage.getItem('breakfastImage'));
document.querySelector(".image-1").setAttribute("src", breakfastImageObj.image);
let lunchImageObj = JSON.parse(localStorage.getItem('lunchImage'));
document.querySelector(".image-2").setAttribute("src", lunchImageObj.image);
let dinnerImageObj = JSON.parse(localStorage.getItem('dinnerImage'));
document.querySelector(".image-3").setAttribute("src", dinnerImageObj.image);

let breakfastCalorieObj = JSON.parse(localStorage.getItem('breakfastCalorie'));
document.querySelector(".calorie-1").innerText = parseInt(breakfastCalorieObj.bad[0].amount);
let lunchCalorieObj = JSON.parse(localStorage.getItem('lunchCalorie'));
document.querySelector(".calorie-2").innerText = parseInt(lunchCalorieObj.bad[0].amount);
let dinnerCalorieObj = JSON.parse(localStorage.getItem('dinnerCalorie'));
document.querySelector(".calorie-3").innerText = parseInt(dinnerCalorieObj.bad[0].amount);


function btnHandler_1() {
    if (document.querySelector("#recipe").getAttribute("class") == "btnHidden_1") {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "get-recipe")
        window.scrollTo(0, 500);
        document.querySelector(".recipe-title").innerHTML = mealDataObj.meals[0].title;

        fetch(`https://api.spoonacular.com/recipes/${mealDataObj.meals[0].id}/ingredientWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
            .then((response) => response.json())
            .then((data) => {

                let ulTag_1 = document.createElement("ul");
                let ulTag_2 = document.createElement("ul");
                for (let i = 0; i < data.ingredients.length; i++) {
                    let ingredientValue = 0,
                        ingredientUnit = "";
                    let liTag_1 = document.createElement("li");
                    let liTag_2 = document.createElement("li");
                    liTag_1.innerHTML = data.ingredients[i].name;
                    ingredientValue = data.ingredients[i].amount.us.value;
                    ingredientUnit = data.ingredients[i].amount.us.unit;
                    liTag_2.innerHTML = ingredientValue + " " + ingredientUnit;
                    ulTag_1.appendChild(liTag_1);
                    ulTag_2.appendChild(liTag_2);
                }
                document.querySelector(".ingredients").innerHTML = "<h4>INGREDIENTS</h4>";
                document.querySelector(".ingredients").appendChild(ulTag_1);
                document.querySelector(".steps").innerHTML = "<h4>STEPS</h4>";
                document.querySelector(".steps").appendChild(ulTag_2);
            }).catch(() => console.log("Error"))

        fetch(`https://api.spoonacular.com/recipes/${mealDataObj.meals[0].id}/equipmentWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
            .then((response) => response.json())
            .then((data) => {
                let ulTag_3 = document.createElement("ul");
                for (let i = 0; i < data.equipment.length; i++) {
                    let liTag = document.createElement("li");
                    liTag.innerHTML = data.equipment[i].name;
                    ulTag_3.appendChild(liTag);
                }
                document.querySelector(".equipments").innerHTML = "<h4>EQUIPMENT</h4>";
                document.querySelector(".equipments").appendChild(ulTag_3);
            }).catch(() => console.log("Error"))
    } else {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "btnHidden_1")
    }
}

function btnHandler_2() {
    if (document.querySelector("#recipe").getAttribute("class") == "btnHidden_1") {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "get-recipe")
        window.scrollTo(0, 500);

        document.querySelector(".recipe-title").innerHTML = mealDataObj.meals[1].title;

        let ulTag_1 = document.createElement("ul");
        let ulTag_2 = document.createElement("ul");
        let ulTag_3 = document.createElement("ul");

        fetch(`https://api.spoonacular.com/recipes/${mealDataObj.meals[1].id}/ingredientWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.ingredients.length; i++) {
                    let ingredientValue = 0,
                        ingredientUnit = "";
                    let liTag_1 = document.createElement("li");
                    let liTag_2 = document.createElement("li");
                    liTag_1.innerHTML = data.ingredients[i].name;
                    ingredientValue = data.ingredients[i].amount.us.value;
                    ingredientUnit = data.ingredients[i].amount.us.unit;
                    liTag_2.innerHTML = ingredientValue + " " + ingredientUnit;
                    ulTag_1.appendChild(liTag_1);
                    ulTag_2.appendChild(liTag_2);
                }
                document.querySelector(".ingredients").innerHTML = "<h4>INGREDIENTS</h4>";
                document.querySelector(".steps").innerHTML = "<h4>STEPS</h4>";
                document.querySelector(".ingredients").appendChild(ulTag_1);
                document.querySelector(".steps").appendChild(ulTag_2);
            }).catch(() => console.log("Error"))

        fetch(`https://api.spoonacular.com/recipes/${mealDataObj.meals[1].id}/equipmentWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.equipment.length; i++) {
                    let liTag = document.createElement("li");
                    liTag.innerHTML = data.equipment[i].name;
                    ulTag_3.appendChild(liTag);
                }
                document.querySelector(".equipments").innerHTML = "<h4>EQUIPMENT</h4>";
                document.querySelector(".equipments").appendChild(ulTag_3);
            }).catch(() => console.log("Error"))
    } else {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "btnHidden_1")
    }
}

function btnHandler_3() {

    if (document.querySelector("#recipe").getAttribute("class") == "btnHidden_1") {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "get-recipe")
        window.scrollTo(0, 500);
        document.querySelector(".recipe-title").innerHTML = mealDataObj.meals[2].title;

        let ulTag_1 = document.createElement("ul");
        let ulTag_2 = document.createElement("ul");
        let ulTag_3 = document.createElement("ul");

        fetch(`https://api.spoonacular.com/recipes/${mealDataObj.meals[2].id}/ingredientWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.ingredients.length; i++) {
                    let ingredientValue = 0,
                        ingredientUnit = "";
                    let liTag_1 = document.createElement("li");
                    let liTag_2 = document.createElement("li");
                    liTag_1.innerHTML = data.ingredients[i].name;
                    ingredientValue = data.ingredients[i].amount.us.value;
                    ingredientUnit = data.ingredients[i].amount.us.unit;
                    liTag_2.innerHTML = ingredientValue + " " + ingredientUnit;
                    ulTag_1.appendChild(liTag_1);
                    ulTag_2.appendChild(liTag_2);
                }
                document.querySelector(".ingredients").innerHTML = "<h4>INGREDIENTS</h4>";
                document.querySelector(".steps").innerHTML = "<h4>STEPS</h4>";
                document.querySelector(".ingredients").appendChild(ulTag_1);
                document.querySelector(".steps").appendChild(ulTag_2);
            }).catch(() => console.log("Error"))

        fetch(`https://api.spoonacular.com/recipes/${mealDataObj.meals[2].id}/equipmentWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.equipment.length; i++) {
                    let liTag = document.createElement("li");
                    liTag.innerHTML = data.equipment[i].name;
                    ulTag_3.appendChild(liTag);
                }
                document.querySelector(".equipments").innerHTML = "<h4>EQUIPMENT</h4>";
                document.querySelector(".equipments").appendChild(ulTag_3);
            }).catch(() => console.log("Error"))
    } else {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "btnHidden_1")
    }
}