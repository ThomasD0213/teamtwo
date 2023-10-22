"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './dash.css';
import Image from 'react-bootstrap/Image'
import {Badge, Stack, Button, Container, Row, Col} from "../../../node_modules/react-bootstrap/esm/index";
import { Dropdown, Nav, NavDropdown, NavItem, NavItemProps } from 'react-bootstrap';
import MyCard from '../../../Components/myCard'
import Bar from '../../../Components/bar';

function dashboard() {
  return (
    <div>
    <Bar />
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
            <div>
                <MyCard />
            </div>
            enim nihil quia laudantium architecto, velit blanditiis mollitia saepe repellat iste natus ipsam! Dolor repellat illo atque ut ducimus impedit similique porro. Delectus sed nihil voluptas ducimus perspiciatis. Ex cupiditate ipsum minima veritatis
        </div>
    </div>

    </div>
   
  );
}

export default dashboard;