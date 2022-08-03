const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click',getInstruction );

recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

// get meal list that matches with the ingredients
function getMealList(){
    
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    //fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data =>
      
       {
        console.log(data);
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `<div class = "meal-item" data-id = "${meal.idMeal}">
                <div class = "meal-img">
                    <img src = "${meal.strMealThumb}" alt = "food">
                </div>
                <div class = "meal-name">
                    <h3>${meal.strMeal}</h3>
               </div>     
<a href = "#" class="recipe-btn"> Get recipe </a>       
</div>
                `;
                    
                
            });
            mealList.classList.remove('Found');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


function getInstruction()
{
    
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    
    .then(response => 
        response.json())
    
    .then(data =>{
        let text = "";
     if(data.meals){
      
        data.meals.forEach(meal=>{
text +=`
<h2 class = "recipe-title">${meal.strMeal}</h2>
<p class = "recipe-category">${meal.strCategory}</p>
<div class = "recipe-instruct">
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
</div>
<div class = "recipe-meal-img">
    <img src = "${meal.strMealThumb}" alt = "">
</div>
<div class = "recipe-link">
    <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
</div>
</div>

</div>
`;
        })
     }
     mealDetailsContent.innerHTML = text;
     mealDetailsContent.parentElement.classList.add('showRecipe');

    })
}
        

// get recipe of the meal
/*function getMealRecipe(e){
    e.preventDefault();
    
   if(e.target.classList.contains('recipe-close-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
          
    }
}

// create a modal
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = "";
     html += `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
  
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}*/