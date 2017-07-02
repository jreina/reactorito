import React from 'react'

const BurritoCondensed = ({ingredients, burritoIndex}) =>
<div className="alert alert-success">
  <strong>Burrito #{burritoIndex + 1}</strong><br />
  {ingredients.map((ingredient, index) => <p key={index}>{ingredient.amount.name} <strong>{ingredient.ingredient}</strong></p>)}
</div>

export default BurritoCondensed
