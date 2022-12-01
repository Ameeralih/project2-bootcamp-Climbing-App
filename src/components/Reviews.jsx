import React, { useState } from "react";

export const Reviews = ({ currentGym }) => {
  const [reviews, setReviews] = useState([]);

  const allReviews = reviews.map((review) => {
    return <div>{review}</div>;
  });

  return (
    <div>
      {currentGym.name} reviews:
      <br />
      {allReviews}
    </div>
  );
};
