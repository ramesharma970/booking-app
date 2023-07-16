import React from 'react';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//css
import './About.css';
import NavBar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export const About = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="about" id="about">
        <Container>
          <Row>
            <Col>
              <div>
                <img
                  src="https://cdn.vectorstock.com/i/preview-1x/60/39/film-production-logo-house-logo-vector-44046039.jpg"
                  alt="about_us"
                />
              </div>
            </Col>
            <Col>
              <div>
                <h1 className="about_title"> About Us</h1>
                <p className="about_description">
                  {' '}
                  We are a passionate and dedicated team that thrives on
                  creating captivating visual experiences. With a deep love for
                  storytelling and a commitment to excellence, we bring
                  imagination to life through the art of film and video
                  production.
                </p>
                <button className="aboutus_button">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
