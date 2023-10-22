'use client';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {FormEvent, useState} from 'react'
import {Form, Button, Navbar, Container, Nav, NavDropdown} from "../../../node_modules/react-bootstrap/esm/index";
import Bar from '../../../Components/bar'

function createProfile() {

    const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      role: "",
      major: "",
      bio: "",
      email: "",
      phone: ""
    })

    const [_first_name, setFirst] = useState("")
    const [_last_name, setLast] = useState("")
    const [_role, setRole] = useState("")
    const [_major, setMajor] = useState("")
    const [_bio, setBio] = useState("")
    const [_email, setEmail] = useState("")
    const [_phone, setPhone] = useState("")
  
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    let stuff = {
      first_name: _first_name,
      last_name: _last_name,
      role: _role,
      major: _major,
      bio: _bio,
      email: _email,
      phone: _phone
    }
    const response = await fetch('http://127.0.0.1:5000/addUser', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"},
      body: JSON.stringify(stuff),
    })
  }
  return (
    <main>
      <Bar />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="First_Name" onChange={(e:any) => setFirst(e.target.value)}>
          <Form.Label>First Name</Form.Label>
          <Form.Control required placeholder="Enter first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Last_Name" onChange={(e:any) => setLast(e.target.value)}> 
          <Form.Label>Last Name</Form.Label>
          <Form.Control required placeholder="Enter last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Role">
          <Form.Label>Role</Form.Label>
          <Form.Select onChange={(e:any) => setRole(e.target.value)}>
              <option>Student</option>
              <option>Professor</option>
          </Form.Select>
          <Form.Control type='radio' className="hidden" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Study" onChange={(e:any) => setMajor(e.target.value)}>
          <Form.Label>Major / Field</Form.Label>
          <Form.Control required placeholder="Enter major or field" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Bio" onChange={(e:any) => setBio(e.target.value)}>
          <Form.Label>Bio</Form.Label>
          <Form.Control required placeholder="Enter a little about yourself" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="Email" onChange={(e:any) => setEmail(e.target.value)}>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Enter email address" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="Phone" onChange={(e:any) => setPhone(e.target.value)}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="Enter phone number" />
          <Form.Text className="text-muted">
            We'll never share your number with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
    
  );
}

export default createProfile;