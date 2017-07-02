import React, { Component } from 'react'
class BurritoForm extends Component
{ 
  constructor(props) {
    super(props)

    this.state = {
      amount: this.props.ingredientOptions.amounts[1]
    }
  }
  _radioChange(n) {
    return () => { this.setState({ amount: n }) }
  }
  _submit(event) {
    event.preventDefault()
    let ingredient = this.refs.ingredient.value
    if(ingredient) {
      let amount = this.state.amount
      this.props.addIngredient({ ingredient, amount })
      this.refs.ingredient.focus()
    }
  }
  render() {
    // Radio buttons
    let radios = this.props.ingredientOptions.amounts
      .map((amount, index) =>
      <div key={index} className="radio">
        <label>
          <input type="radio" onChange={this._radioChange(amount)} checked={this.state.amount.name===amount.name} />
            {amount.name}
        </label>
      </div>
      )
    // Select options
    let options = this.props.ingredientOptions.options.map((value, index) => {
      let val = value.name === 'Sausage' && this.props.clickCount > 5 ? 'Ethnic ' + value.name: value.name
      return <option value={val} key={index}>{val}</option>
    })
    return <form onSubmit={this._submit.bind(this)} >
      <div className="form-group">
        <label htmlFor="ingredient">Ingredient</label>
        <select ref="ingredient" id="ingredient" className="form-control">
          {options}
        </select>
      </div>
      <div className="form-group">
        {radios}
      </div>
      <button type="submit" className="btn btn-primary">Add Ingredient</button>
    </form>
  }
}
export default BurritoForm