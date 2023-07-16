import React from 'react';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//css
import './Services.css';

const Services = () => {
  return (
    <div className="services" id="services">
      <Container>
        <Row>
          <Col md={4}>
            <div className="services_detail">
              <img
                alt="services"
                src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=170667a&w=0&k=20&c=OGlpWoAsAUroRipDIE6pKdDvakMgiShiZovUW7JQjKY="
              />
              <h1 className="services_title"> Wedding Photography</h1>
              <p className="services_description">
                {' '}
                We produce high-quality commercials that effectively showcase
                your brand, product, or service, helping you reach and engage
                your target audience.
              </p>
              <button> Learn More</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="services_detail">
              <img
                alt="services"
                src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=170667a&w=0&k=20&c=OGlpWoAsAUroRipDIE6pKdDvakMgiShiZovUW7JQjKY="
              />
              <h1 className="services_title">Corporate Photography</h1>
              <p className="services_description">
                {' '}
                Providing professional headshots and corporate portraits for
                individuals and teams.
              </p>
              <button> Learn More</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="services_detail" id="services_detail">
              <img
                alt="services"
                src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=170667a&w=0&k=20&c=OGlpWoAsAUroRipDIE6pKdDvakMgiShiZovUW7JQjKY="
              />
              <h1 className="services_title"> Commercial Photography</h1>
              <p className="services_description">
                {' '}
                We produce high-quality commercials that effectively showcase
                your brand, product, or service, helping you reach and engage
                your target audience.
              </p>
              <button> Learn More</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="services_detail">
              <img
                alt="services"
                src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=170667a&w=0&k=20&c=OGlpWoAsAUroRipDIE6pKdDvakMgiShiZovUW7JQjKY="
              />
              <h1 className="services_title"> Film Production</h1>
              <p className="services_description">
                {' '}
                We produce high-quality commercials that effectively showcase
                your brand, product, or service, helping you reach and engage
                your target audience.
              </p>
              <button> Learn More</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="services_detail">
              <img
                alt="services"
                src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=170667a&w=0&k=20&c=OGlpWoAsAUroRipDIE6pKdDvakMgiShiZovUW7JQjKY="
              />
              <h1 className="services_title"> Post-Production </h1>
              <p className="services_description">
                {' '}
                We produce high-quality commercials that effectively showcase
                your brand, product, or service, helping you reach and engage
                your target audience.
              </p>
              <button> Learn More</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="services_detail">
              <img
                alt="services"
                src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=170667a&w=0&k=20&c=OGlpWoAsAUroRipDIE6pKdDvakMgiShiZovUW7JQjKY="
              />
              <h1 className="services_title"> Videography</h1>
              <p className="services_description">
                {' '}
                We produce high-quality commercials that effectively showcase
                your brand, product, or service, helping you reach and engage
                your target audience.
              </p>
              <button> Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
