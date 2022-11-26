import React from "react";
import { Outlet } from "react-router-dom";

export function GymSearch() {
  return (
    <div className="gymsearch">
      <h5>Local Singapore Gyms!</h5>
      <Outlet />
    </div>
  );
}
