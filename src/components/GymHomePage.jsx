import { Outlet } from "react-router-dom";
import "../App.css";

export const GymHomePage = () => {
  return (
    <div className="App">
      <h1>Gym Finder</h1>
      <Outlet />
    </div>
  );
};
