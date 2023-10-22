'use client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function createProfile() {
  return (
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
  );
}

export default createProfile;