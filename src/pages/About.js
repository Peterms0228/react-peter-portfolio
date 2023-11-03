import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../styles.css';

function About() {
  return (
    <Container id="about">     
      <Row className='about-row-1'>
        <Col md={6} className="about-col-1">
          <Image className="about-portrait" src={require("../images/portrait.png")} alt="portrait.png" rounded ></Image>
        </Col>
        <Col md={6} className="about-col-1">
          <Card className="about-details">
            <div className="about-details-element">
              <h2>Peter Chua</h2>
              <h6>Software Engineer Portfolio</h6>
            </div>
            <div className="about-details-element">
              <b>Phone:</b>
              <h6>+6016-215 8473</h6>
            </div>
            <div className="about-details-element">
              <b>Email:</b>
              <h6>chuams0228@gmail.com</h6>
            </div>
            <div className="about-details-element">
              <b>Address:</b>
              <h6>Relocating to Singapore...</h6>
            </div>
            <div className="about-details-element">
              <b>Date of Birth:</b>
              <h6>February 28th, 2001</h6>
            </div>
          </Card>
        </Col>
        <Col md={12} aria-rowspan={2} className="about-col-2">
          <a href="https://www.linkedin.com/in/meng-sin-chua-648812281/" target="_blank" rel="noreferrer">
            <Image className="about-icon" src={require("../images/icons/linkedin_light.png")} alt="linkedin_light.png"></Image>
          </a>
          <a href="https://github.com/Peterms0228" target="_blank" rel="noreferrer">
            <Image className="about-icon" src={require("../images/icons/github_light.png")} alt="github_light.png"></Image>
          </a>
          <a href="https://wa.me/+60162158473" target="_blank" rel="noreferrer">
            <Image className="about-icon" src={require("../images/icons/whatsapp_light.png")} alt="whatsapp_light.png"></Image>
          </a>
          <a href="https://discordapp.com/users/1148913807041773608" target="_blank" rel="noreferrer">
            <Image className="about-icon" src={require("../images/icons/discord_light.png")} alt="discord_light.png"></Image>
          </a>
        </Col>
      </Row>
      <Row>
        <div className='about-desc'>
          <h3>About Me</h3>
          <div className='about-desc-content'>
            I recently graduated with a Software Engineering degree, specializing in web 
            full stack and mobile development. Despite lacking work experience, my academic 
            background has sharpened my abilities to design dynamic web applications and 
            user-centric mobile solutions. Fueled by a strong passion for learning, I am an 
            adaptable candidate eager to contribute to creative projects. I am enthusiastic 
            about applying my knowledge in a professional setting, poised to make a significant 
            impact in the realm of software engineering.
          </div>
          
        </div>
      </Row>
    </Container>
  );
};

export default About;
