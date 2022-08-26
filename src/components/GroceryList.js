import React from 'react';

function GroceryList({ groceryList }) {

    return (<div>
        <ul>
            {groceryList.map(item => { return (<li key={item.id}>{item}</li>) })}
            {/* {filteredRecipes[0].ingredients === undefined ? <p>No Food For You</p> :filteredRecipes[0].ingredients.map(item => { return(<li>{item}</li>) }) } */}
        </ul>
    </div>)
}




export default GroceryList;