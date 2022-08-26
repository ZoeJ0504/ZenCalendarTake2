import { minutesInHour } from 'date-fns';
import React, { useState } from 'react';

function RecipeCard({ addIngredients}) {

    const recipe = {
        name: 'Ratatoille',
        image: 'https://www3.pictures.zimbio.com/mp/5lo52zDnYovl.jpg',
        ingredients: ['2 eggplants',
            '6 roma tomatoes',
            '2 yellow squashes',
            '2 zucchinis'],
        instructions: `Preheat the oven for 375˚F (190˚C).
        Slice the eggplant, tomatoes, squash, and zucchini into approximately ¹⁄₁₆-inch (1-mm) rounds, then set aside.
        Make the sauce: Heat the olive oil in a 12-inch (30-cm) oven-safe pan over medium-high heat. Sauté the onion, garlic, and bell peppers until soft, about 10 minutes. Season with salt and pepper, then add the crushed tomatoes. Stir until the ingredients are fully incorporated. Remove from heat, then add the basil. Stir once more, then smooth the surface of the sauce with a spatula.
        Arrange the sliced veggies in alternating patterns, (for example, eggplant, tomato, squash, zucchini) on top of the sauce from the outer edge to the middle of the pan. Season with salt and pepper.
        Make the herb seasoning: In a small bowl, mix together the basil, garlic, parsley, thyme, salt, pepper, and olive oil. Spoon the herb seasoning over the vegetables.
        Cover the pan with foil and bake for 40 minutes. Uncover, then bake for another 20 minutes, until the vegetables are softened.
        Serve while hot as a main dish or side. The ratatouille is also excellent the next day--cover with foil and reheat in a 350˚F (180˚C) oven for 15 minutes, or simply microwave to desired temperature.
        Enjoy!`,
        time: {prepration_time: '20 minutes', cooking_time: '20 minutes'}
    }



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