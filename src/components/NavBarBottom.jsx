import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import search from "../images/search.png";
import profile from "../images/profile.png";

export const NavBarBottom = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="/gyms">
          <img
            src={search}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="search icon"
          />{" "}
          GymSearch
        </Navbar.Brand>
        <Navbar.Brand href="/profile">
          <img
            src={profile}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="search icon"
          />{" "}
          Profile
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
