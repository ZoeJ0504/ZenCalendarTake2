import React, { useState, useEffect } from "react";
import RecipeCard from '../components/RecipeCard'
import styled from 'styled-components';
import GroceryList from '../components/GroceryList';

function Food() {

    const [recipes, setRecipes] = useState({})
    const [foodGroup, setFoodGroup] = useState('')
    const [input, setInput] = useState('');
    const [groceryList, setGroceryList] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     fetch(`https://recipesapi2.p.rapidapi.com/recipes/pancake`, {
    //         method: "GET",
    //         params: { "maxRecipes": '10' },
    //         headers: {
    //             'X-RapidAPI-Key': 'f155deaea6msh7af5e02097744dfp103350jsnff9f118520c5',
    //             'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setRecipes(data))
    // }, [input]);


    // const recipeArr = recipes.data;
    const groceryItems = ['2 eggplants',
    '6 roma tomatoes',
    '2 yellow squashes',
    '2 zucchinis']

    function handleOnChange(event) {
        setFoodGroup(event.target.value);

    }

    function handleSubmit(event){
        event.preventDefault();
        setInput(foodGroup);
        setLoading(!loading);
        
    }

//     function addIngredients(recipeName){

//         fetch(`https://recipesapi2.p.rapidapi.com/recipes/${recipeName}`, {
//             method: "GET",
//             params: { "maxRecipes": '1' },
//             headers: {
//                 'X-RapidAPI-Key': 'f155deaea6msh7af5e02097744dfp103350jsnff9f118520c5',
//                 'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
//             }
//         })
//         .then (res => res.json())
//         .then(result => {
//             const newIngredients = result.data.find(recipe => recipe.name === recipeName).ingredients
//             setGroceryList(list => [...list, ...newIngredients])
//         })
        
//     }

    const loadingText = loading ? 'loading...' : '';

    return (
        <FoodPageDiv>
            <FoodCardDiv>
                <p>Look up Recipes for your Favorite Meals</p>

                <form onSubmit={handleSubmit}> 
                    <input onChange={handleOnChange} type="text" value={foodGroup} placeholder="FoodGroup"></input>
                    <button type='Submit'>Search</button>
                </form>


                {/* {recipeArr === undefined ? <p>{loadingText}</p> : recipeArr.map((recipe) => <RecipeCard key={recipeArr.indexOf(recipe)} recipe={recipe} addIngredients={addIngredients}/>)} */}
                < RecipeCard />
            </FoodCardDiv>

            <GroceryListDiv>
                <h1>Grocery List</h1>
                <GroceryList groceryList={groceryList} groceryItems={groceryItems}/>
            </GroceryListDiv>
        </FoodPageDiv>
    )
}

const FoodPageDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 100px;
background-color: #BBCDE5;
padding-top: 100px;
padding-bottom: 500px;
`


const FoodCardDiv = styled.div`
background-color: #639FAB;
padding: 50px;
margin: 50px;
width: 500px;
`

const GroceryListDiv = styled.div`
background-color: #639FAB;
padding: 50px;
width: 250px;
margin: 50px;
`

export default Food;