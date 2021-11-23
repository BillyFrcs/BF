import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import runnerman from "../../Assets/Projects/RunnerMan.gif";
import coronarunner from "../../Assets/Projects/coronaRunner.gif";

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
              imgPath={runnerman}
              isBlog={false}
              title="Runner Man"
              description="Simple 3D Endless Runner game created using Unreal Engine 4 with Full C++ implementation."
              link="https://github.com/BillyFrcs/RunnerMan"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
