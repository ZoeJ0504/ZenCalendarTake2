import React, { useState, useEffect } from "react";
import RecipeCard from '../components/RecipeCard'
import styled from 'styled-components';
import GroceryList from '../components/GroceryList';

function Food() {

    const [recipes, setRecipes] = useState({})
    const [foodGroup, setFoodGroup] = useState('')
    const [input, setInput] = useState('');
    const [groceryList, setGroceryList] = useState([]);

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
    }, [input]);


    const recipeArr = recipes.data;

    function handleOnChange(event) {
        setFoodGroup(event.target.value);

    }

    function handleSubmit(event) {
        event.preventDefault();
        setInput(foodGroup);

    }

    function addIngredients(recipeName) {

        fetch(`https://recipesapi2.p.rapidapi.com/recipes/${recipeName}`, {
            method: "GET",
            params: { "maxRecipes": '1' },
            headers: {
                'X-RapidAPI-Key': 'f155deaea6msh7af5e02097744dfp103350jsnff9f118520c5',
                'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            .then(result => {
                const newIngredients = result.data.find(recipe => recipe.name === recipeName).ingredients
                setGroceryList(list => [...list, ...newIngredients])
            })

    }


    return (
        <FoodPageDiv>
            <FoodCardDiv>
                <p>Look up Recipes for your Favorite Meals</p>

                <form onSubmit={handleSubmit}>
                    <input onChange={handleOnChange} type="text" value={foodGroup} placeholder="FoodGroup"></input>
                    <button type='Submit'>Search</button>
                </form>


                {recipeArr === undefined ? <p>Loading...</p> : recipeArr.map((recipe) => <RecipeCard key={recipeArr.indexOf(recipe)} recipe={recipe} addIngredients={addIngredients} />)}
            </FoodCardDiv>

            <GroceryListDiv>
                <h1>Grocery List</h1>
                <GroceryList groceryList={groceryList} />
            </GroceryListDiv>
        </FoodPageDiv>
    )
}

const FoodPageDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 100px;
`


const FoodCardDiv = styled.div`
background-color: #639FAB;
padding: 50px;

`

const GroceryListDiv = styled.div`
background-color: #639FAB;
padding: 50px;
width: 250px
`

export default Food;