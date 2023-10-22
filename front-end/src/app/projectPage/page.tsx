'use client';
import React from 'react'
import {Badge, Stack, Button, Container, Row, Col} from "../../../node_modules/react-bootstrap/esm/index";
import './project.css';
import Image from 'next/image';
import team from './images/working-together.png';
import Back from '../../../Components/back';

const projectPage = () => {
  return (
   <main>
   <div id="header">
        <Back />
    </div>
    <div>
        <Container fluid>
            <Row>
                <Col>
                <Stack style={{backgroundColor:'#000000', color:"#FFFFFF"}}>
                <Image alt = "Team working together" src={team} width={250} id="center"/>
                <h1><b>PROJECT TITLE</b></h1>
                </Stack>
                </Col>
                <Col id = "Contact">
                    <Stack style={{backgroundColor:'#FFCB2D', color:"#000000"}}>
                    <h1><b>Contact Me:</b></h1>
                    <p>John.Smith@university.edu</p>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col id = "BottomRectangle">
                    <Stack style={{backgroundColor:'#000000', color:"#FFFAEB"}}>
                        <p>OPEN/CLOSED</p>
                        <p style={{color:'#CF4307'}}><b>Owner</b></p>
                        <p>John Smith</p>
                        <p style={{color:'#CF4307'}}><b>Skills Needed</b></p>
                        <p>Mad react skills</p>
                        <p style={{color:'#CF4307'}}><b>Project Timeline</b></p>
                        <p>Finish by Nov 23 2023</p>
                    </Stack>
                </Col>
                <Col id = "Description">
                    <div>
                    <Stack style={{backgroundColor:'#FFCB2D', borderWidth:'thick', color:"#000000"}}>
                        <p><b>Details:</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </Stack>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </main>
  )
}

export default projectPage