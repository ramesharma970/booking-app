import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import Booknow from '../../assets/images/booknow.png';

import MessengerCustomerChat from 'react-messenger-customer-chat';

//css
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <div>
              <img alt="logo" src={Booknow} />
            </div>
          </Col>
          <Col className="text-right">
            <div className="d-flex justify-content-evenly">
              <div className="social-icons d-flex">
                <a
                  href="https://www.facebook.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.instagram.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="contact-info">
                <p>Email: example@example.com</p>
                <p>Phone: +1 123-456-7890</p>
                <p>Location: City, State, Country</p>
                <p>Additional relevant information...</p>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <MessengerCustomerChat
            pageId="<PAGE_ID>"
            appId="<APP_ID>"
            htmlRef="<REF_STRING>"
          />
          ,
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
