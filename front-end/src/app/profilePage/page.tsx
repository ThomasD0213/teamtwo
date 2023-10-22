"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './profile.css';
import Image from 'react-bootstrap/Image'
import {Badge, Stack, Button, Container, Row, Col, Card} from "../../../node_modules/react-bootstrap/esm/index";
import { Dropdown, Nav, NavDropdown, NavItem, NavItemProps } from 'react-bootstrap';
import team from './images/working-together.png';
import Back from '../../../Components/back';

function profile() {
  return (
    <div>
    <div>
        <div id="header">
            <Back/>
        </div>
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
                    <Stack style={{border: '4px solid #CF4307', borderRadius:'10px'}}>
                        <p><b>Details:</b></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </Stack>
                    </div>
                </Col>
            </Row>

        </Container>

    </div>
    {/* <Row>
        <Col lg={4}>
          {productList && productList.map(product =>{
            const {id, title, price, category,description,image} = product;
            return(
            <>
              <Card key={id} className="productlist">
                <Card.Img variant="top" src={"#"} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>{category}</Card.Text>
                  <Card.Text>
                    {price}
                  </Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </>
            )
          })}
        </Col>
      </Row> */}

    <Row className="listed-profs">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">By: Sandy Squarepants</Card.Subtitle>
            <Card.Text>
            An end-to-end networking process consiting of digital art and other stuff that makes sense.
            </Card.Text>
            <Card.Link href="#">Card </Card.Link>
            </Card.Body>
        </Card> 
        <Col classname="listed-profs">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">By: Sandy Squarepants</Card.Subtitle>
            <Card.Text>
            An end-to-end networking process consiting of digital art and other stuff that makes sense.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
        </Card> 
        </Col>
    </Row>
    </div>
  );
}

export default profile;