'use client';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {Form, Button, Navbar, Container, Nav, NavDropdown, Row, Col} from "../../../node_modules/react-bootstrap/esm/index";
import Bar from '../../../Components/bar'

function createProfile() {
  return (
    <main>
      <Bar />
      <h1>Create Profile</h1>
      <Form>
        <Container>
          <Row>
            <Col>        
              <Form.Group className="mb-3" controlId="First_Name">
              <Form.Label>First Name</Form.Label>
              <Form.Control required placeholder="Enter first name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="Last_Name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required placeholder="Enter last name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="Role">
              <Form.Label>Role</Form.Label>
              <Form.Select>
              <option></option>
              <option>Student</option>
              <option>Professor</option>
              </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Enter email address" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="Study">
              <Form.Label>Major / Field</Form.Label>
              <Form.Control placeholder="Enter major or field" />
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <Form.Group className="mb-3" controlId="Bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter a little about yourself" />       
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
    
  );
}

export default createProfile;