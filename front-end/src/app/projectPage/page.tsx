'use client';
import React from 'react'
import {Badge, Stack, Button, Container, Row, Col, Image} from "../../../node_modules/react-bootstrap/esm/index";
import './project.css';
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
                <Stack style={{backgroundColor:'#000000', color:"#FFFFFF", borderRadius:'10px'}}>
                <Image alt = "Team working together" src={"https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdDhiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--03805e13c230b496119dc6ee2804db911da09945/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb74e2531ca3e0ee463ad8c55d04110fcf863b74/Copy%20of%20Hackathon.png"} width={250} id="center"/>
                <h1><b>DU/MSU Hackathon</b></h1>
                </Stack>
                </Col>
                <Col id = "Contact">
                    <Stack style={{backgroundColor:'#FFCB2D', color:"#000000", borderRadius:'10px', paddingTop: 5 + 'em', paddingBottom: 5 + 'em'}}>
                    <h1><b>Contact Me:</b></h1>
                    <p>Avery.Gudstewdent@university.edu</p>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col id = "BottomRectangle">
                    <Stack style={{backgroundColor:'#000000', color:"#FFFAEB", borderRadius:'10px', paddingTop: 7 + 'em' }}>
                        <p><b>OPEN</b>/CLOSED</p>
                        <p style={{color:'#CF4307'}}><b>Owner</b></p>
                        <p>Avery Gudstewdent</p>
                        <p style={{color:'#CF4307'}}><b>Skills Needed</b></p>
                        <p>Designers, Front-end, back-end</p>
                        <p style={{color:'#CF4307'}}><b>Application Due Date</b></p>
                        <p>Finish by Nov 23 2023</p>
                    </Stack>
                </Col>
                <Col id = "Description">
                    <div>
                    <Stack style={{border: '4px solid #CF4307', borderRadius:'10px', paddingTop: 5 + 'em', paddingBottom: 5 + 'em'}}>
                        <p><b>Project Overview:</b></p>
                        <p>DU/MSU Denver || Ritchie Engineering Center</p>
                        <Container style={{padding:'10px'}}>
                            <Row>
                                <Col><p><b>Project Timeline</b></p></Col>
                                <Col><p><b>Paid</b></p></Col>
                            </Row>
                            <Row>
                                <Col><p>2 Days</p></Col>
                                <Col><p>No</p></Col>
                            </Row>
                        </Container>

                        <p>I'm looking to build a team for this weekend's Hackathon hosted by DU and MSU Denver</p>
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