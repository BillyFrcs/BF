import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import snakeboxes from "../../Assets/Projects/SnakeBoxes.png";
import reduxadventure from "../../Assets/Projects/ReduxAdventure.png";
import flappybird from "../../Assets/Projects/FlappyBird.png";
import snake from "../../Assets/Projects/Snake.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my open source projects that I've been working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card snake-boxes">
            <ProjectCard
              imgPath={snakeboxes}
              isBlog={false}
              title="Snake Boxes"
              description="This is my first 3D Game that i've been developed using Unity Engine for the first time."
              link="https://github.com/BillyFrcs/SnakeBoxes"
            />
          </Col>

          <Col md={4} className="project-card redux">
            <ProjectCard
              imgPath={reduxadventure}
              isBlog={false}
              title="Redux Adventure"
              description="A simple 2D Platformer Game created from scratch. only using C++ Graphics library(SFML),no Game Engine required."
              link="https://github.com/BillyFrcs/ReduxAdventure"
            />
          </Col>

          <Col md={4} className="project-card flappy-bird">
            <ProjectCard
              imgPath={flappybird}
              isBlog={false}
              title="Flappy Bird"
              description="Flappy Bird clone using C++ Graphics library(SFML) created from scratch."
              link="https://github.com/BillyFrcs/FlappyBird"
            />
          </Col>

          <Col md={4} className="project-card snake">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="2D Snake"
              description="2D Snake Game created from scratch. only using SFML C++ Graphics library"
              link="https://github.com/BillyFrcs/2DSnake"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
