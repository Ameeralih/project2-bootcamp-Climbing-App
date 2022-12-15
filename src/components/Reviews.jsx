import React, { useState } from "react";

export const Reviews = ({ currentGym, user }) => {
  const [reviews, setReviews] = useState([]);
  const GYM_KEY = currentGym.name;
  console.log(user.uid);

  const allReviews = reviews.map((review) => {
    return <div>{review}</div>;
  });

  return (
    <div>
      {currentGym.name} reviews:
      <br />
      {allReviews}
      <button>Add a review</button>
    </div>
  );
};
