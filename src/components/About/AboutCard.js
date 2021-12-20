import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard()
{
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi again!😃My name is <span className="purple">Billy Franscois, </span>
            I'm a Computer Science Student and <span className="purple">Game Developer.</span>
            <br />
            I like to playing games🎮 So in this way I can improve my skills
            and move on to the new things. And i decided to learn something
            new about <span className="purple">Game Development.</span> My stronger and passionate is to create cool <span className="purple">Game Mechanics</span> and Scripting with Programming Language and then doing some Debugging and Testing to find bugs and <span className="purple">Optimize Games.</span>
            <br />
            I've already released a few Games that i've been working by myself. You can go to my Games section to see my released Games. And if you want to see my Projects you can go to my Projects section.
            <br />
            <br />
            Apart from learning and making games, some other activities that I like to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Game Design🎨
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
