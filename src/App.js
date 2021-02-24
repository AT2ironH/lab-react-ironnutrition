
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox"
import FoodForm from "./components/FoodForm"
import Search from "./components/Search"
import FoodTotal from "./components/FoodTotal"

import React, { Component } from 'react'

class App extends Component {
  state = {
    displayFoods: [],
    showForm: false,
    searchFoods: [],
    totalDisplayItem: []
  };

  componentDidMount() {
    this.setState({
      displayFoods: [...foods.slice(0, 5)],
      searchFoods: [...foods.slice(0, 5)],
    });
  }

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleOnSubmit = (event) => {
    let name = event.target.name.value;
    let calories = event.target.calories.value;
    let image = event.target.image.value;
    let newItem = { name, calories, image };
    console.log(newItem);

    event.preventDefault();
    this.setState({
      showForm: false,
      searchFoods: [newItem, ...this.state.displayFoods],
    });
  };

  handleOnSearch = (event) => {
    let searchText = event.target.value.toLowerCase();
    let result = this.state.displayFoods.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(searchText);
    });
    this.setState({ searchFoods: result });
  };

  handleOnFoodAdd = (name, calories, quantity) => {
    let totalCalories = calories * quantity;
    let totalDisplayedItems = { name, quantity, totalCalories };

    this.setState({ totalDisplayItem: [...this.state.totalDisplayItem, totalDisplayedItems] });
  };

  render() {
    const { searchFoods, showForm } = this.state;
    return (
      <div>
        <Search myChange={this.handleOnSearch} />
        {showForm ? (
          <FoodForm onFoodAdd={this.handleOnSubmit} />
        ) : (
          <button onClick={this.handleShowForm}>Add Food</button>
        )}
        <div className="foodTotal">
          <div>
            {searchFoods.map((singleFood, index) => {
              return (
                <FoodBox
                  onFoodTotal={this.handleOnFoodAdd}
                  key={index}
                  food={singleFood}
                />
              );
            })}
          </div>
          <div>
            <FoodTotal totalInformation={this.state.totalDisplayItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;