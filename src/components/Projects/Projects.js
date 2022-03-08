import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import racereternity from "../../Assets/Projects/RacerEternity.gif";
import coronarunner from "../../Assets/Projects/CoronaRunner.gif";
import fireworks from "../../Assets/Projects/Fireworks.gif";
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
          <Col md={4} className="project-card snake-boxes">
            <ProjectCard
              imgPath={racereternity}
              isBlog={false}
              title="Racer Eternity"
              description="Racer Eternity is a simple 3D car driving simulator with advanced physics engine & simulation."
              link="https://github.com/BillyFrcs/RacerEternity"
            />
          </Col>
          <Col md={4} className="project-card snake-boxes">
            <ProjectCard
              imgPath={coronarunner}
              isBlog={false}
              title="Corona Runner"
              description="Corona Runner is a 2D endless runner Game that theme about Corona Virus created using Unity Engine."
              link="https://github.com/BillyFrcs/CoronaRunner"
            />
          </Col>
          <Col md={4} className="project-card snake-boxes">
            <ProjectCard
              imgPath={fireworks}
              isBlog={false}
              title="Fireworks VFX"
              description="Fireworks VFX created using Visual Effect Graph from Unity & High Definition Render Pipeline(HDRP)."
              link="https://github.com/BillyFrcs/FireworksVFX"
            />
          </Col>
          <Col md={4} className="project-card snake-boxes">
            <ProjectCard
              imgPath={shooterglow}
              isBlog={false}
              title="Shooter Glow"
              description="Simple 2D top down Shooter Game, Shooter Glow with beautiful color and glowing effect (Post Processing)."
              link="https://github.com/BillyFrcs/ShooterGlow"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
