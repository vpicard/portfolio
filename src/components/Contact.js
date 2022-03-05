import React, { useRef } from "react";
import Navigation from "./Navigation";
import { Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recaptcha from "react-recaptcha";

const Contact = () => {
  
  const form = useRef();

  const callback = () => {

  }

  const sendEmail = (e) => {
    e.preventDefault();
    toast("✉️ Message send");
    emailjs
      .sendForm(
        "service_th03afa",
        "template_a8pddqo",
        form.current,
        "user_GybiEY0vYkuig0lhp5aOj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <Navigation />
      <Container>
        <div className="title mb-3" lg={12}>
          <h3>Contact me</h3>
        </div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Jean Dupont"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="jean.dupont@exemple.com"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" name="phone" />
            <Form.Text className="text-muted">Optional</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" name="message" required rows={4} />
          </Form.Group>
          <div className="btn-area">
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Send</span>
            </button>
          </div>
        </Form>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </div>
  );
};

export default Contact;
