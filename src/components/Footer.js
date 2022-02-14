import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import
{
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer()
{
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Developed by Billy</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} All Rights Reserved</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/BillyFrcs"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-github color-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/billyfrcs/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-instagram color-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/billyfrcs/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-linkedin color-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:BillyFranscois19@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-mail color-icons"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
