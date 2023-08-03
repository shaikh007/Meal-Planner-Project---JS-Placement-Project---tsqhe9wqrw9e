const heightElement = document.querySelector("#height");
const weightElement = document.querySelector("#weight");
const ageElement = document.querySelector("#age");
const genderElement = document.querySelector("#gender");
const activityElement = document.querySelector("#activity");
const calorieElement = document.querySelector(".calorie");
let BMR = 0;
let totalCalorie = 0;

function buttonHandler() {

    const heightValue = Number(heightElement.value);
    const weightValue = Number(weightElement.value);
    const ageValue = Number(ageElement.value);
    const genderValue = genderElement.value;
    const activityValue = activityElement.value;
    if (heightValue && weightValue && ageValue && genderValue && activityValue) {
        if (genderValue === "male") {
            BMR = 66.47 + (13.75 * weightValue) + (5.003 * heightValue) - (6.755 * ageValue);
        } else {
            BMR = 655.1 + (9.563 * weightValue) + (1.850 * heightValue) - (4.676 * ageValue);
        }
        if (activityValue === "light") {
            totalCalorie = BMR * 1.375;
        }
        if (activityValue === "moderate") {
            totalCalorie = BMR * 1.55;
        }
        if (activityValue === "active") {
            totalCalorie = BMR * 1.725;
        }
        localStorage.setItem('totalCalorieValue', JSON.stringify(totalCalorie));
        mealGenerationApi();
        alert("Please wait fetching approriate meal....")
    } else {
        alert("Please Fill The Required Field")
    }
}

const titleElement = document.querySelector(".title");
titleElement.addEventListener("click", () => {
    window.location.href = "index.html";
});

const logoElement = document.querySelector(".logo-image");
logoElement.addEventListener("click", () => {
    window.location.href = "index.html";
});



//   **API CALL FOR MEAL GENERATION
async function mealGenerationApi() {
    let totalCalorieRequired = JSON.parse(localStorage.getItem('totalCalorieValue'));
    let response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=428bddd56b0048cbaec366e299f10f98&timeFrame=day&targetCalries=${totalCalorieRequired}`)
    let data = await response.json()
    localStorage.setItem("mealData", JSON.stringify(data))
    await mealImageAndCalorieApiFunctions(data)
}

// ** FUNCTION FOR MEAL IMAGE AND ITS CALORIE GENERATION
async function mealImageAndCalorieApiFunctions(data) {
    // ** API CALL FOR BREAKFAST MEAL IMAGE
    let response1 = await fetch(`https://api.spoonacular.com/recipes/${data.meals[0].id}/information?apiKey=428bddd56b0048cbaec366e299f10f98`)
    let data1 = await response1.json();
    localStorage.setItem("breakfastImage", JSON.stringify(data1))


    let response2 = await fetch(`https://api.spoonacular.com/recipes/${data.meals[1].id}/information?apiKey=428bddd56b0048cbaec366e299f10f98`)
    let data2 = await response2.json();
    localStorage.setItem("lunchImage", JSON.stringify(data2))


    let response3 = await fetch(`https://api.spoonacular.com/recipes/${data.meals[2].id}/information?apiKey=428bddd56b0048cbaec366e299f10f98`)
    let data3 = await response3.json()
    localStorage.setItem("dinnerImage", JSON.stringify(data3))


    let response4 = await fetch(`https://api.spoonacular.com/recipes/${data.meals[0].id}/nutritionWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
    let data4 = await response4.json();
    localStorage.setItem("breakfastCalorie", JSON.stringify(data4))


    let response5 = await fetch(`https://api.spoonacular.com/recipes/${data.meals[1].id}/nutritionWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
    let data5 = await response5.json()
    localStorage.setItem("lunchCalorie", JSON.stringify(data5))


    let response6 = await fetch(`https://api.spoonacular.com/recipes/${data.meals[2].id}/nutritionWidget.json?apiKey=428bddd56b0048cbaec366e299f10f98`)
    let data6 = await response6.json();
    localStorage.setItem("dinnerCalorie", JSON.stringify(data6))


    window.location.href = 'meal.html';

}