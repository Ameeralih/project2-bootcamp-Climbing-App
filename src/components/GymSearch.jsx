import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function GymSearch({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
