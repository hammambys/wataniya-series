import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Wataniya Series</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Francais</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">العربية</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
