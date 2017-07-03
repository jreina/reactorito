import React from 'react'
import BurritoCondensed from './BurritoCondensed'

const BurritoList = ({ burritos, removeBurrito, awesome }) =>
    <ul className="list-group">
      {
        burritos.map((burrito, index) =>
          <BurritoCondensed key={index} burritoIndex={index} ingredients={burrito} remove={removeBurrito(index)} />)
      }
      <button className={'btn btn-success btn-block' + (burritos.length ? '': ' hidden')} onClick={awesome}>Awesome!</button>
    </ul>

export default BurritoList
 