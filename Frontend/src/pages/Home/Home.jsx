import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.png';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card, Carousel } from 'react-bootstrap';
import blog1NSC from '../../utils/images/blog1NSC.png';
import blog2IndiaCom from '../../utils/images/blog2IndiaCom.png'; 
import blog3IEEE from '../../utils/images/blog3IEEE.png';
import BAJMC from '../../utils/images/BAJMC1.jpg';
import RBAJMC from '../../utils/images/RecruitersBJMC.jpg';
import FACULTIES from '../../utils/images/FacultiesImg.jpg';
import RMCA from '../../utils/images/MCATopRecruiter.jpg';

const blogs = [
    {
        id: 1,
        img: blog1NSC,
        title: "National Students' Convention",
        description: "Dive into the realm of innovation and creativity with the National Students' Convention (NSC). Experience the vibrant gathering of young minds as they showcase their research, ideas, and technological advancements aimed at shaping the future. Join us as we navigate through a myriad of workshops, presentations, and interactive sessions, immersing ourselves in the spirit of exploration and discovery." 
    },
    {
        id: 2,
        img: blog2IndiaCom,
        title: "INDIACom - A Catalyst for Technological Advancement",
        description: "Experience the Legacy of Innovation: Explore INDIACom - A Catalyst for Technological Advancement and Inclusive Growth. Since its inception in 2007, INDIACom has been a beacon of collaboration, bringing together luminaries, researchers, and industry leaders to pioneer advancements in computing and technology. With a steadfast commitment to driving inclusive development and harnessing the power of IT for effective governance, INDIACom serves as a hub for showcasing groundbreaking research and shaping the future of critical domains." 
    },
    {
        id: 3,
        img: blog3IEEE,
        title: "IEEE Conferences - Pioneering Technological Advancement",
        description: "Embark on a journey of innovation and collaboration with IEEE conferences, esteemed gatherings at the forefront of technological advancement. Since its inception, IEEE conferences have been pivotal in bringing together experts, researchers, and professionals from diverse fields to explore cutting-edge developments and drive progress in electrical engineering, computer science and beyond."
    }
];

const carouselImages = [
    { id: 1, src: BAJMC, alt: 'First slide' },
    { id: 2, src: RMCA, alt: 'Second slide' },
    { id: 3, src: RBAJMC, alt: 'Third slide' },
    { id: 4, src: FACULTIES, alt: 'Fourth slide' },
];

function Home() {
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        // Trigger the animation when the component mounts
        setAnimateHeader(true);
    }, []);

    const handleScroll = () => {
        const chooseSection = document.getElementById('choose-section');
        chooseSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='home-page'>
            <header className={`h-100 min-vh-100 d-flex align-items-center text-light ${animateHeader ? 'header-animated' : ''}`}>
                <div className='container d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                    <div className='text-section text-center text-lg-start'>
                        <h2>Welcome To</h2>
                        <h1 className='fw-semibold'>Bharati Vidyapeeth's Institute of Computer Applications and Management</h1>
                        <p className="text-lg">where we turn you into a force</p>
                        <div className='d-flex flex-column flex-sm-row align-items-center'>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Admissions</button>
                            </Link>
                            <Link to="/about">
                            <button 
                            type='button' 
                            className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0' >
                            Know More
                        </button>
                            </Link>
                        </div>
                    </div>
                    <div className='carousel-section'>
                        <Carousel indicators={false} controls={false}>
                            {carouselImages.map(image => (
                                <Carousel.Item key={image.id}>
                                    <img src={image.src} alt={image.alt} className='d-block w-100' />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </header>


            <div id="choose-section" className="py-5">
                <ChooseSection />
            </div>

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>Explore Our 2024 Course Offerings</h2>
                            <p>Discover exciting opportunities for academic growth in 2024 at BVICAM.</p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <FaqAccordion />
            </div>

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to="/blog" className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect'>
                                        <Card.Img variant="top" src={blog.img} />
                                        <Card.Body className='p-md-5'>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text className="description-truncate">{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;



