import React, { useRef } from 'react';
import './Contact.css';
import { Navbar, Container, Nav, Button, Form, Col, Row } from 'react-bootstrap'; // Import Navbar components
import BVI_Logo from '../../utils/images/BVI_Logo.png';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export const Contact = (isAuthenticated,handleLogout) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cfujygv', 'template_araagec', form.current, {
        publicKey: 'ND9602wPV5CFnRqSY',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Navbar expand="lg" className='position-absolute w-full' style={{}}>
        <Container>
          <Navbar.Brand>
            <div className='navbar-brand flex items-center'>
              <img src={BVI_Logo} alt="BVI Logo" width="248" height="48" className="me-2" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-gray-900' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='flex-auto justify-end w-full'>
              <Link to="/" className="text-decoration-none">
                <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800">
                  Home
                </Button>
              </Link>
              <Link to="/courses" className="text-decoration-none">
                <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-red">
                  Our Courses
                </Button>
              </Link>
              <Link to="/blog" className="text-decoration-none">
                <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800">
                  Blog
                </Button>
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/upload" className="text-decoration-none">
                    <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800">
                      Upload
                    </Button>
                  </Link>
                  <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800" onClick={handleLogout}>
                    Log Out
                  </Button>
                </>
              ) : (
                <Link to="/login" className="text-decoration-none">
                  <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800">
                    Admin Login
                  </Button>
                </Link>
              )}
              <Link to="/ViewUploads" className="text-decoration-none">
                <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800">
                  Notices/Circulars
                </Button>
              </Link>
              <Link to="/Placement" className="text-decoration-none">
              <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800">
                Placements
              </Button>
            </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='contact-page' style={{ paddingTop: '120px' }}>
        <div className='container my-5 d-flex justify-content-center'>
          <Form id='contact-form' ref={form} onSubmit={sendEmail}>
            <Row className='mb-3'>
              <Col sm={12} md={6} className='mb-3 mb-md-0'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='First name' name='first_name' />
              </Col>
              <Col sm={12} md={6}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Last name' name='last_name' />
              </Col>
            </Row>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' name='email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Address</Form.Label>
              <Form.Control type='text' placeholder='Your address' name='address' />
            </Form.Group>

            <Row className='mb-3'>
              <Col sm={12} md={6} className='mb-3 mb-md-0'>
                <Form.Label>Location</Form.Label>
                <Form.Select defaultValue="London" name='location'>
                  <option>New Delhi</option>
                  <option>Gurgaon</option>
                  <option>Haryana</option>
                </Form.Select>
              </Col>
              <Col sm={12} md={6}>
                <Form.Label>Postcode</Form.Label>
                <Form.Control type='text' placeholder='Postcode' name='postcode' />
              </Col>
            </Row>

            <Form.Group className='mb-3'>
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} name='message' />
            </Form.Group>

            <Button variant="danger btn-lg" type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
