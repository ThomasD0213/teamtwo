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

  const [_project_name, setName] = useState("")
  const [_owner, setOwner] = useState("")
  const [_desc, setDesc] = useState("")
  const [_skils, setSkills] = useState("")
  const [paid, setPaid] = useState(0)



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Project Title</Form.Label> {/* text box title */}
          <Form.Control
            required
            type="text"
            placeholder="Enter your project title" // when there is nothing typed in, this is shown in the textbox
            defaultValue="Project X" // hard coded default value.
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={8}
            type="text"
            placeholder="Enter project details"
            defaultValue="Our latest project, Project X, is a revolutionary 
            software application designed to transform the way businesses manage 
            their data. It offers a sleek and intuitive user interface, powerful 
            data analysis tools, and robust security features. With Project X, 
            businesses can streamline their operations, make data-driven decisions, 
            and enhance productivity"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Skills</Form.Label>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="skills"
            placeHolder="Add a skill and press 'Enter'"  //this is probably not the 
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
          {/* Instead of doing a textbox, I'd suggest a tag input but 
          from what I see there isn't a react bootstrap component 
          that we could use, so this could take some time to implement. */}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label>Budget</Form.Label>
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
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Timeline</Form.Label>
          <Form.Control type="text" placeholder="Enter your timeline" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid time frame.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Col xs={6}>
      <Form.Label htmlFor="basic-url">Public Links</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormExample;