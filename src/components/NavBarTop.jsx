import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import climbinglogo from "../images/climbinglogo.png";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export const NavBarTop = () => {
  return (
    <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0 }} elevation={3}>
      Climb Finder
    </Paper>
  );
};
