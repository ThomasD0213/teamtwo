import React from 'react'
import {Form, FormGroup, FormLabel, FormControl, FormText} from "../../../node_modules/react-bootstrap/esm/index";
import Button from '../../../node_modules/react-bootstrap/esm/Button';

const projectPage = () => {
  return (
    <div>
        <h1>
            Name of Project
        </h1>

        <Form>
            <FormGroup>
                <FormLabel></FormLabel>
                <FormControl></FormControl>
                <FormText></FormText>
            </FormGroup>
        </Form>

    </div>
  )
}

export default projectPage