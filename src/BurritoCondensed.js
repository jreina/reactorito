import React from 'react'

const BurritoCondensed = ({ingredients, burritoIndex, remove}) =>
<div className="alert alert-success alert-dismissable">
  <button type="button" className="close" onClick={remove}>&times;</button>
  <strong>Burrito #{burritoIndex + 1}</strong><br />
  {ingredients.map((ingredient, index) => <p key={index}>{ingredient.amount.name} <strong>{ingredient.ingredient}</strong></p>)}
</div>

export default BurritoCondensed
