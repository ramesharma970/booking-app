import React from 'react';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import NavBar from '../navbar/Navbar';
import { About } from '../about/About';
import Services from '../services/Services';
import Works from '../works/Works';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
// import MessengerCustomerChat from 'react-messenger-customer-chat';

//css
import './Home.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home" id="home">
        {' '}
        <Container>
          <Row>
            <Col>
              <div>
                <h1 className="home_title"> Mero Booking APP</h1>
                <p className="home_description">
                  Welcome, You can book for any sort of photography, videography
                  Welcome, You can book for any sort of photography, videography
                  Welcome, You can book for any sort of photography, videography
                </p>
                <button className="home_button"> Book Now</button>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  alt="home"
                  height="500px"
                  src="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
      {/* <MessengerCustomerChat
        pageId="100094625919429"
        appId="232407246409371"
        greetingDialogDisplay="show"
      /> */}
    </>
  );
};

export default Home;
