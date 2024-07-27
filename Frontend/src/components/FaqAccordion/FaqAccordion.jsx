import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Answers to Your Common Queries</h2>
            <p className='text-center mb-5'>At BVICAM, we understand that clarity is key. Below are answers to some of the questions frequently asked by our prospective students. If you have any further queries, feel free to reach out to us.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What courses does BVICAM offer?</Accordion.Header>
                    <Accordion.Body>
                    BVICAM offers a diverse range of courses, including a Bachelor of Arts in Journalism and Mass Communication (BA(JMC)) and a Master of Computer Applications (MCA). These programs are tailored to meet the demands of today's dynamic industries, providing options to suit various interests and career aspirations.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What sets BVICAM apart from other institutions?</Accordion.Header>
                    <Accordion.Body>
                    BVICAM stands out for its commitment to excellence in education. Our faculty comprises seasoned professionals with extensive industry experience, ensuring that students receive top-notch instruction and guidance. Additionally, our state-of-the-art infrastructure facilitates immersive learning experiences.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What is the placement scenario at BVICAM?</Accordion.Header>
                    <Accordion.Body>
                    BVICAM has a stellar track record of placements, with many reputed companies recruiting our graduates each year including IVP,Yamaha,CVENT etc. Our comprehensive training programs, industry partnerships, and career counseling services equip students with the skills and confidence needed to excel in interviews and secure rewarding job opportunities.
                    </Accordion.Body>
                </Accordion.Item>
              
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;