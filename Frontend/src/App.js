import React from 'react';
import './output.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Placement from './pages/Placement/Placement';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import UploadFile from "./routes/UploadFile";
import ViewUploads from "./routes/ViewUploads";
import NotFound from "./routes/NotFound";

import BVI_Logo from './utils/images/BVI_Logo.png';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import Admissions from './pages/Admissions/Admissions';

function App() {
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies();
  const Navigate = useNavigate();

  const handleLogout = () => {
    // Iterate through all cookies and remove them
    for (const cookie in cookies) {
      removeCookie(cookie);
    }

    // Navigate to the "/" route
    Navigate('/');
  };

  const renderNavbar = () => {
    const isAuthenticated = cookies.token !== undefined;

    if (
      location.pathname === '/login' ||
      location.pathname === '/signup' ||
      location.pathname === '/about' ||
      location.pathname === '/blog' ||
      location.pathname === '/contact' ||
      location.pathname === '/courses' ||
      location.pathname === '/upload' ||
      location.pathname === '/ViewUploads' ||
      location.pathname === '/Placement' ||
      location.pathname === '/Infrastructure' ||
      location.pathname === '/Admissions' ||
      location.pathname === '/non-existent-route'
    ) {
      return null;
    }

    return (
      <Navbar expand="lg" className='position-absolute w-full' style={{ }}>
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
              <Button variant="outline-light" size="m" className="mx-1 my-2 border-0">
                Home
              </Button>
            </Link>
            <Link to="/courses" className="text-decoration-none">
              <Button variant="outline-light" size="m" className="mx-1 my-2 border-0">
                Our Courses
              </Button>
            </Link>
            <Link to="/blog" className="text-decoration-none">
              <Button variant="outline-light" size="m" className="mx-1 my-2 border-0">
                Blog
              </Button>
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/upload" className="text-decoration-none">
                  <Button variant="outline-light" size="m" className="mx-1 my-2 border-0">
                    Upload
                  </Button>
                </Link>
                <Button variant="outline-light" size="m" className="mx-1 my-2 border-0" onClick={handleLogout}>
                    Log Out
                </Button>

              </>
            ) : (
              <Link to="/login" className="text-decoration-none">
                <Button variant="outline-light" size="m" className="mx-1 my-2 border-0">
                  Admin Login
                </Button>
              </Link>
            )}
            <Link to="/ViewUploads" className="text-decoration-none">
              <Button variant="outline-light" size="m" className="mx-1 my-2 border-0">
                Notices/Circulars
              </Button>
            </Link>
            <Link to="/Placement" className="text-decoration-none">
              <Button variant="outline-light" size="m" className="mx-1 my-2 border-0">
                Placements
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    );
  };

  const renderFooter = () => {
    if (
      location.pathname === '/login' ||
      location.pathname === '/signup' ||
      location.pathname === '/about' ||
      location.pathname === '/blog' ||
      location.pathname === '/contact' ||
      location.pathname === '/courses' ||
      location.pathname === '/upload' ||
      location.pathname === '/ViewUploads' ||
      location.pathname === '/Placement' ||
      location.pathname === '/Infrastructure' ||
      location.pathname === '/Admissions' ||
      location.pathname === '/non-existent-route'
    ) {
      return null;
    }
    return (
      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to = '/contact'>  <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button></Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <a href="https://www.facebook.com/bvicam.newdelhi/">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </li>
                </a>
                <a href="https://www.instagram.com/ibvicam/">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </li>
                </a>
                <a href="https://in.linkedin.com/company/bharati-vidyapeeth-s-institute-of-computer-applications-and-management-delhi">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#d33c3c" viewBox="0 0 310 310">
                      <path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </svg>
                  </li>
                </a>
                <a href="https://www.youtube.com/@bvicamnewdelhi6802">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                    </svg>
                  </li>
                </a>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <a href="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </a>
                    <a href="/courses" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Our courses</li>
                    </a>
                    <a href="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About us</li>
                    </a>
                    <a href="/blog" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Blog</li>
                    </a>
                    <a href="https://www.youtube.com/@bvicamnewdelhi6802" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Get In Touch</li>
                    </a>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Main Address: A-4, Paschim Vihar, Opp. Paschim Vihar (East) Metro Station,Rohtak Road, New Delhi - 110063</p>
                    </li>
                    <li>
                      <p>Phone: +91 - 11 - 25275055</p>
                    </li>
                    <li>
                      <p>Email : mca@bvicam.ac.in; mca.hoda@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'></div>
      </footer>
    );
  };

  return (
    <div>
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/ViewUploads" element={<ViewUploads />} />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/Infrastructure" element={<Infrastructure />} />
        <Route path="/Admissions" element={<Admissions />} />
        <Route path="/*" element={<NotFound />} /> 
      </Routes>
      {renderFooter()}
    </div>
  );
}
export default App;
