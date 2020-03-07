import React, { Component } from 'react';
import style from './style.scss';
import TodayMeal from './../todayMeal';

class MealsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: this.props.totalMeals
    };
    this.numberOfMeals = this.numberOfMeals.bind(this);
  }

  numberOfMeals(e) {
    this.setState({
      meals: { ...this.state.meals, quantity: e.target.value }
    });
  }

  handleSubmit() {}

  render() {
    return (
      <div className="divide">
        <div style={{ width: '50%' }}>
          {this.props.meals.map(meal => (
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
          ))}
        </div>
        <div className="todaysMeal">
          <h1>Today's Food</h1>
          <ul>
            {this.state.meals &&
              this.state.meals
                .sort((a, b) => b.quantity - a.quantity)
                .map(meal => (
                  <li key={meal.image}>
                    {meal.quantity} {meal.name} = {meal.calories} cal
                  </li>
                ))}
          </ul>
          Total amount of calories: 100 cal
        </div>
      </div>
    );
  }
}

export default MealsComponent;
