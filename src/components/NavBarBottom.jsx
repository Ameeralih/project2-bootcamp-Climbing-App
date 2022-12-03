import React from "react";
import { Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

export const NavBarBottom = () => {
  let navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
      className="Bottom-navigation-paper"
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          value="/gyms"
        />
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          value="/profile"
        />
      </BottomNavigation>
    </Paper>
  );
};
