import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//css
import './Booknow.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

//big calendar
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

//components
import NavBar from '../navbar/Navbar';
import CustomForm from '../../utils/form/CustomForm';
import Footer from '../footer/Footer';

const localizer = momentLocalizer(moment);

function Booknow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const myEventsList = [
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Some title',
    },
  ];

  const handleSelectSlot = (slotInfo) => {
    console.log('test');
    console.log('Selected slot:', slotInfo);
    handleShow();
  };
  return (
    <div>
      <NavBar />
      <div className="booknow" id="booknow">
        <div>
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            selectable={true}
            style={{ height: 500 }}
            onSelectSlot={handleSelectSlot}
          />
        </div>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Book Here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CustomForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booknow;
