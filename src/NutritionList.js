import React from 'react'

const NutritionList = ({ nutrition }) => 
  <ul className="list-group">
    <li className="list-group-item"><strong>Nutrition</strong></li>
    {
      Object.keys(nutrition).map((key, index) =>
        (<li key={index} className="list-group-item">{key} <span className="badge">{nutrition[key].value} {nutrition[key].unit}</span></li>)
      )
    }
  </ul>

export default NutritionList
