"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './dash.css';
import Image from 'react-bootstrap/Image'
import {Badge, Stack, Button, Container, Row, Col, Card, ListGroup} from "../../../node_modules/react-bootstrap/esm/index";
import { Dropdown, Nav, NavDropdown, NavItem, NavItemProps } from 'react-bootstrap';
import MyCard from '../../../Components/myCard'
import Bar from '../../../Components/bar';



var _title:string = "Project nUmero uno"

function dashboard() {
  return (
    <div>
    <Bar />
    <Tabs variant="underline" defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Find A Project">
        <div id='divBottom'>
            <div id='scrollContain'>
                <div>
                  <Card bg='dark' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../../projectphoto.png" alt="project photo" />
                    <Card.Body>
                        <Card.Title>Marketing Project</Card.Title>
                        <Card.Text>
                        University of Denver
                        </Card.Text>
                    </Card.Body>
                    <ListGroup variant="dark" className="list-group-flush">
                        <ListGroup.Item className="fw-bold">Justin Denver</ListGroup.Item>
                        <ListGroup.Item>Business Student</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Save</Card.Link>
                    </Card.Body>
                    </Card> 
                </div>
                enim nihil quia laudantium architecto, velit blanditiis mollitia saepe repellat iste natus ipsam! Dolor repellat illo atque ut ducimus impedit similique porro. Delectus sed nihil voluptas ducimus perspiciatis. Ex cupiditate ipsum minima veritatis
            </div>
        </div>
        Tab 1 content
        </Tab>
        <Tab eventKey={2} title="My Projects">
        <div id='divBottom'>
            <div id='scrollContain'>
                <div>
                    <MyCard />
                    <MyCard />
                </div>
                enim nihil quia laudantium architecto, velit blanditiis mollitia saepe repellat iste natus ipsam! Dolor repellat illo atque ut ducimus impedit similique porro. Delectus sed nihil voluptas ducimus perspiciatis. Ex cupiditate ipsum minima veritatis
            </div>
        </div>
            stuff
        </Tab>
    </Tabs>
    <div >
        <Button variant="dark" id='addButton' href='/createProject'>Add</Button>
    </div>

    </div>
   
  );
}

export default dashboard;