import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/aa.png";

function AppNavbar() {
  const auth = JSON.parse(localStorage.getItem("todoApp"));

  const logOut = () => {
    localStorage.removeItem("todoApp");
    window.location.replace("/login");
  };
  return (
    <Navbar bg="dark" variant="dark mb-5 fixed-top" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="App Academy Logo"
            className="logo"
            width={"40px"}
            height={"40px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="nav justify-content-end">
            <Nav.Link as={Link} to="/">
              Dashboard
            </Nav.Link>
            {auth ? null : (
              <Nav.Link as={Link} to="/signup">
                Signup
              </Nav.Link>
            )}
            {auth ? null : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        {auth ? (
          <Nav>
            <span>User</span>
            <NavDropdown>
              <NavDropdown.Item defaultValue={"User"} onClick={logOut}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </div>
    </Navbar>
  );
}

export default AppNavbar;
