import React, { useState } from "react";
import { fetchGyms } from "../gymdata";
import { Reviews } from "./Reviews";

export const GymPage = (name) => {
  const gyms = fetchGyms();

  return (
    <div>
      <h1>{name}</h1>
      <h2>Gym Details(stand in for map)</h2>
      <h2></h2>
      <Reviews name={name} />
    </div>
  );
};
