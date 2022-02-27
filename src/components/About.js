import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Navigation from './Navigation';

const About = () => {
    return (
        <div className='about'>
            <Navigation />
            <Row>
                <Col lg={12}>
                    <img alt="Profile" src={require("../assets/images/main-profile-picture.png")} />
                </Col>
            </Row>
            <Row className='w-100'>
                <Col lg={12} className="mt-3 mb-2 w-100">
                    <nav>
                        <Link className='nav-link' to="/about/education" >Education</Link>
                        <Link className='nav-link' to="/about/experience" >Experience</Link>
                    </nav>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Outlet/>
                </Col>
            </Row>
        </div>
    );
};

export default About;