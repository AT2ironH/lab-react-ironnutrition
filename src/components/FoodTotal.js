import React, { Component } from 'react';

class FoodTotal extends Component {
  render() {
    return (
      <div>
        <h1>Total quantity</h1>
        {this.props.totalInformation.map((singleTotal, index) => {
          return (
            <div key={index}>
              <p>Name: {singleTotal.name}</p>
              <p>Total calories: {singleTotal.totalCalories}</p>
              <p>Quantity: {singleTotal.quantity}</p>
              <br />
            </div>
            
          );
        })}
      </div>
    );
  }
}

export default FoodTotal;
