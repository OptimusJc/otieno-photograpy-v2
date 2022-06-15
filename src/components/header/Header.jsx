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
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Potraits" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#link">Architecture</Nav.Link>
            <Nav.Link href="#link">Food</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
