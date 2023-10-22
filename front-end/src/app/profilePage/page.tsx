"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './profile.css';
import Image from 'react-bootstrap/Image'
import {Badge, Stack, Button, Container, Row, Col} from "../../../node_modules/react-bootstrap/esm/index";
import { Dropdown, Nav, NavDropdown, NavItem, NavItemProps } from 'react-bootstrap';
import team from './images/working-together.png';

function profile() {
  return (
    <div>
    <h1>Profile</h1>
    
        <Container fluid>
            <Row>
                <Col>
                <Stack style={{backgroundColor:'#000000', color:"#FFFFFF"}}>
                <Image alt = "Team working together" src={"../../../working-together.png"} width={250} id="center"/>
                <h1><b>John Smiths Profile</b></h1>
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
                <Col id="Description">
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
  );
}

export default profile;