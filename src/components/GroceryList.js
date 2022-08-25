import React from 'react';

function GroceryList({ groceryList }){
// useEffect( () => {
//    helpfulRecipe === "" ? <p>Loading ...</p> : fetch(`https://recipesapi2.p.rapidapi.com/recipes/${helpfulRecipe}`, {
//             method: "GET",
//             params: { "maxRecipes": '1' },
//             headers: {
//                 'X-RapidAPI-Key': 'f155deaea6msh7af5e02097744dfp103350jsnff9f118520c5',
//                 'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com'
//             }
//         })
//         .then (res => res.json())
//         .then (data => setHope(data))
// }, [helpfulRecipe])
 

return(<div>
    <ul>
        {groceryList.map(item => { return(<li key={item.id}>{item}</li>) })}
        {/* {filteredRecipes[0].ingredients === undefined ? <p>No Food For You</p> :filteredRecipes[0].ingredients.map(item => { return(<li>{item}</li>) }) } */}
    </ul>
</div>)
}




export default GroceryList;