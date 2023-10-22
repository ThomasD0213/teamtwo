"use client";
import Link from '../../node_modules/next/link'
import  './page.module.css'
import Button from '../../node_modules/react-bootstrap/esm/Button';
import Bar from '../../Components/bar'

import { Stack, Nav, Navbar, NavDropdown, Container } from '../../node_modules/react-bootstrap/esm/index';
import React, { useState,  useEffect,  } from 'react';
import {  Row, Col, ButtonToolbar, OverlayTrigger,  Tooltip, Modal, ButtonGroup } from 'react-bootstrap';
import MyImage from './assets/images/business-working.png';
import Image from 'next/image';

export default function Home() {

  // CONSTANTS
  const [showModal, setShowModal] = useState(false);

  const open = () => {
    setShowModal(true);
  };

  const close = () => {
    setShowModal(false);
  };
  const [titleWord, setTitleWord] = useState('collaborate'); // Initial word
  const words = ['collaborate', 'network', 'grow', 'learn', 'build'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  //END OF CONSTANTS

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);

      setTimeout(() => {
        setIsRotating(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTitleWord(words[wordIndex]);
      }, 500); // Adjust the duration of the rotation effect here

    }, 1000);

    return () => clearInterval(interval);
  }, [wordIndex]);

  //RETURN METHOD
  return (
   
    <div style={{height: '100vh',overflowY: 'auto',backgroundColor: '#060606',}}>
      
      <Row xs={12} md={12} lg={12}>
  <Col xs={12} md={12} lg={12} style={{ backgroundColor: '#fffaeb', height: '18vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
  <div style={{ position: 'sticky', top: '50px', right: '170vh' }}>
    <div >
      <h1  style={{ fontSize: '4em',position: 'absolute'}}>Team 
      <span style={{ color: '#ffcb2d', fontSize: '1em', position: 'absolute'}}>  To  
      
      <span className={isRotating ? 'vertical-rotate' : ''} style={{ color: '#cf4307',}}>{titleWord}</span>
      </span>
      
      </h1> 
    </div>
    <div>
     
      </div>
    </div>
    <h1 ></h1>
    {/* <div className='boton' style={{  position:'relative',top: '50px', right: '10px',}}>
    <Button onClick={open}href='/dashboard' style={{color: '#130e01', backgroundColor: '#ffcb2d', borderColor:'rgba(0,0,0,0)' }}>
      LOGIN!
    </Button>
    <Button onClick={open}href='/createProfile' style={{color: '#130e01', backgroundColor:'rgba(0,0,0,0)',borderColor: '#ffcb2d',borderWidth:'3PX', margin:'5px'}}>
      SIGN UP!
    </Button>
    </div> */}
    <div className='boton' style={{ marginRight: '15px', marginTop: '15px', textAlign: 'right' }}>
  <Button onClick={open} href='/dashboard' style={{ color: '#130e01', backgroundColor: '#ffcb2d', borderColor: 'rgba(0,0,0,0)', marginLeft:'140vh'}}>
    LOGIN!
  </Button>
  <Button onClick={open} href='/createProfile' style={{ color: '#130e01', backgroundColor: 'rgba(0,0,0,0)', borderColor: '#ffcb2d', borderWidth: '3px', margin: '5px' }}>
    SIGN UP!
  </Button>
</div>

  </Col>
</Row>
{/* <Row>
  <Col xs={12} md={12} lg={12} style={{ backgroundColor: '#fffaeb', height: '18vh', position: 'relative', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
    <div style={{ alignSelf: 'flex-start', textAlign: 'left' }}>
      <h1 style={{ fontSize: '50px' }}>Team</h1>
      <h1 style={{ color: '#ffcb2d', fontSize: '100px' }}>To</h1>
      <h1 className={isRotating ? 'vertical-rotate' : ''} style={{ color: '#cf4307' }}>{titleWord}</h1>
    </div>
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <Button onClick={open} style={{ color: '#130e01', backgroundColor: '#ffcb2d' }}>
        JOIN!
      </Button>
    </div>
  </Col>
</Row> */}


      
            {/* <Modal show={showModal} onHide={close} style={{backgroundColor: 'rgba(6, 6, 6, 0.5)'}}>
              <Modal.Header closeButton style={{backgroundColor: 'rgba(207, 67, 7)'}}>
              </Modal.Header>
              <Modal.Body style={{backgroundColor: 'rgba(207, 67, 7)'}}>
                <h4>LOGO GOES HERE</h4>
                <p>Email || User</p>
                <p>Password</p>
                <p>Don't have an account yet?</p>
                <p>SIGN UP</p>
              </Modal.Body>
              <Modal.Footer style={{backgroundColor: 'rgba(207, 67, 7)'}}>
                <Button onClick={close}  style={{color:'#130e01',backgroundColor: '#fffaeb', border: '4px solid #ffcb2d' }}>LOGIN</Button>
              </Modal.Footer >
            </Modal> */}
      
      <Row><Col xs={6} md={5} >
      <Image src={MyImage} alt="My Image" style={{margin:'25px',marginLeft:'15vw',marginTop:'20vh'}}/>
        </Col>
        <Col xs={6} md={4} style={{margin:'8em'}}>
          {/* <h2 style={{color: '#fffaeb', fontSize: '2em'}}>TOGETHER-WE BUILD.{''}
          <span style={{color: '#fffaeb', fontSize: '0.5em'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
          </span>

       </h2>
           */}
           {/* <h1 style={{ color: '#fffaeb', fontSize: '3em', textAlign: 'center' }}>
  TOGETHER -WE BUILD.{' '}
  <span style={{ color: '#fffaeb', fontSize: '0.5em', display: 'block', textAlign: 'center' }}>
    <h4 style={{ color: '#fffaeb', fontSize: '2em', textAlign: 'center' }}>______________</h4>
    <h5> Team2 is your gateway to a vibrant community where students, staff, and faculty come together beyond the classroom to collaborate on exciting projects. With Team2, you can transform your academic journey, enrich your portfolio, and expand your professional network.
</h5>
<h6 style={{ color: '#fffaeb', fontSize: '1em', textAlign: 'center' }}>Why Choose Team2?</h6>
    •    Collaboration that Counts: At Team2, we facilitate meaningful collaborations between students, faculty members, and staff professionals. Whether it's coding, creative writing, or groundbreaking research, you can work together with peers from various backgrounds and expertise areas.
    •    Networking Opportunities: Your education doesn't end at graduation. Team2 helps you connect with peers, mentors, and professionals who can open doors to internships, job opportunities, and invaluable mentorship.
    •    Portfolio Building: Showcase your collaborative projects in a personalized portfolio on our platform. Impress future employers with tangible proof of your skills and proactive approach.
Seamless Experience
Managing collaborations has never been easier. With Team2, you can create your profile, find exciting projects that align with your interests, and easily manage your collaborations, all in one convenient platform. Say goodbye to the hassles of juggling multiple tools and communication channels.
Join Team2 Today
Ready to redefine your educational journey? Join Team2 and embark on projects that have the potential to shape your future. Our platform is open to undergraduate and graduate students, faculty members, and staff professionals. Together, we're reshaping education, one collaborative project at a time.
Join our community today and become part of an initiative dedicated to promoting academia, providing field-specific experience, and fostering real-world growth. Welcome to Team2, where learning truly meets innovation.
  </span>
</h1> */}
<h1 style={{ color: '#cf4307', fontSize: '3em', textAlign: 'center' }}>
  TOGETHER - WE BUILD.{' '}
  <span style={{ color: '#fffaeb', fontSize: '0.5em', display: 'block', textAlign: 'center' }}>
    <h4 style={{ color: '#fffaeb', fontSize: '2em', textAlign: 'center' }}>______________</h4>
    <h5>
      Team2 is your gateway to a vibrant community where students, staff, and faculty come together beyond the classroom to collaborate on exciting projects. With Team2, you can transform your academic journey, enrich your portfolio, and expand your professional network.
    </h5>
     </span>
</h1>

  
<section id="about" style = {{paddingTop:'7vh', textAlign: 'center' }}>
  <div className="container">
    <div className="row" >
      <h1 style = {{paddingTop:'7vh', color:'#ffcb2d'}} >Why chose Team 2?
      </h1>
      <div className="block" style = {{paddingTop:'7vh', color:'#ffcb2d'}}><h3>Seamless Experience</h3></div>
      <p style = {{paddingTop:'7vh', color:'#fffaeb'}}>Managing collaborations has never been easier. With Team2, you can create your profile, find exciting projects that align with your interests, and easily manage your collaborations, all in one convenient platform. Say goodbye to the hassles of juggling multiple tools and communication channels.
    </p>
    </div>
    <div className="row">
      <div className="six columns">
        <h3 style = {{paddingTop:'7vh', color:'#ffcb2d'}}><span className="typcn typcn-device-desktop icon"></span>Collaboration that Counts</h3>
        <p style = {{paddingTop:'7vh', color:'#fffaeb'}}>At Team2, we facilitate meaningful collaborations between students, faculty members, and staff professionals. Whether it's coding, creative writing, or groundbreaking research, you can work together with peers from various backgrounds and expertise areas.</p>
      </div>
      <div className="six columns">
        <h3 style = {{paddingTop:'7vh', color:'#ffcb2d'}}><span className="typcn typcn-pen icon" ></span>Networking Opportunities</h3>
        <p style = {{paddingTop:'7vh', color:'#fffaeb'}}> Your education doesn't end at graduation. Team2 helps you connect with peers, mentors, and professionals who can open doors to internships, job opportunities, and invaluable mentorship.</p>
      </div>
      <div className="row">
        <div className="six columns">
          <h3 style = {{paddingTop:'7vh', color:'#ffcb2d'}}><span className="typcn typcn-cog-outline icon"></span>Portfolio Building</h3>
          <p style = {{paddingTop:'7vh', color:'#fffaeb'}}> Showcase your collaborative projects in a personalized portfolio on our platform. Impress future employers with tangible proof of your skills and proactive approach.</p>
        </div>
        <div className="six columns">
          <h3 style = {{paddingTop:'7vh', color:'#ffcb2d'}}><span className="typcn typcn-lightbulb icon"></span>Join Team2 Today</h3>
          <p style = {{paddingTop:'7vh', color:'#fffaeb'}}>Ready to redefine your educational journey? Join Team2 and embark on projects that have the potential to shape your future. Our platform is open to undergraduate and graduate students, faculty members, and staff professionals. Together, we're reshaping education, one collaborative project at a time. Join our community today and become part of an initiative dedicated to promoting academia, providing field-specific experience, and fostering real-world growth. Welcome to Team2, where learning truly meets innovation.</p>
        </div>
      </div>
    </div>
  </div>
</section>



        </Col>
        
      </Row>


      </div>
    
  );
    }