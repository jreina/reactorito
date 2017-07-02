import React from 'react'
import BurritoCondensed from './BurritoCondensed'

const BurritoList = ({ burritos, removeBurrito }) =>
    <div>
      {
        burritos.map((burrito, index) =>
          <BurritoCondensed key={index} burritoIndex={index} ingredients={burrito} remove={removeBurrito(index)} />)
      }
    </div>

export default BurritoList
