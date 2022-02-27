import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Container>
        <Row>
          <Col lg={12}>
            <img
              alt="Profile"
              src={require("./../assets/images/main-profile-picture.png")}
            />
          </Col>
        </Row>
        <Row >
          <div className="col-lg photo-description">
            <p>Hello, I'm</p>
            <span className="name">Vincent Picard</span>
            <p style={{ marginBottom: "20px", textAlign: "center" }}>
              Looking for an <b>android developer job</b>
            </p>
            <button className="btn-cv offset">Download CV</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
