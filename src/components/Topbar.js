import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function TopBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/" style={{ padding: "20px" }}>
          Wataniya Series
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/login" style={{ marginRight: "20px" }}>
              Login
            </Nav.Link>
            <Nav.Link href="/register" style={{ marginRight: "20px" }}>
              Register
            </Nav.Link>
            <NavDropdown
              title="Language"
              id="basic-nav-dropdown"
              style={{ marginRight: "20px" }}
            >
              <NavDropdown.Item href="#action/3.1">Francais</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">العربية</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
