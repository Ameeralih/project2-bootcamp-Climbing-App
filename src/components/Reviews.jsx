import React, { useState } from "react";
import { ReviewForm } from "./ReviewForm";

export const Reviews = ({ currentGym, user }) => {
  const [reviews, setReviews] = useState([]);

  const allReviews = reviews.map((review) => {
    return <div>{review}</div>;
  });

  return (
    <div>
      {currentGym.name} reviews:
      <br />
      {allReviews}
      <ReviewForm currentGym={currentGym} user={user} />
    </div>
  );
};
