import React from 'react'
import BurritoCondensed from './BurritoCondensed'

const BurritoList = ({ burritos }) =>
    <div>
      {
        burritos.map((burrito, index) =>
          <BurritoCondensed key={index} burritoIndex={index} ingredients={burrito} />)
      }
    </div>

export default BurritoList
