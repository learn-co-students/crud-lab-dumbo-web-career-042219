import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }
  
  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
