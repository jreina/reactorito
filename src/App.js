import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import BurritoList from './BurritoList'
import BurritoForm from './BurritoForm'
import BurritoFormLoader from './BurritoFormLoader'
import IngredientsContainer from './IngredientsContainer'
import NutritionContainer from './NutritionContainer'
import http from 'browser-http'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
    http.request('https://reactorito-backend.azurewebsites.net/api/GetIngredients',
      { type: 'POST' },
      function(response, error) {
        this.setState({ ingredients: response.data })
      }.bind(this))
  }
  getDefaultBurrito = () => {
    return [{ ingredient: 'Tortilla', amount: { quantity: 1, name: 'single' } }]
  }
  getInitialState = () => {
    let state = {
      name: '',
      burritos: [],
      currentBurrito: this.getDefaultBurrito(),
      ingredients: { options: [], amounts: [] }
    }
    return state
  }
  _addBurrito() {
    this.setState({ burritos: this.state.burritos.concat([this.state.currentBurrito]), currentBurrito: this.getDefaultBurrito() })
  }
  _removeBurrito(index) {
    return function () {
      this.setState({ burritos: this.state.burritos.filter((b, bIndex) => index !== bIndex) })
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
              <NutritionContainer ingredients={this.state.currentBurrito} options={this.state.ingredients} />
            </div>
            <div className="col-md-3">
              <IngredientsContainer ingredients={this.state.currentBurrito} addBurrito={this._addBurrito.bind(this)} />
            </div>
            <div className="col-md-3">
              { !this.state.ingredients.amounts.length || !this.state.ingredients.options.length?
              <BurritoFormLoader /> :
              <BurritoForm addIngredient={this._addIngredient.bind(this)} ingredientOptions={this.state.ingredients} />
              }
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
