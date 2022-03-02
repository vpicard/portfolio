import React from "react";
import { Col, Row, Nav } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const About = () => {

  return (
    <div className="about">
      <Navigation />
      <Row>
        <Col lg={12} className="about-profile-picture">
          <img
            alt="Profile"
            src={require("../assets/images/main-profile-picture.png")}
          />
        </Col>
      </Row>
      <Row className="w-100">
        <Col lg={12} className="mt-5 w-100">
          <Nav>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-active" : "nav-link"
              }
              to="/about/education"
            >
              Education
            </NavLink>
            <NavLink className="nav-link" to="/about/experience">
              Experience
            </NavLink>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-4 w-100">
        <Col lg={12}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default About;
