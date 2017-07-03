import React, { Component } from 'react'
class BurritoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: this.props.ingredientOptions.amounts[1]
    }
  }
  _radioChange(amount) {
    return () => { this.setState({ amount }) }
  }
  _submit(event) {
    event.preventDefault()
    let ingredient = this.refs.ingredient.value
    if (ingredient) {
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
            <input type="radio" onChange={this._radioChange(amount)} checked={this.state.amount.name === amount.name} />
            {amount.name}
          </label>
        </div>
      )
    // Select options
    let options = this.props.ingredientOptions.options
      .filter(value => value.name !== 'Tortilla')
      .map((value, index) => {
        return <option value={value.name} key={index}>{value.name}</option>
      })
    return (<form onSubmit={this._submit.bind(this)}>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="form-group">
            <label htmlFor="ingredient">Ingredient</label>
            <select ref="ingredient" id="ingredient" className="form-control">
              {options}
            </select>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-group">
            {radios}
          </div>
        </li>
        <button type="submit" className="btn btn-primary btn-block">Add Ingredient</button>
      </ul>
    </form>)
  }
}
export default BurritoForm