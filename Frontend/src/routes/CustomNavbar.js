// CustomNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import BVI_Logo from '../utils/images/BVI_Logo.png';


function CustomNavbar() {
  return (
    <Navbar expand="lg" className='position-absolute w-100'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='navbar-brand d-flex align-items-center'>
            <img src={BVI_Logo} alt="BVI Logo" width="248" height="48" className="me-2" /> {/* Use your logo here */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto justify-content-end w-100'>
            <Nav.Link as={Link} to='/' className='text-uppercase' style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to='/courses' className='text-uppercase' style={{ color: 'white' }}>Our courses</Nav.Link>
            <Nav.Link as={Link} to='/about' className='text-uppercase' style={{ color: 'white' }}>About us</Nav.Link>
            <Nav.Link as={Link} to='/blog' className='text-uppercase' style={{ color: 'white' }}>Blog</Nav.Link>
            <Nav.Link href='https://www.youtube.com/@bvicamnewdelhi6802' className='text-uppercase' style={{ color: 'white' }}>Get in touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
