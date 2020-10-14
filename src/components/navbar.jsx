import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Stateless Functional Component
// they need the props as parameter, since they cannot access it as this.props
//const NavBar = (props) => {...}

//here we are using object destructuring, since we are interested only in the
//properties of props
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">EPC Modelling</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/epcrating">EPC rating</Nav.Link>
          <Nav.Link href="/app-diagram">App diagram</Nav.Link>
          <Nav.Link href="/json">JSON data</Nav.Link>
          <Nav.Link href="/uml">UML representation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Text>v2.0.0</Navbar.Text>
    </Navbar>
  );
};

export default NavBar;
