import React from 'react'
import BurritoForm from './BurritoForm'
import IngredientsContainer from './IngredientsContainer'
import NutritionContainer from './NutritionContainer'

const Burrito = ({ addIngredient, ingredients, clickCount, addBurrito, ingredientOptions }) =>
  <div className="burrito">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <BurritoForm addIngredient={addIngredient} clickCount={clickCount} ingredientOptions={ingredientOptions}/>
        </div>
        <div className="col-md-3">
          <IngredientsContainer ingredients={ingredients}  addBurrito={addBurrito} />
        </div>
        <div className="col-md-3">
          <NutritionContainer ingredients={ingredients} options={ingredientOptions} />
        </div>
      </div>
    </div>
  </div>



export default Burrito
