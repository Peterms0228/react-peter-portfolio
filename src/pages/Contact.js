import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles.css';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { useState } from 'react';
import { sendEmail } from '../components/EmailManager';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDiscord } from "react-icons/fa";
function Contact() {

  const [displayText, setDisplayText] = useState('');

  const emailSentResponse = () => {
    setDisplayText('Thanks for submitting!');
    setTimeout(() => {
      setDisplayText('');
    }, 5000);
  };

  return (
    <Container id="contact" className="my-5">
      <div class="blank-space"></div>
      <Row className='components-header'>
        <h1>Contact Me</h1>
      </Row>
      <Row>
        <Col md={6}>
          <Form className='form-align-left' onSubmit={sendEmail}>
            <Row>
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name='first_name'/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name='last_name'/>
                </FormGroup>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email address 
                <span style={{color:'red'}}>*</span>
              </Form.Label>
              <Form.Control type="email" name='email_address' required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type your message here...</Form.Label>
              <Form.Control as="textarea" name='email_message' rows={6} />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" as="input" type="submit" onClick={emailSentResponse} value="Submit"/>{''}
            </div>
            <div>{displayText}</div>
          </Form>
        </Col>
        <Col md={6}>
          <div className='form-align-left' style={{paddingLeft:'15%', paddingRight:'15%'}}>
            <h2>Peter Chua</h2>
            <span>SOFTWARE ENIGNEER</span>
            <br/>
            <br/><b>Phone:</b>
            <br/><a href="https://wa.me/+60162158473" target="_blank" rel="noreferrer">+6016-2158473</a>
            <br/>
            <br/><b>Email:</b>
            <br/><a href="mailto:chuams0228@gmail.com" target="_blank" rel="noreferrer">chuams0228@gmail.com</a>
            <br/><br/>
            <hr/>
            <a href="https://www.linkedin.com/in/meng-sin-chua-648812281/" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="https://github.com/Peterms0228" target="_blank" rel="noreferrer">
              <FaGithub className="icon github"/>
            </a>
            <a href="https://wa.me/+60162158473" target="_blank" rel="noreferrer">
              <FaWhatsapp className="icon whatsapp"/>
            </a>
            <a href="https://discordapp.com/users/1148913807041773608" target="_blank" rel="noreferrer">
              <FaDiscord className="icon discord"/>
            </a>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
