import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import Navigation from "./Navigation";

const About = () => {

  const [activeComponent, setActiveMyComponent] = useState(1);

  function btnEducationPressed () {
    setActiveMyComponent(1);
    var btnEducation = document.getElementById("btn-education");
    var btnExperience = document.getElementById("btn-experience");
    var btnHobbies = document.getElementById("btn-hobbies");

    if ( btnEducation.classList.contains("active") ) {
      return;
    }
    else {
      btnEducation.classList.add("active");
      btnExperience.classList.remove("active");
      btnHobbies.classList.remove("active");
    }
  }

  function btnExperiencePressed () {
    setActiveMyComponent(2);
    var btnEducation = document.getElementById("btn-education");
    var btnExperience = document.getElementById("btn-experience");
    var btnHobbies = document.getElementById("btn-hobbies");
   
    if ( btnExperience.classList.contains("active") ) {
      return;
    }
    else {
      btnExperience.classList.add("active");
      btnEducation.classList.remove("active");
      btnHobbies.classList.remove("active");
    }
  }

  function btnHobbiesPressed () {
    setActiveMyComponent(3);
    var btnEducation = document.getElementById("btn-education");
    var btnExperience = document.getElementById("btn-experience");
    var btnHobbies = document.getElementById("btn-hobbies");
   
    if ( btnHobbies.classList.contains("active") ) {
      return;
    }
    else {
      btnHobbies.classList.add("active");
      btnExperience.classList.remove("active");
      btnEducation.classList.remove("active");
    }
  }

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
      <Row className="mt-5 mb-4 mr-7 ml-7 w-100 ">
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
        <Col lg={6} className="mt-3 mb-3 w-100 about-tab">
          <button type="button" id="btn-education" className="item-tab active" onClick={btnEducationPressed} data-target="#education">Education</button>
          <button type="button" id="btn-experience" className="item-tab" onClick={btnExperiencePressed} data-target="#experience">Experience</button>
          <button type="button" id="btn-hobbies" className="item-tab" onClick={btnHobbiesPressed} data-target="#hobbies">Hobbies</button>
        </Col>
      </Row>
      <Row className="mt-4 w-100 content-education" lg={12}>
        <Col lg={12} className="timeline-content">
          {
            activeComponent === 1 && (
              <Education/>
            )
          }
          {
            activeComponent === 2 && (
              <Experience/>
            )
          }
          {
            activeComponent === 3 && (
              <Hobbies/>
            )
          }
        </Col>
      </Row>
    </div>
  );
};

export default About;
