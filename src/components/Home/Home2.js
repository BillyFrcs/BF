import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Button } from 'react-bootstrap';
import
{
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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

          {/*
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          */}

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Get In <span className="purple">Touch</span></h1>
            <p className="message-text">
              I’m currently looking for any <i><span className="purple">new opportunities,</span></i> My inbox is <br /> always open. Whether you have a question or just want to say hi,<br /> I’ll try <span className="purple">my best</span> to get back to you!
            </p>
            <Button className="btn-components" href="mailto:billyfranscois19@gmail.com">Say Hi</Button>{' '}

            {/*
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BillyFrcs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/billyfrcs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/billyfrcs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/billy-franscois-b4816221a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            */}

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
