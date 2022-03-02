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
      <Row className="mt-5 mb-5 mr-7 ml-7 w-100 ">
        <Col className="skills">
          <span className="skill">C++/Qt</span>
          <span className="skill">C</span>
          <span className="skill">Java</span>
          <span className="skill">CAPL</span>
          <span className="skill">Kotlin</span>
          <span className="skill">SQL</span>
          <span className="skill">Android Studio</span>
          <span className="skill">CSS/Sass</span>
          <span className="skill">Html</span>
          <span className="skill">ReactJs</span>
          <span className="skill">Git</span>
          <span className="skill">Docker</span>
          <span className="skill">CANoe</span>
          <span className="skill">Doors</span>
        </Col>
      </Row>
      <Row className="w-100">
        <Col lg={12} className="mt-3 mb-3 w-100">
          <Nav>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-active" : "nav-link"
              }
              to="/about/education"
            >
              Education
            </NavLink>
            <NavLink className="nav-link" to="/experience">
              Experience
            </NavLink>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-4 w-100" lg={12}>
        <Col lg={12} className="timeline-content">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default About;
