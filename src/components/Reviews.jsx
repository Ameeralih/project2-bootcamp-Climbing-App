import React, { useState, useEffect } from "react";
import { ReviewForm } from "./ReviewForm";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/database";
import { Paper } from "@mui/material";

export const Reviews = ({ currentGym, user }) => {
  const [reviews, setReviews] = useState([]);
  const currentGymRef = ref(database, `/gyms/${currentGym.name}`);

  const fetchData = [];

  useEffect(() => {
    onValue(currentGymRef, (snapshot) => {
      snapshot.forEach((review) => {
        fetchData.push(review.val());
      });
    });
    setReviews(fetchData);
  }, [reviews]);

  return (
    <div>
      {currentGym.name} reviews:
      <br />
      <div>
        {reviews.map((review) => {
          return (
            <>
              <Paper>
                <div>{review.comment}</div>
                Posted by: {review.name}
              </Paper>
            </>
          );
        })}
      </div>
      <br />
      <ReviewForm currentGym={currentGym} user={user} />
    </div>
  );
};
