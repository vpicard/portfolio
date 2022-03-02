import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <div className="nav-left">
          <NavLink className={(navData) => (navData.isActive ? "" : "")} to="/">
            Home
          </NavLink>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <div className="nav-right link-wrapper">
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-active" : "link"
              }
              to="/about/education"
            >
              About
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-active" : "link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-active" : "link"
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
