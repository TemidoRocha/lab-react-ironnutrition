import React, { Component } from 'react';
import style from './style.scss';

class MealsComponent extends Component {
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
        <form className="row align-self-center" onSubmit={event => meal.submitFood(event)}>
          <input
            className="form-control col-9"
            type="number"
            name={meal.name}
            onChange={event => this.props.handleInputChange(event)}
            value={this.props.quantity}
          />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    ));
  }
}

export default MealsComponent;
