import React from 'react'
import Ingredient from './Ingredient'
import IngredientTotal from './IngredientTotal'

const IngredientList = ({ ingredients, addBurrito }) => 
  <ul className="list-group">
    <li className="list-group-item"><strong>Ingredients</strong></li>
    {
      ingredients.map((ingredient, index) => 
        (<Ingredient key={index} ingredient={ingredient} />)
      )
    }
    <IngredientTotal ingredients={ingredients} />
    <button className="btn btn-success btn-block" disabled={!ingredients.length} onClick={addBurrito}>Looks Good!</button>
  </ul>

export default IngredientList
