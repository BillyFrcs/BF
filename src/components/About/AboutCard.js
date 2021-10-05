import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi again😃My name is <span className="purple">Billy Franscois, </span>
            I'm a Computer Science Student and beginner Game Developer.
            <br />
            I like to playing games🎮 So in this way I can improve my skills
            and move on to the new things. And i decided to learn something
            new about <span className = "purple">Game Development</span>.
            <br />
            Maybe some people says Game Development is hard, but i will never give up to learning more and more again until become professional
            <span className="purple"> Game Developer.</span>
            <br />
            <br />
            Apart from learning and making games, some other activities that I like to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games🎮.
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Game Design 3D modeling.
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
