import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useState } from "react";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Carousel from "react-bootstrap/Carousel";
import { Modal, Button } from "react-bootstrap";
library.add(fab);

class SingleProject extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languages, languagesIcons, source, info, pictures } =
      this.props.item;

    return (
      <div className="single-project col-lg">
        {/* ----- Card ----- */}
        <div className="single-project-content">
          <Carousel>
            {pictures?.map((picture) => (
              <Carousel.Item key={picture}>
                <img
                  src={picture}
                  key={picture}
                  alt=""
                  height="200px"
                  width="250px"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="card-bottom">
            <h5 key={name}>{name}</h5>
            <div className="icons">
              {languagesIcons.map((icon) => (
                <FontAwesomeIcon icon={icon} key={icon} />
              ))}
              <button onClick={this.handleInfo}>
                <FontAwesomeIcon icon={faInfo} />
              </button>
            </div>
          </div>
        </div>

        {/* ----- Project overview ----- */}
        {this.state.showInfo && (
          <Modal
            className=""
            show={this.state.showInfo}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {info}
              </p>
              <p>
                <b>Languages</b>: {languages}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleInfo}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}

export default SingleProject;
