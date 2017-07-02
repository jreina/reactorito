import React from 'react'

const IngredientTotal = ({ ingredients }) => {
  let total = ingredients.reduce((memo, item) => memo + item.amount.quantity, 0)
  return <li className="list-group-item"><strong>Total:</strong> {total}</li>
}

export default IngredientTotal
