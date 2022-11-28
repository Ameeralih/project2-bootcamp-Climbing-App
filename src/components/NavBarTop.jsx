import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import climbinglogo from "../images/climbinglogo.png";

export const NavBarTop = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand>
          <p style={{ fontSize: 32 }}>
            <img
              src={climbinglogo}
              height="45"
              className="d-inline-block align-top"
              alt="search icon"
            />{" "}
            <Navbar.Text className="justify-content-end">
              Climb Finder
            </Navbar.Text>
          </p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
