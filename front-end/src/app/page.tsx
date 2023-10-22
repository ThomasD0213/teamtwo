"use client";
import Link from '../../node_modules/next/link'
import styles from './page.module.css'
import Button from '../../node_modules/react-bootstrap/esm/Button';
import Bar from '../../Components/bar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Nav, Navbar, NavDropdown, Container } from '../../node_modules/react-bootstrap/esm/index';
import React, { useState,  useEffect,  } from 'react';
import {  Row, Col, ButtonToolbar, OverlayTrigger,  Tooltip, Modal, ButtonGroup } from 'react-bootstrap';
import MyImage from './assets/images/business-working.png';
import Image from 'next/image';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const open = () => {
    setShowModal(true);
  };

  const close = () => {
    setShowModal(false);
  };
  const [titleWord, setTitleWord] = useState('collaborate'); // Initial word
  const words = ['collaborate', 'network', 'grow', 'learn', 'get things done'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
 
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

        
  return (
    <main>
     <Bar />
      
   <Stack style={{backgroundColor: '#060606'}}>
      <Row>
        <Col xs={12} md={12} style={{backgroundColor: '#fffaeb'}}>
          
        <span className=''>Team</span>
          <span style={{color: '#ffcb2d'}}>To</span>
            <h1 className={isRotating ? 'vertical-rotate' : ''} style={{color: '#cf4307'}}>{titleWord}</h1>

{/* <Button variant="primary">Change Word</Button> */}
   
         
            <Button
              onClick={open} 
              style={{color: '#130e01', backgroundColor: '#ffcb2d'}}
            >
              JOIN!
            </Button>
            <Modal show={showModal} onHide={close} style={{backgroundColor: 'rgba(6, 6, 6, 0.5)'}}>
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
            </Modal>
          
        </Col>
      </Row>
      <Row><Col xs={6} md={5} >
      <Image src={MyImage} alt="My Image" />
        </Col>
        <Col xs={6} md={5}>
          <h2 style={{color: '#fffaeb'}}>Where students and professionals build together.
_________________________________

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
          
        </Col>
        
      </Row>

 </Stack>

      

 </main>
    
  );
    }