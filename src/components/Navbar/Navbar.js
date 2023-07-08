import React from "react";
import { auth } from "../../utils/auth";
import Logo from "../../assets/logo-emblem-white.svg";
import { handleLogOut } from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark p-3 mb-5 fixed-top mx-auto" expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width={"40px"}
            height={"40px"}
            alt="App Academy Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="justify-content-end">
          <Nav className="h6">
            {auth && (
              <Nav.Link as={Link} to="/">
                Dashboard
              </Nav.Link>
            )}
            {!auth && (
              <>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        {auth && (
          <Navbar.Collapse className="justify-content-end h6">
            <Nav>
              <NavDropdown title="WELCOME, USER!">
                <NavDropdown.Item onClick={handleLogOut}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
