import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import snakeboxes from "../../Assets/Projects/SnakeBoxes.gif";
import weadowrise from "../../Assets/Projects/WeadowRise.gif"

function Projects()
{
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Games </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my <span className="purple">Games</span> that I've been released you could try and Play it for free.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card snake-boxes">
            <ProjectCard
              imgPath={snakeboxes}
              isBlog={false}
              title="Snake Boxes"
              description="Snake Boxes is a simple 3D Snake Game that Player play as a Snake and try to eat all the random food when spawned."
              link="https://billyfrcs.itch.io/snakeboxes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weadowrise}
              isBlog={false}
              title="Weadow Rise"
              description="Weadow Rise is a beautiful 2D Battle Game that you can play as a Reaper Man you can attack all the enemy monsters in the forest."
              link="https://billyfrcs.itch.io/weadowrise"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
