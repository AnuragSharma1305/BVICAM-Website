import React, { useState, useEffect } from 'react';
import { makeUnauthenticatedGETRequest } from "../utils/serverHelpers";
import { Navbar, Container, Nav, Button } from 'react-bootstrap'; 
import BVI_Logo from '../utils/images/BVI_Logo.png';
import { Link } from 'react-router-dom';

const ViewUploads = ({ isAuthenticated, handleLogout }) => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    fetchUploads();
  }, []);

  const fetchUploads = async () => {
    try {
      const response = await makeUnauthenticatedGETRequest('/auth/getUploads');
      console.log('API Response:', response);
      setUploads(response.data);
    } catch (error) {
      console.error('Error fetching uploads:', error);
    }
  };

  // Array of hardcoded dates for each row
  const hardcodedDates = [
    "March 7, 2024",
    "March 31, 2024",
    "April 27, 2024",
    "May 20, 2024",
    "May 28, 2024",
    "May 29, 2024",
    "May 29, 2024",

    // Add more dates as needed
  ];

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

      <div className="container mx-auto" style={{ paddingTop: '150px' }}> 
      
        <table className="min-w-full divide-y divide-gray-200 shadow-md border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-lg font-medium text-left border-r border-gray-300">Name</th>
              <th className="px-6 py-3 text-lg font-medium text-center border-r border-gray-300">Link</th>
              <th className="px-6 py-3 text-lg font-medium text-center">Date of Upload</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {uploads.map((upload, index) => {
              console.log('Date Uploaded:', upload.dateUploaded);
              return (
                <tr key={upload.id} className="transition-all hover:bg-gray-50">
                  <td className="px-6 py-4 border border-gray-300">{upload.name}</td>
                  <td className="px-6 py-4 text-center border border-gray-300">
                    <a href={upload.track} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Document</a>
                  </td>
                  <td className="px-6 py-4 text-center border border-gray-300">{hardcodedDates[index]}</td> 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewUploads;
