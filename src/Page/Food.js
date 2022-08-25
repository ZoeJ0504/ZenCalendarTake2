import React, { useState, useEffect } from "react";
import RecipeCard from '../components/RecipeCard'

function Food() {
    const [recipes, setRecipes] = useState({})
    const [foodGroup, setFoodGroup] = useState('')
    const [input, setInput] = useState('');

    useEffect(() => {
        fetch(`https://recipesapi2.p.rapidapi.com/recipes/${foodGroup}`, {
            method: "GET",
            params: { "maxRecipes": '10' },
            headers: {
                'X-RapidAPI-Key': 'f155deaea6msh7af5e02097744dfp103350jsnff9f118520c5',
                'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [input])


    const recipeArr = recipes.data;

    function handleOnChange(event) {
        setFoodGroup(event.target.value);

    }

    function handleSubmit(event){
        event.preventDefault();
        setInput(foodGroup);
        
    }

    return (
        <div>
            <p>Look up Recipes for your Favorite Meals</p>

            <form onSubmit={handleSubmit}> 
                <input onChange={handleOnChange} type="text" value={foodGroup} placeholder="FoodGroup"></input>
                <button type='Submit'>Search</button>
            </form>


            {recipeArr === undefined ? <p>Loading...</p> : recipeArr.map((recipe) => <RecipeCard key={recipeArr.indexOf(recipe)} recipe={recipe} />)}
        </div>
    )
}

export default Food