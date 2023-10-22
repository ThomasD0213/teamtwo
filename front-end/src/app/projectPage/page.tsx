'use client';
import React from 'react'
import {Badge, Button, Stack, Navbar, Container, Nav, NavDropdown} from "../../../node_modules/react-bootstrap/esm/index";

const projectPage = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Brand href="#home">Our Beautiful App Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Little Bell</Nav.Link>
            <Nav.Link href="#link">My Avatar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <h1>
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
        </Stack>
    </div>
  )
}

export default projectPage