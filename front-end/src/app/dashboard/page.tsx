"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function dashboard() {
  return (
    <h1>Dashboard</h1>
    <Tabs
      defaultActiveKey="myProjects"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="myProjects" title="My Projects">
        Tab content for my projects
      </Tab>
      <Tab eventKey="findProject" title="Find A Project">
        Tab content for finding projects
      </Tab>
    </Tabs>
  );
}

export default dashboard;