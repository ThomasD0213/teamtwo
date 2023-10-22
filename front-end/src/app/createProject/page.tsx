'use client';

import { useState } from 'react';
import Button from '../../../node_modules/react-bootstrap/esm/Button';
import Col from '../../../node_modules/react-bootstrap/esm/Col';
import Form from '../../../node_modules/react-bootstrap/esm/Form';
import InputGroup from '../../../node_modules/react-bootstrap/esm/InputGroup';
import Row from '../../../node_modules/react-bootstrap/esm/Row';
import React from 'react';
import { TagsInput } from "../../../node_modules/react-tag-input-component/dist/esm/index";
import { Container } from 'react-bootstrap';

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
    const [_project_name, setName] = useState("")
    const [_owner, setOwner] = useState("")
    const [_details, setDescription] = useState("")
    const [_skills, setSkills] = useState("")
    const [_paid, setPaid] = useState(0)
    const [_timeline, setTimeline] = useState("")
    const [_status, setStatus] = useState("")
    const [_contact, setContact] = useState("")

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
    <main>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col>        
            <Form.Group as={Col} md="4" controlId="validationCustom01" onChange={(e:any) => setName(e.target.value)}>
            <Form.Label>Project Title</Form.Label> {/* text box title */}
            <Form.Control
              required
              type="text"
              placeholder="Enter your project title" // when there is nothing typed in, this is shown in the textbox
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
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
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control type="text" placeholder="Enter the application deadline" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Col} md="3" controlId="validationCustom04" onChange={(e:any) => setTimeline(e.target.value)}>
            <Form.Label>Timeline</Form.Label>
            <Form.Control type="text" placeholder="Enter your timeline" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid time frame.
            </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Col} md="2" controlId="validationCustom04" onChange={(e:any) => setPaid(e.target.value)}>
            <Form.Label>Paid/Unpaid</Form.Label>  {/** set to Paid and change to drop down with options yes or no */}
            <Form.Select>
              <option></option>
              <option>Paid</option>
              <option>Unpaid</option>
            </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group as={Col} md="4" controlId="validationCustom02" onChange={(e:any) => setDescription(e.target.value)}>
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

          </Col>

          <Col>
            <Form.Group>
                <Form.Label>Important Links</Form.Label>
                <Form.Control type="text" placeholder="Place any important links here"/>
              </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
              <Form.Group as={Col} md="3" controlId="validationCustom04" onChange={(e:any) => setContact(e.target.value)}>
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" placeholder="Enter your email or phone number" required />
              <Form.Control.Feedback type="invalid">
                Please provide valid contact information.
              </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Button type="submit">Submit</Button>
            </Col>
        </Row>
      </Container>
     
    </Form>
    </main>
  );
}

export default FormExample;