import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import
{
  DiGit, DiJava,
} from "react-icons/di";
import { SiFirebase, SiCsharp, SiGithub, SiGitlab, SiJava, SiCplusplus } from "react-icons/si";

function Techstack()
{
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
    </Row>
  );
}

export default Techstack;
