import React, { Component } from 'react';
import meals from './meals.json';
import MealsComponent from './component/mealsComponent';
import './App.scss';

// import meals from './meals';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals, //melas data
      addMealMenu: false, //for adding new meals to the meals data
      name: 'name', //for adding new meals name
      calories: 0, //for adding new meals calories
      image: 'url', //for adding new meals picture
      query: '' //for the search menu
    };
    this.preventDefault = this.preventDefault.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewMeal = this.addNewMeal.bind(this);
    this.addMealMenu = this.addMealMenu.bind(this);
  }

  preventDefault(event) {
    //this wil be to addquantity  each meal
    event.preventDefault();

    this.setState({
      query: ''
    });
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewMeal(event) {
    event.preventDefault();
    const newMeal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    this.setState({
      meals: [...this.state.meals, newMeal]
    });
  }

  addMealMenu() {
    this.setState({
      addMealMenu: !this.state.addMealMenu
    });
  }

  get filteredMeals() {
    const filteredMeals = this.state.meals.filter(meal => {
      return meal.name.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return filteredMeals;
  }

  render() {
    return (
      <div>
        {/* search bar component */}
        <form onSubmit={this.preventDefault}>
          <input
            type="search"
            name="query"
            value={this.state.query}
            placeholder="search for anything..."
            onChange={this.handleInputChange}
          />
          <button>New Search</button>
        </form>
        {/* toggle addMealMenu */}
        <button onClick={this.addMealMenu}>Add Meal Menu</button>
        {this.state.addMealMenu && (
          <form className="addMeal" onSubmit={this.addNewMeal}>
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              placeholder="insert name"
              value={this.state.name}
            />
            <input
              type="number"
              name="calories"
              onChange={this.handleInputChange}
              value={this.state.calories}
            />
            <input
              type="text"
              name="image"
              onChange={this.handleInputChange}
              value={this.state.image}
            />
            <button onClick={this.addNewMeal}>Add New Meal</button>
          </form>
        )}
        <MealsComponent meals={this.filteredMeals} totalMeals={this.state.meals} />
      </div>
    );
  }
}

export default App;
