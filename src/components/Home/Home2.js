import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Getting <span className="purple"> Started </span>
            </h1>
            <p className="home-about-body">
              Hi, I'm Billy and i'm a Computer Science Student at University.
              <br />My passionate about <b className="purple">Programming and Development</b>, especially in <b className="purple">Game Development.</b>
              <i>
                <b className="purple"> </b>
              </i>
              <b className="purple"> </b>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <b className="purple">Game Technologies and Products </b> and
              also in areas related to{" "}
              <b className="purple">Game Design. </b>
              <br />
              <br />
              To read more details about me, please go to my <b className="purple">About</b> page🙂.
              <br />
              <br />
              {/*
              Whenever possible, I also apply my passion for developing my products
              with <b className="purple">Unreal Engine C++ & Blueprint </b>in the future.
              */}
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
