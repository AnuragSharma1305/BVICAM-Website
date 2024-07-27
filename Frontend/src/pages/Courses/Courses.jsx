import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import MCACourseImg from '../../utils/images/MCA-course.jpg';
import BACourseImg from '../../utils/images/BAJMC-course.png';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BVI_Logo from '../../utils/images/BVI_Logo.png';

const courses = [
    {
        id: 1,
        img: MCACourseImg,
        title: 'Master of Computer Applications (MCA)',
        description: 'The Master of Computer Applications (MCA) program is a postgraduate course that provides advanced knowledge and skills in computer science and its applications. It covers a wide range of topics including software development, programming languages, database management, networking, and more. MCA graduates are equipped with the expertise to design, develop, and manage complex software systems, making them highly sought-after professionals in the IT industry.'
    },
    {
        id: 2,
        img: BACourseImg,
        title: 'BA(JMC)',
        description: 'The BA(JMC) program offers a comprehensive curriculum focusing on journalism and mass communication. Students gain insights into various media platforms, including print, digital, and broadcasting. This course equips graduates with essential skills in reporting, editing, content creation, and media management, preparing them for diverse roles in the dynamic field of journalism and communication.'
    }
];

function Courses({ isAuthenticated, handleLogout }) {
  return (
    <div>
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
                <Button variant="outline-light" size="m" className="mx-1 my-2 border-0 text-black hover:text-gray-800">
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

      <div className='courses-page'>
        <header className='height-75'></header>
        <div className='container py-5'>
          <div className='row g-4'>
            {courses.map((course) => (
              <div key={course.id} className='col-lg-6'>
                <Card className='text-white shadow scale-hover-effect' style={{ height: '400px' }}>
                  <Card.Img src={course.img} style={{ objectFit: 'cover', height: '100%' }} />
                  <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                    <Card.Title className='fs-1 text-danger text-center'>{course.title}</Card.Title>
                    <Card.Text className='text-center'>{course.description}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-dark text-light py-5'>
          <FaqAccordion />
        </div>
      </div>
    </div>
  )
}

export default Courses;
