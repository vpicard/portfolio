import React from "react";
import Navigation from "./Navigation";
import { Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <Container>
        <div className="title mb-3" lg={12}>
          <FontAwesomeIcon className="mb-1" icon={faPaperPlane} />
          <h3 className="mb-0 mt-0">Contact me</h3>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Jean Dupont" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="jean.dupont@exemple.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" />
            <Form.Text className="text-muted">Optional</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
