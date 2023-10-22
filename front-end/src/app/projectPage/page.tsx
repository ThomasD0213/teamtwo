'use client';
import React from 'react'
import {Badge, Stack, Button} from "../../../node_modules/react-bootstrap/esm/index";
import './project.css';

const projectPage = () => {
  return (
    <div>
        <h1>
            <Button>Back</Button>
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