import React from 'react'
import { useState } from 'react'
import { Container, Row, Navbar, NavbarBrand, Col, Nav, Image, Button} from '../node_modules/react-bootstrap/esm/index'

const Bar = () => {
    return (
        <main>
            <Navbar expand='xxxxxl' className='background-color'>
            <Container className='justify-content-between'>
                    <Row>
                        <Col>
                        <Navbar.Toggle className='d-block' aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                            <Nav.Link href='/'>Home</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        </Col>
                        <Col>
                        <Navbar.Brand className="primary-text" href='/'>Dashboard</Navbar.Brand>
                        </Col>

                    </Row>
                        <Button style={{backgroundColor:'transparent', borderColor:'transparent'}} href='/profilePage'>
                            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/220px-Mona_Lisa-restored.jpg' height={50} width={50} roundedCircle/>
                        </Button>
            </Container> 
            </Navbar>
        </main>
    )
}

export default Bar;