'use client';

import { useState } from 'react';
import Button from '../../../node_modules/react-bootstrap/esm/Button';
import Col from '../../../node_modules/react-bootstrap/esm/Col';
import Form from '../../../node_modules/react-bootstrap/esm/Form';
import InputGroup from '../../../node_modules/react-bootstrap/esm/InputGroup';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import React from 'react';
import { TagsInput } from "../../../node_modules/react-tag-input-component/dist/esm/index";

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    details: "",
    skills: "",
    paid: 0,
    timeline: "",
    status: "",
    contact: "",
  })

  const [_name, setName] = useState("")
  const [_owner, setOwner] = useState("")
  const [_details, setDescription] = useState("")
  const [_skills, setSkills] = useState("")
  const [_paid, setPaid] = useState("")
  const [_timeline, setTimeline] = useState("")
  const [_status, setStatus] = useState("")
  const [_contact, setContact] = useState("")

  let stuff = {
    name: _name,
    owner: _owner,
    details: _details,
    skills: _skills,
    paid: _paid,
    timeline: _timeline,
    status: _status,
    contact: _status
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const response = await fetch('http://127.0.0.1:5000/addProject', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"},
      body: JSON.stringify(stuff),
    });
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01" onChange={(e:any) => setName(e.target.value)}>
          <Form.Label>Project Title</Form.Label> {/* text box title */}
          <Form.Control
            required
            type="text"
            placeholder="Enter your project title" // when there is nothing typed in, this is shown in the textbox
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02" onChange={(e:any) => setOwner(e.target.value)}>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={8}
            type="text"
            placeholder="Enter project details"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom05" onChange={(e:any) => setSkills(e.target.value)}>
          <Form.Label>Skills</Form.Label>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="skills"
            placeHolder="Add a skill and press 'Enter'"
            onBlur={undefined} 
            separators={undefined} 
            disableBackspaceRemove={undefined} 
            onExisting={undefined} 
            onRemoved={undefined} 
            disabled={undefined} 
            isEditOnRemove={undefined} 
            beforeAddValidate={undefined} 
            onKeyUp={undefined} 
            classNames={undefined}            />          
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom04" onChange={(e:any) => setPaid(e.target.value)}>
          <Form.Label>Budget</Form.Label>  {/** set to Paid and change to drop down with options yes or no */}
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="text" placeholder="Enter your budget" required />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <Form.Control.Feedback type="invalid">
            Please provide a valid number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom04" onChange={(e:any) => setTimeline(e.target.value)}>
          <Form.Label>Timeline</Form.Label>
          <Form.Control type="text" placeholder="Enter your timeline" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid time frame.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom04" onChange={(e:any) => setContact(e.target.value)}>
          <Form.Label>Contact</Form.Label>
          <Form.Control type="text" placeholder="Enter your email or phone number" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid contact information.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormExample;