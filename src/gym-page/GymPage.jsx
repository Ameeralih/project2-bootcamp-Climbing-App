import React, { useState } from "react";
import { Reviews } from "./Reviews";

export function GymPage(name) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Gym Details</h2>
      <Reviews name={name} />
    </div>
  );
}
