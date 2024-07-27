import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card, Navbar, Container, Nav, Button } from 'react-bootstrap'; 
import blog1NSC from '../../utils/images/blog1NSC.png';
import BVI_Logo from '../../utils/images/BVI_Logo.png';
import blog2IndiaCom from '../../utils/images/blog2IndiaCom.png'; 
import blog3IEEE from '../../utils/images/blog3IEEE.png';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
  {
      id: 1,
      img: [blog1NSC],
      title: 'Blog 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
      id: 2,
      img: [blog2IndiaCom],
      title: 'Blog 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  },
  {
    id: 3,
    img: [blog3IEEE],
    title: 'Blog 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
  }
];

function Blog({ isAuthenticated, handleLogout }) {
  return (
    <div className='blog-page'>
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

      <div className='bg-body-tertiary py-5'>
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className='col-md-6 col-lg-4'>
                <Link to={`/blog/${blog.id}`} className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                      <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                      <Card.Text className='text-center'>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
