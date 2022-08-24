import React, { useState, useEffect } from "react";
import RecipeCard from '../components/RecipeCard'

function Food() {
    const [recipes, setRecipes] = useState({})
    const [foodGroup, setFoodGroup] = useState('')
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
    }, [])
    console.log(recipes)
    function handleOnChange(event) {
        setFoodGroup(event.target.value)
    }
    return (
        <div>
            <input onChange={handleOnChange} type="text" value={foodGroup} placeholder="FoodGroup"></input>
            < RecipeCard />
        </div>
    )
}

export default Food