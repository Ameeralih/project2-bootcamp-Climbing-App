import React from "react";
import { Outlet } from "react-router-dom";

export function GymSearch() {
  return (
    <div className="gymsearch">
      <h1>Gym Finder Buddy</h1>
      <h5>Local Singapore Gyms!</h5>
      <Outlet />
    </div>
  );
}
