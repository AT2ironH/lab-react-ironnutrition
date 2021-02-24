import React, { Component } from 'react'

class FoodBox extends Component {
    state = {
        quantity: 0,
    }

handleOnChange = (event) => {
    this.setState({quantity: event.target.value})
}


    render() {

const { name, calories, image } = this.props.food;
        // console.log(this.props)
        return (
          <div className="wholeFoodBox">
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{name}</strong> <br />
                      <small>{calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input onChange={this.handleOnChange} className="input" type="number" value={this.state.quantity} />
                    </div>
                    <div className="control">
                      <button onClick={() => {this.props.onFoodTotal( name, calories, this.state.quantity);}} className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        );
    }
}

export default FoodBox;