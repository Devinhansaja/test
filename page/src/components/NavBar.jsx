import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Container,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../assets/images/NavImage.png";
import "./NavBar.css";

const NavigationBar = () => {
  return (
    <Navbar className="main-navbar" expand="lg" collapseOnSelect>
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img
            width="180"
            height="50"
            className="d-inline-block align-top"
            src={Logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            variant="underline"
            defaultActiveKey="/home"
            className="mr-2 navbar"
          >
            <Nav.Link href="dashboard">Home</Nav.Link>
            <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item href="supervisor">Supervisor</NavDropdown.Item>
              <NavDropdown.Item href="#link1-2">Driver</NavDropdown.Item>
              <NavDropdown.Item href="helper">Helper</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="estate">Estate</Nav.Link>
            <Nav.Link href="chemical">Chemical</Nav.Link>
            <Nav.Link href="dry">Dry(Kg)</Nav.Link>
            <Nav.Link href="vfa">VFA</Nav.Link>
            <Nav.Link href="root">Root Arrange</Nav.Link>
            {/* <Nav.Link href="#link4">Contact</Nav.Link> */}
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">
              <Button>Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
