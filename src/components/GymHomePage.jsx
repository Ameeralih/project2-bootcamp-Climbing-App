import { Outlet } from "react-router-dom";

export const GymHomePage = () => {
  return (
    <div className="homepage">
      <h1>Gym Finder</h1>
      <Outlet />
    </div>
  );
};
