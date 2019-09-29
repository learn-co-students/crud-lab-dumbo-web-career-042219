import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const mapStateToReviews = state => {
  return {reviews: state.reviews}
}
const mapDispatchToProps = dispatch => {
  return { 
    addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
    deleteReview: review => dispatch({ type: 'DELETE_REVIEW', review})
  }
}

export default connect(mapStateToReviews, mapDispatchToProps)(ReviewsContainer)
