import React from 'react';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//css
import './Works.css';

export default function Works() {
  return (
    <div className="works" id="works">
      <Container>
        <Row>
          <h1 className="text-center">Our Works</h1>
          <Col>
            <div className="our_works_detail">
              <video
                src=" https://www.youtube.com/watch?v=p9uLhl0q498"
                controls
              ></video>
            </div>
          </Col>
          <Col>
            <div className="our_works_detail">
              <video
                src=" https://www.youtube.com/watch?v=p9uLhl0q498"
                controls
              ></video>
            </div>
          </Col>
          <Col>
            <div className="our_works_detail">
              <video
                src=" https://www.youtube.com/watch?v=p9uLhl0q498"
                controls
              ></video>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
