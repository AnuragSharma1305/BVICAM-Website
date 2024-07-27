import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/BVI-HomePage.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>BVICAM is dedicated to academic excellence and innovation, offering programs such as Bachelor of Arts in Journalism and Mass Communication (BA(JMC)) and Master of Computer Applications (MCA). Our institution emphasizes holistic development, fostering critical thinking and ethical values alongside professional skills.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                  
                    <p>Bharati Vidyapeeth's Institute of Computers Applications and Management (BVICAM), New Delhi, is one of the 187 institutions under Bharati Vidyapeeth, Pune. With a clear vision and mission to serve the cause of higher education in India, the Institute started conducting Master of Computer Applications (MCA) programme with effect from the Academic year 2002-2003. The Institute is affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), Sector 16C Dwarka, New Delhi-78. The Institute is also approved by the All India Council for Technical Education (AICTE), Ministry of HRD, Government. of India, New Delhi. BVICAM, New Delhi, is the first choice of students and parents for MCA admission, in Northern India and many of the Top Rankers from the CET of GGSIP University join BVICAM.</p>
                    <p className='mb-4 mb-lg-5'>BVICAM is centrally located at A-4, Paschim Vihar, adjacent to Paschim Vihar (East) DMRC Metro Station, National Highway No. 10, Rohtak Road, New Delhi, in its own state of the art sprawling campus. It is well poised with spacious parking areas with an excellent surrounding pollution free and healthy environment. The campus incorporates amenities like Conference Hall, Auditorium, Amphitheatre, modern Computer Resource Centre, well stocked Library, Student's Hostel, Guest House, In-house Banking facility, Indoor and Outdoor games facility, aesthetically designed Canteen in an open-air ambience, etc.

With its excellent Infrastructural and Instructional facilities for the students, BVICAM provides personalized attention to each student through its unique Student Teacher Wardship programme, having a teacher mentor for every student to monitor and facilitate his/her all round personality development. The Institute possesses an ultra modern "Computer Resource Centre" with excellent interiors housing 175 computers systems equipped with the latest and relevant hardware and software, as required for the course curriculum from time to time. To help students make efficient use of above resources; the laboratories are kept open for minimum 10 hours daily. The library houses a vast collection of General Books, Text Books, Indian/Foreign Periodicals/Journals/Magazines along with leading e-journals. Book Bank facility is also made available to students. The library has more than 1000 titles and 8000 Volumes in all.

The twin sharing Girls' hostel, within the campus, offers a secure home to its female students with an independent life style, while ensuring privacy with a congenial atmosphere. The hostel is augmented with proper food facilities, common T.V. room, other indoor games and adequate medical aid.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;