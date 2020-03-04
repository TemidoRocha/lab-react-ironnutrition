import React, { Component } from 'react';
import meals from './meals.json';
import MealsComponent from './component/mealsComponent';
import './App.scss';

// import meals from './meals';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: meals,
      addMealMenu: false,
      name: 'name',
      calories: 0,
      image: 'url',
      quantity: 0,
      query: '', //for the search menu
      contentOfNewTask: ''
    };
    this.preventDefault = this.preventDefault.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewMeal = this.addNewMeal.bind(this);
    this.addMealMenu = this.addMealMenu.bind(this);
    // this.filteredMeals = this.filteredMeals.bind(this);
  }

  preventDefault(event) {
    //this wil be to addquantity  each meal
    event.preventDefault();
    console.log('refresh prevented');
  }

  handleInputChange(event) {
    event.preventDefault();
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewMeal(event) {
    event.preventDefault();
    const newMeal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 10
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
    this.setState({
      contentOfNewTask: ''
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
          <button>Search</button>
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
        {/* add meal component */}
        <MealsComponent
          // key={JSON.stringify(Date.now())}

          meals={this.filteredMeals}
          // meals={this.state.meals}
          quantity={this.state.quantity}
          submitFood={event => this.submitFood(event)}
          handleInputChange={event => this.handleInputChange(event)}
        />
        ))
      </div>
    );
  }
}

export default App;
