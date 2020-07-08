import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews
    reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    reviews = reviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;