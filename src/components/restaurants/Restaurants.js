import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const { deleteRestaurant } = this.props
    const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>)
    return(
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;