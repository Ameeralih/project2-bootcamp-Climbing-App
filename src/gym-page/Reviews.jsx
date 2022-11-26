import React, { useState } from "react";

export const Reviews = () => {

  const [reviews, setReviews] = useState([])
  
  const allReviews = reviews.map((review) => {
    return <div>{review}</div>;
  });

  render() {
    return (
      <>
        {allReviews}
        <form onSubmit={setReviews(reviews)}></form>
      </>
    );
  }
}
