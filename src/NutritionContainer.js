import React from 'react'
import NutritionDefaultAlert from './NutritionDefaultAlert'
import NutritionList from './NutritionList'
import { find } from 'ramda'

const NutritionContainer = ({ options, ingredients }) => {
  if (ingredients.length) {

    // Total up the nutritional values for each selected object
    let totals = ingredients.reduce((memo, ingredient) => {
      let ingredientInfo = find(option => option.name === ingredient.ingredient, options.options)
      let nutritionKeys = Object.keys(ingredientInfo.nutrition)
      if (!Object.keys(memo).length) nutritionKeys.reduce((memo, key) => {
        memo[key] = { value: 0, unit: ingredientInfo.nutrition[key].unit };
        return memo
      }, memo)
      nutritionKeys.reduce((nutritionMemo, key) => {
        nutritionMemo[key].value += ingredient.amount.quantity * ingredientInfo.nutrition[key].value
        return nutritionMemo
      }, memo)
      return memo
    }, {})

    return <NutritionList nutrition={totals} />
  }
  return <NutritionDefaultAlert />
}
export default NutritionContainer
