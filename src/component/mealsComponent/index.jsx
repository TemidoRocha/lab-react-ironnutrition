import React, { Component } from 'react';
import style from './style.scss';

class MealsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: this.props.totalMeals
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.numberOfMeals = this.numberOfMeals.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    this.props.onXClick(e.target.value);
  }

  numberOfMeals(e) {
    this.setState({
      meals: { ...this.state.meals, quantity: e.target.value }
    });
  }

  render() {
    return this.props.meals.map(meal => (
      <div className="media" key={meal.image}>
        <img
          src={meal.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{meal.name}</h5>
          <small>{meal.calories}</small>
        </div>
        <form className="row align-self-center" onSubmit={this.handleSubmit}>
          <input
            min="0"
            className="form-control col-9"
            type="number"
            name={meal.name}
            value={this.state.quantity}
            onChange={this.numberOfMeals}
          />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    ));
  }
}

export default MealsComponent;
