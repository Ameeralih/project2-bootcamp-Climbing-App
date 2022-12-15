import { Outlet, useNavigate } from "react-router-dom";
import "../App.css";
import { NavBarBottom } from "./NavBarBottom";
import { NavBarTop } from "./NavBarTop";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

export const GymHomePage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <>
      <NavBarTop />
      <NavBarBottom user={user} />
      <div className="App">
        <Outlet /> {/*this is gymsearch -> gymlist -> viewgym*/}
      </div>
    </>
  );
};
