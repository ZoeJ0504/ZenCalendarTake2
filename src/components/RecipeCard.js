import React, { useState } from 'react';

function RecipeCard({recipe, addIngredients}) {

    const [commentsVisible, setCommentsVisible] = useState(false);

    function handleClick(){
        setCommentsVisible(commentsVisible => !commentsVisible);    

    }

    const groceryClick = (event)=> {
        addIngredients(recipe.name);
    }
 

    const ingredientText = commentsVisible ? `Ingredients: ${recipe.ingredients}` : 'Click Image for additional cooking instructions';
    const instructionText = commentsVisible ? `Instructions: ${recipe.instructions}` : '';

    const preparationTime = recipe.time.prepration_time;
    const cookTime = recipe.time.cooking_time;



    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>Preparation Time: {preparationTime === '' ? 'NA' : preparationTime} Cooking Time: {cookTime === '' ? 'NA' : cookTime}</p>
            <img onClick={handleClick} src={recipe.image} alt='food' width='250px' height='250px' />
            <p>{ingredientText}</p>
            <p>{instructionText}</p>
            <button className={recipe.name} onClick={groceryClick}>Add ingredients to Grocery List</button>

        </div>
    )

}



export default RecipeCard;