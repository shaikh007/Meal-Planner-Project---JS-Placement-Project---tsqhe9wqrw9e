const mealsbtn = document.getElementById("meals-btn");

// const cardContainer = document.getElementById("meals");
// const mealsDetails = document.getElementById("details");
// const ingredientSection = document.getElementById("ingredients");
// const stepsSection = document.getElementById("steps");
// const equipmentSection = document.getElementById("equipment");
// const recipeSection = document.getElementById("recipe-types");

mealsbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const physicalActivity = document.getElementById("activity").value;
    var bmr1 = bmr(height, weight, age, gender, physicalActivity);
    var calories1 = caluculateCalories(physicalActivity, bmr1);
    console.log("function");
    console.log(bmr1);
    console.log(calories1);
    const url = "https://api.spoonacular.com/mealplanner/generate?targetCalories=" + calories1.toString() + "&apiKey=428bddd56b0048cbaec366e299f10f98";
    console.log(url);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    const date = new Date();

    let day = date.getDay();
    switch (day) {
        case 0:
            ;
    }
})

function bmr(height, weight, age, gender) {
    // console.log(height);
    // console.log(weight);
    // console.log(age);
    // console.log(gender);
    // console.log(physicalActivity);
    if (gender === "women") {
        return 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
    } else {
        return 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
    }
}

function caluculateCalories(physicalActivity, bmr1) {
    if (physicalActivity === "light") {
        return bmr1 * 1.375
    } else if (physicalActivity === "moderate") {
        return bmr1 * 1.55;
    } else {
        return bmr1 * 1.725;
    }
}


// //from postman for meals
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=428bddd56b0048cbaec366e299f10f98", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// steps and equipments
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=428bddd56b0048cbaec366e299f10f98&stepBreakdown=true", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));


// // below fetch is for recipe section
// //information
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=428bddd56b0048cbaec366e299f10f98&includeNutrition=true", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));