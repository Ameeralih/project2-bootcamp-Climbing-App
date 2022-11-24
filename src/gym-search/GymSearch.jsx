import React from "react";
import { render } from "react-dom";
import { getGyms } from "../gymdata";

export function GymSearch() {
  let gyms = getGyms();
  return (
    <div>
      <h1>Gym Search</h1>
      {gyms.map((gym) => (
        <div className="gym">{gym.name}</div>
      ))}
    </div>
  );
}
