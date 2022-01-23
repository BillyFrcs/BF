import React from "react";
import { Col, Row } from "react-bootstrap";
import
{
  SiVisualstudiocode,
  SiVisualstudio,
  SiUnity,
  SiUnrealengine,
  SiGimp,
  SiBlender,
  SiRider,
} from "react-icons/si";

function Toolstack()
{
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRider />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
    </Row>
  );
}

export default Toolstack;
