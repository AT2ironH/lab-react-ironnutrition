import React, { Component } from 'react'

class FoodForm extends Component {
    render() {
        const { onFoodAdd } = this.props;
        return (
          <form onSubmit={onFoodAdd}>
            <input name="name" type="text" placeholder="Enter food name" />
            <input name="calories" type="number" placeholder="Enter number of calories" />
            <input name="image" type="text" placeholder="Food image url" />
            <button type="submit">Add Food</button> 
          </form>
        );
    }
}
export default FoodForm;