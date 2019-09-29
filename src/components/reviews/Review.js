import React, { Component } from 'react';

class Review extends Component {

  handleClick = (event) => {
    this.props.deleteReview(this.props.review)
  }
  render() {
    const { review } = this.props
    
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
