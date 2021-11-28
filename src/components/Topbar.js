import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Nav className="ml-auto">
          <Navbar.Text>
            <Link to="/"> الوطنية مسلسلات</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/login"> تسجيل الدخول </Link>{" "}
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/register"> انشاء حساب </Link>
          </Navbar.Text>
        </Nav>

        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"></Nav>
          <Nav>
            <Nav.Link style={{ marginRight: "20px" }}>
              
            </Nav.Link>
            <Nav.Link href="/register" style={{ marginRight: "20px" }}>
              
            </Nav.Link>
            <NavDropdown
              title="اللغة"
              id="basic-nav-dropdown"
              style={{ marginRight: "20px" }}
            >
              <NavDropdown.Item href="#action/3.1">Francais</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">العربية</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand style={{ padding: "20px" }}>
          
  </Navbar.Brand>*/}
      </Navbar>
    </>
  );
}
