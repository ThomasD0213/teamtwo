'use client';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {Form, Button, Navbar, Container, Nav, NavDropdown} from "../../../node_modules/react-bootstrap/esm/index";

function createProfile() {
  return (
    <main>
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

    <Form>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Role">
        <Form.Label>Role</Form.Label>
        <Form.Select>
            <option></option>
            <option>Student</option>
            <option>Professor</option>
        </Form.Select>.
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

      </Form.Group>
      <Form.Group className="mb-3" controlId="Study">
        <Form.Label>Major / Field</Form.Label>
        <Form.Control placeholder="Enter major or field" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Bio">
        <Form.Label>Bio</Form.Label>
        <Form.Control placeholder="Enter a little about yourself" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="Contact">
        <Form.Label>Best Form of Contact</Form.Label>
        <Form.Control placeholder="Enter email address or phone number" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </main>
    
  );
}

export default createProfile;