import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Getting <span className="purple"> Started </span>
            </h1>
            <p className="home-about-body">
              I am a Computer Science Student at the University.
              <br />At the moment, i'm using 
              <i>
                <b className="purple"> C++ and C# </b>
              </i>
              as my main programming language because i'm using <b className="purple"> Unity Game Engine</b> to developed my games.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Game Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Game Design.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for learning and developing products
              with <b className="purple">Unreal Engine </b>even though i'm still learning the engine😁.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Get In Touch</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me 😉
            </p>
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
