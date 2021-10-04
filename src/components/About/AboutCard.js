import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Billy Franscois, </span>
            I'm a Computer Science Student and beginner Game Developer.
            <br />
            <br />
            Apart from making my games, some other activities that I like to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Doing what you like to make you happy🙂"{" "}
          </p>
          <footer className="blockquote-footer">Billy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
