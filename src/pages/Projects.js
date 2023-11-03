import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import '../styles.css';

function Projects() {
  return (
    <Container id="projects" className="my-5">
      <Row className='components-header'>
        <h1>Projects</h1>
      </Row>
      <Row>
        <h4>Project 1: Canteen Management & Food Ordering Mobile App</h4>
        <span>Goal 1: Allows consumer to order food online without queue</span><br />
        <span>Goal 2: Allows vendor to sell & promote food online</span>
        <Col md={1}>
        </Col>
        <Col md={7}>
          <Card className='project-card-left' border="dark">
            <Row>
              <Col md={3}>
                <span>Screenshots</span>
              </Col>
              <Col md={9}>
                <Image className="projects-img" src={require("../images/projects_screenshot/project1_1.png")} alt="project1_1.png" rounded></Image>
                <Image className="projects-img" src={require("../images/projects_screenshot/project1_2.png")} alt="project1_2.png" rounded></Image>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={2}>
          <Card className='project-card-right' border="dark">
            <Image className="projects-tool" src={require("../images/tools/android_studio.png")} alt="android_studio.png" rounded></Image>
            <Image className="projects-tool" src={require("../images/tools/firebase.png")} alt="android_studio.png" rounded></Image>
            <Image className="projects-tool" src={require("../images/tools/github.png")} alt="android_studio.png" rounded></Image>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
