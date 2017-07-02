import React from 'react'

const BurritoCondensed = ({ingredients, burritoIndex, remove}) =>
  <li className="list-group-item">
  <button type="button" className="close" onClick={remove}>&times;</button>
  <h3>Burrito #{burritoIndex + 1}</h3>
  {ingredients.map((ingredient, index) => <p key={index}>{ingredient.amount.name} <strong>{ingredient.ingredient}</strong></p>)}
  </li>

export default BurritoCondensed
