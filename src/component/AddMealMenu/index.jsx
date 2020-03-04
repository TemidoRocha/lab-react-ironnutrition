import React, { Component } from 'react';

export class index extends Component {
  render() {
    return (
      <div>
        <form className="addMeal" onSubmit={this.props.addNewMeal}>
          <input
            type="text"
            name="name"
            onChange={event => this.props.handleInputChange(event)}
            value={this.props.state.name}
          />
          <input
            type="number"
            name="calories"
            onChange={event => this.props.handleInputChange(event)}
            value={this.props.state.calories}
          />
          <input
            type="text"
            name="image"
            onChange={event => this.props.handleInputChange(event)}
            value={this.props.state.image}
          />
          <button>Add New Meal</button>
        </form>
      </div>
    );
  }
}

export default AddMealMenu;
