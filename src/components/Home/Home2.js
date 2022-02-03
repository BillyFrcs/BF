import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';

function Home2()
{
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description"> {/*Default md={8} if with avatar*/}
            <h1 style={{ fontSize: "2.6em" }}>
              Getting <span className="purple"> Started </span>
            </h1>
            <p className="home-about-body">
              Hi, I'm Billy and i'm a Computer Science Student at University.
              <br />
              My passionate is about <b className="purple">Programming and Development</b>, especially in<i><b className="purple"> Game Development.</b></i>
              <br />
              <br />
              My field of Interest's are to become a Professional <i><b className="purple">Game Programmer and Developer.</b></i>
              <br />
              To know more details about me, please go to my <b className="purple">About</b> page.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Get In <span className="purple">Touch</span></h1>
            <p className="message-text">
              I’m currently looking for any <i><span className="purple">new opportunities,</span></i> My inbox is <br /> always open. Whether you have a question or just want to say hi,<br /> I’ll try <span className="purple">my best</span> to get back to you!
            </p>
            <Button variant="primary" className="btn-components" href="mailto:billykolibonso19@gmail.com">Say Hi</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
