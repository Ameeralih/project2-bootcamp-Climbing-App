import { Outlet } from "react-router-dom";
import "../App.css";
import { NavBarBottom } from "./NavBarBottom";
import { NavBarTop } from "./NavBarTop";
import "bootstrap/dist/css/bootstrap.css";

export const GymHomePage = () => {
  return (
    <>
      <NavBarTop />
      <NavBarBottom />
      <div className="App">
        <br />
        <br />
        <Outlet />
      </div>
    </>
  );
};
