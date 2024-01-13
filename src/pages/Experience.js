import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css';

function Experience() {
  return (
    <Container id="experience" className="my-5">
      <div class="blank-space"></div>
      <Row className='components-header'>
        <h1>Experience</h1>
      </Row>
      <Row className="components-row">
        <Col md={6} className="components-col-left">
          <b>Feb2023 - Jul2023</b><br/>
          <span>SYSCATECH SDN BHD</span>
        </Col>

        <Col md={6} className="components-col-right">
          <b>SOFTWARE ENGINEER INTERN</b><br/>
          <p>
            Developed and Designed web applications using Java and JavaScript. 
            Data-management with MySQL database. Collaborated with team members 
            to solve complex software problems and improve application performance.
          </p>
        </Col>
      </Row>
      <Row className="components-row">
        <Col md={6} className="components-col-left">
          <b>Oct2020 - Dec2020</b><br/>
          <span>KK SUPERMART</span>
        </Col>

        <Col md={6} className="components-col-right">
          <b>SOFTWARE ENGINEER INTERN</b><br/>
          <p>
          Testing the web application with Pascal and SQL. Developed an internal 
          company program by using Microsoft Excel with macro.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;