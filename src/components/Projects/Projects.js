import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import racereternity from "../../Assets/Projects/RacerEternity.gif";
import shooterglow from "../../Assets/Projects/ShooterGlow.gif";

function Projects()
{
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my <span className="purple">Open Source Projects</span> that I've been working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={racereternity}
              isBlog={false}
              title="Racer Eternity"
              description="Racer Eternity is a 3D car driving simulator with high level Car Controller and implement advanced physics engine & simulation."
              link="https://github.com/BillyFrcs/RacerEternity"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shooterglow}
              isBlog={false}
              title="Shooter Glow"
              description="Simple 2D top down Shooter Game, Shooter Glow with beautiful color and glowing effect to improve Gameplay experience."
              link="https://github.com/BillyFrcs/ShooterGlow"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
