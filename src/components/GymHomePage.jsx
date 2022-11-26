import { Outlet } from "react-router-dom";

export const GymHomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome</h1>
      <Outlet />
    </div>
  );
};
