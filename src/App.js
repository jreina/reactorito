import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import BurritoList from './BurritoList'
import BurritoForm from './BurritoForm'
import IngredientsContainer from './IngredientsContainer'
import NutritionContainer from './NutritionContainer'
import Ingredients from './Ingredients'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }
  getDefaultBurrito = () => {
    return [{ ingredient: 'Tortilla', amount: { quantity: 1, name: 'single' } }]
  }
  getInitialState = () => {
    let state = {
      name: '',
      burritos: [],
      currentBurrito: this.getDefaultBurrito()
    }
    return state
  }
  _addBurrito() {
    this.setState({ burritos: this.state.burritos.concat([this.state.currentBurrito]), currentBurrito: this.getDefaultBurrito() })
  }
  _removeBurrito(index) {
    return function () {
      if (this.state.burritos.length === 1) { this.setState(this.getInitialState()) }
      else { this.setState({ burritos: this.state.burritos.filter((b, bIndex) => index !== bIndex) }) }
    }.bind(this)
  }
  _addIngredient(newIngredient) {
    let ingredients = this.state.currentBurrito.filter(item => item.ingredient !== newIngredient.ingredient)
    this.setState({ currentBurrito: ingredients.concat(newIngredient) })
  }
  _awesome() {
    this.setState(this.getInitialState())
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React<span>[orito]</span></h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <NutritionContainer ingredients={this.state.currentBurrito} options={Ingredients} />
            </div>
            <div className="col-md-3">
              <IngredientsContainer ingredients={this.state.currentBurrito} addBurrito={this._addBurrito.bind(this)} />
            </div>
            <div className="col-md-3">
              <BurritoForm addIngredient={this._addIngredient.bind(this)} ingredientOptions={Ingredients} />
            </div>
            <div className="col-md-3">
              <BurritoList burritos={this.state.burritos} removeBurrito={this._removeBurrito.bind(this)}
                awesome={this._awesome.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
