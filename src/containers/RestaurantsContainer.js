import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import Review from '../components/reviews/Review'

class RestaurantsContainer extends Component {

  render() {
    const { restaurants, addRestaurant, deleteRestaurant } = this.props

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: restaurant => dispatch({ type: 'ADD_RESTAURANT', text: restaurant.text}),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id: id}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
