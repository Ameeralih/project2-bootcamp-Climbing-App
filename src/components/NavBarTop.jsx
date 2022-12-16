import React from "react";
import { Paper } from "@mui/material";

export const NavBarTop = () => {
  return (
    <div className="topNavBar">
      <Paper
        sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
        elevation={3}
      >
        Climb Finder
      </Paper>
    </div>
  );
};
