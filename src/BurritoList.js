import React from 'react'
import BurritoCondensed from './BurritoCondensed'

const BurritoList = ({ burritos, removeBurrito }) =>
    <ul className="list-group">
      {
        burritos.map((burrito, index) =>
          <BurritoCondensed key={index} burritoIndex={index} ingredients={burrito} remove={removeBurrito(index)} />)
      }
      <li className={'list-group-item' + (burritos.length? '': ' hidden') }><button className="btn btn-success btn-block">Awesome!</button></li>
    </ul>

export default BurritoList
