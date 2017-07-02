import React from 'react';

const Ingredient = ({ ingredient }) => {
return (<li className="list-group-item"><span className="badge">{ingredient.amount.name}</span> {ingredient.ingredient}</li>)
}

export default Ingredient
