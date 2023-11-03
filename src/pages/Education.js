import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css';

function Education() {
  return (
    <Container id="education" className="my-5">
      <Row className='components-header'>
        <h1>Education</h1>
      </Row>
      <Row className="components-row">
        <Col md={6} className="components-col-left">
          <b>2021 - 2023</b><br/>
          <span>Bachelor's Degree</span>
        </Col>

        <Col md={6} className="components-col-right">
          <b>Tunku Abdul Rahman University of Management & Technology</b><br/>
          <span>Degree of Software Engineering</span><br/>
          <span>CGPA 3.5766</span>
        </Col>
      </Row>
      <Row className="components-row">
        <Col md={6} className="components-col-left">
          <b>2019 - 2021</b><br/>
          <span>Diploma</span>
        </Col>

        <Col md={6} className="components-col-right">
          <b>Tunku Abdul Rahman University of Management & Technology</b><br/>
          <span>Diploma in Computer Science & Mathematics</span><br/>
          <span>CGPA 3.5500</span>
        </Col>
      </Row>
      <Row className="components-row">
        <Col md={6} className="components-col-left">
          <b>2013-2018</b>
        </Col>

        <Col md={6} className="components-col-right">
          <b>HIGH SCHOOL</b>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
