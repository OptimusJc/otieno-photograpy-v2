import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import "./header.scss";
import logo from "../../assets/logo/otieno_logo_yellow.png";

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  const checkMenuClicked = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar className="navbar-bg" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="otieno photography logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={checkMenuClicked}>
          {collapsed === false ? (
            <HiMenuAlt3 className="menu-icon" />
          ) : (
            <IoClose className="menu-icon" />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown
              title="Potraits"
              id="basic-nav-dropdown"
              className="dropdown-potrait"
            >
              <NavDropdown.Item href="men">Men</NavDropdown.Item>
              <NavDropdown.Item href="women">Women</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="architecture">Architecture</Nav.Link>
            <Nav.Link href="food">Food</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
