// const heightInput = document.getElementById("height");
// const weightInput = document.getElementById("weight");
// const ageInput = document.getElementById("age");
// const genderInput = document.getElementById("gender");
// const activityInput = document.getElementById("activity");

// const submit = document.getElementById("submitBtn");

// const cardContainer = document.getElementById("cards-container");
// const mealsDetails = document.getElementById("details");
// const ingredientSection = document.getElementById("ingredients");
// const stepsSection = document.getElementById("steps");
// const equipmentSection = document.getElementById("equipment");
// const recipeSection = document.getElementById("recipe-section");
// const apiKey = "428bddd56b0048cbaec366e299f10f98";

// const getCalorie = () => {
//     let height = heightInput.value;
//     let weight = weightInput.value;
//     let age = ageInput.value;
//     let gender = genderInput.value;
//     let physicalActivity = activityInput.value;
//     let BMR;

//     if (height === "" || height <= 0 || weight === "" || weight <= 0 || age === "" || age <= 0) {
//         alert(
//             "All input field should not be empty and should not have negetive value"
//         );
//         return;
//     }

//     if (gender === "female") {
//         BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
//     } else if (gender === "male") {
//         BMR = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
//     }

//     // Daily Calorie Requirement
//     if (physicalActivity === "light") {
//         BMR *= 1.375;
//     } else if (physicalActivity === "moderate") {
//         BMR *= 1.55;
//     } else if (physicalActivity === "active") {
//         BMR *= 1.725;
//     }

//     getMeals(BMR);
// };

// const getMeals = async(BMR) => {
//     document.getElementById("loader").style.display = "block";
//     const url = `https://api.spoonacular.com//mealplanner/generate?timeFrame=day&targetCalories=${BMR}&apiKey=${apiKey}&includeNutrition=true`;

//     let datas;
//     await fetch(url)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             datas = data;
//         });
//     generateMealsCard(datas);
//     document.getElementById("loader").style.display = "none";
// };

// const generateMealsCard = (datas) => {
//     let cards = ``;
//     mealsDetails.innerHTML = `
//   <h1>Nutrients</h1>
//   <div class="d-flex justify-content-center">
//       <p class="px-2">Calories : ${datas?.nutrients?.calories}</p>
//       <p class="px-2">Carbohydrates : ${datas.nutrients?.carbohydrates}</p>
//       <p class="px-2">Fat : ${datas.nutrients?.fat}</p>
//       <p class="px-2">Protein : ${datas.nutrients?.protein}</p>
//   </div>
//   `;
//     datas.meals.map(async(data) => {
//         const url = `https://api.spoonacular.com/recipes/${data.id}/information?apiKey=${apiKey}&includeNutrition=false`;
//         let imgURL;
//         await fetch(url)
//             .then((res) => {
//                 return res.json();
//             })
//             .then((data) => {
//                 imgURL = data.image;
//             });
//         cards += `
//         <div class="col-md-4 d-flex justify-content-center mb-2">
//             <div class="card baseBlock" style="width: 18rem;">
//                 <img src=${imgURL} class="card-img-top"
//                     alt="meal 1">
//                 <div class="card-body">
//                     <h5 class="card-title">${data.title}</h5>
//                     <p>Preparation Time - ${data.readyInMinutes}</p>
//                     <button class="btn btn-outline-primary" onClick="btnRecipe(${data.id})" >Get Recipe</button>
//                 </div>
//             </div>
//         </div>
//         `;
//         cardContainer.innerHTML = cards;
//     });
// };

// const btnRecipe = async(data) => {
//     recipeSection.innerHTML = "";
//     ingredientSection.innerHTML = "";
//     stepsSection.innerHTML = "";
//     equipmentSection.innerHTML = "";
//     const url = `https://api.spoonacular.com/recipes/${data}/information?apiKey=${apiKey}&includeNutrition=false`;
//     let information;

//     await fetch(url)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             information = data;
//         });

//     recipeSection.textContent = `${information.title} Recipe`;

//     //   Ingridents
//     let htmlData = ``;
//     let inCardDiv = document.createElement("div");
//     inCardDiv.classList.add("carddesign", "card", "h-100");
//     let inCardBody = document.createElement("div");
//     inCardBody.classList.add("card-body");
//     let inOverlay = document.createElement("div");
//     inOverlay.classList.add("overlay");
//     let ul = document.createElement("ul");
//     information.extendedIngredients.map((ingre) => {
//         htmlData += `
//         <li>${ingre.original}</li>
//         `;
//     });
//     ul.innerHTML = htmlData;
//     let ingreH1 = document.createElement("h3");
//     ingreH1.textContent = "INGREDIENTS";
//     inCardBody.appendChild(inOverlay);
//     inCardBody.appendChild(ingreH1);
//     inCardBody.appendChild(ul);
//     inCardDiv.appendChild(inCardBody);
//     ingredientSection.appendChild(inCardDiv);

//     //   Steps
//     let stepsHtml = ``;
//     let stepsCardDive = document.createElement("div");
//     stepsCardDive.classList.add("carddesign", "card", "h-100");
//     let stepsCardBody = document.createElement("div");
//     stepsCardBody.classList.add("card-body");
//     let stepsOverlay = document.createElement("div");
//     stepsOverlay.classList.add("overlay");
//     let stepsOl = document.createElement("ol");
//     information.analyzedInstructions[0].steps.map((step) => {
//         stepsHtml += `
//         <li>${step.step}</li>
//         `;
//     });
//     stepsOl.innerHTML = stepsHtml;
//     let stepsH1 = document.createElement("h3");
//     stepsH1.textContent = "STEPS";
//     stepsCardBody.appendChild(stepsOverlay);
//     stepsCardBody.appendChild(stepsH1);
//     stepsCardBody.appendChild(stepsOl);
//     stepsCardDive.appendChild(stepsCardBody);
//     stepsSection.appendChild(stepsCardDive);

//     // equipmentSection
//     const urlEquip = `https://api.spoonacular.com/recipes/${data}/equipmentWidget.json?apiKey=${apiKey}&includeNutrition=false`;
//     let equip;

//     await fetch(urlEquip)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             equip = data;
//         });

//     let equipData = ``;
//     let eqCardDiv = document.createElement("div");
//     eqCardDiv.classList.add("carddesign", "card", "h-100");
//     let eqCardBody = document.createElement("div");
//     eqCardBody.classList.add("card-body");
//     let eqOverlay = document.createElement("div");
//     eqOverlay.classList.add("overlay");
//     let equipUl = document.createElement("ul");
//     equip.equipment.map((equip) => {
//         equipData += `
//             <li>${equip.name}</li>
//             `;
//     });
//     equipUl.innerHTML = equipData;
//     let equipH1 = document.createElement("h3");
//     equipH1.textContent = "EQUIPMENT";
//     eqCardBody.appendChild(eqOverlay);
//     eqCardBody.appendChild(equipH1);
//     eqCardBody.appendChild(equipUl);
//     eqCardDiv.appendChild(eqCardBody);
//     equipmentSection.appendChild(eqCardDiv);
// };

// submit.addEventListener("click", getCalorie);
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