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

  // CONSTATNTS
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
  <Col xs={12} md={12} lg={12} style={{ backgroundColor: '#fffaeb', height: '18vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ position: 'absolute', top: '50px', right: '170vh' }}>
    <div >
      <h1  style={{ fontSize: '4em',position: 'absolute', alignSelf:'bottom' }}>Team 
      <span style={{ color: '#ffcb2d', fontSize: '1em', position: 'absolute'}}>  To  
      <span className={isRotating ? 'vertical-rotate' : ''} style={{ color: '#cf4307',}}>{titleWord}</span>
      </span>
      
      </h1> 
    </div>
    <div>
     
      </div>
    </div>
    <h1 ></h1>
    
    
   
    
    <div style={{ position: 'absolute', top: '50px', right: '10px' }}>
    <Button onClick={open}href='/dashboard' style={{ color: '#130e01', backgroundColor: '#ffcb2d' }}>
      LOGIN!
    </Button>
    <Button onClick={open}href='/createProfile' style={{ color: '#130e01', backgroundColor: '#ffcb2d', margin:'5px'}}>
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
      <Image src={MyImage} alt="My Image" style={{margin:'25px',marginLeft:'50px'}}/>
        </Col>
        <Col xs={6} md={4} style={{margin:'8em'}}>
          {/* <h2 style={{color: '#fffaeb', fontSize: '2em'}}>TOGETHER-WE BUILD.{''}
          <span style={{color: '#fffaeb', fontSize: '0.5em'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
          </span>

       </h2>
           */}
           <h2 style={{ color: '#fffaeb', fontSize: '2em', textAlign: 'center' }}>
  TOGETHER-WE BUILD.{' '}
  <span style={{ color: '#fffaeb', fontSize: '0.5em', display: 'block', textAlign: 'center' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </span>
</h2>

        </Col>
        
      </Row>


      </div>
    
      



   
         
         


      


    
  );
    }