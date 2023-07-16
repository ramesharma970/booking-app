import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//css
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Container>
        <h1 className="text-center"> Contact Us</h1>
        <Row>
          <Col>
            <div className="services_detail">
              <h1> Want to know more</h1>
              <p>
                {' '}
                Take a look at how Brainiak works. Get the answers to your
                unique questions. & find out why you should find your learning
                strategies.
              </p>
            </div>
          </Col>
          <Col>
            {' '}
            <div className="services_detail">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="input" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="textarea" placeholder="Message" />
                </Form.Group>

                <Button type="submit">Submit</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
