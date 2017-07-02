import React from 'react'
import IngredientList from './IngredientList'
import IngredientsDefaultAlert from './IngredientsDefaultAlert'

const IngredientsContainer = ({ ingredients, addBurrito }) => 
ingredients.length === 0 ? <IngredientsDefaultAlert /> : <IngredientList ingredients={ingredients}  addBurrito={addBurrito}/>

export default IngredientsContainer
