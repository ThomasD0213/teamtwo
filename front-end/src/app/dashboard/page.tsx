"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './dash.css';
import Image from 'react-bootstrap/Image'
import {Badge, Stack, Button, Container, Row, Col} from "../../../node_modules/react-bootstrap/esm/index";
import { Dropdown, Nav, NavDropdown, NavItem, NavItemProps } from 'react-bootstrap';

function dashboard() {
  return (
    <div>

    <h1>Dashboard</h1>
    <div>
        <Image className="justify-right"
            src={"../../../profileoutline.png"}
            rounded
            width={50}
            height={50}
            alt="profile outline" 
        />
    </div>
    <Tabs variant="underline" defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Find A Project">
        Tab 1 content
        </Tab>
        <Tab eventKey={2} title="My Projects">
            stuff
        </Tab>
    </Tabs>
    <div >
        <Button variant="dark" id='addButton' href='/createProject'>Add</Button>
    </div>
    <div id='divBottom'>
        <div id='scrollContain'>
            enim nihil quia laudantium architecto, velit blanditiis mollitia saepe repellat iste natus ipsam! Dolor repellat illo atque ut ducimus impedit similique porro. Delectus sed nihil voluptas ducimus perspiciatis. Ex cupiditate ipsum minima veritatis
        </div>
    </div>

    </div>
  );
}

export default dashboard;