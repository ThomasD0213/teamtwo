'use client';
import React from 'react'
import {Badge, Stack, Button, Container, Row, Col} from "../../../node_modules/react-bootstrap/esm/index";
import './project.css';
import Image from 'next/image';
import arrow from './images/leftArrow.png';

const projectPage = () => {
  return (
   <main>
   <div id="header">
        <Button id='backButton' href="/dashboard"><Image 
        alt = "Back arrow"
        src={arrow}
        width={20} 
        /></Button>
    </div>
    <div>
        {/* <h1>
            Name of Project
        </h1>

        <Stack direction="vertical">
            <Badge bg="primary">OPEN/CLOSED</Badge>
            <text><b>Owner:</b> John Smith {"\n"}</text>
            <text><b>Details:</b> Lorem ipsum {"\n"}</text>
            <text><b>Skills Needed:</b> Awesome react skills {"\n"}</text>
            <text><b>Project Timeline:</b> Finish by Nov 23 2023 {"\n"}</text>
            <text><b>Budget:</b> N/A {"\n"}</text>
            <text><b>Contact:</b> John.Smith@du.edu {"\n"}</text>
        </Stack> */}

        <Container fluid>
            <Row>
                <Col id = "TopRectangle">PROJECT TITLE</Col>
                <Col id = "Contact">Contact Me: John.Smith@university.edu</Col>
            </Row>
            <Row>
                <Col id = "BottomRectangle">
                    <Stack>
                        <p>OPEN/CLOSED</p>
                        <p><b>Owner</b></p>
                        <p>John Smith</p>
                        <p><b>Skills Needed</b></p>
                        <p>Mad react skills</p>
                        <p><b>Project Timeline</b></p>
                        <p>Finish by Nov 23 2023</p>
                    </Stack>
                </Col>
                <Col id = "Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Col>
            </Row>
        </Container>
    </div>
    </main>
  )
}

export default projectPage