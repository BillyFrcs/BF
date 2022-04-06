import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GamesCard from "./GamesCard";
import Particle from "../Particle";

import weadowrise from "../../Assets/Games/WeadowRise.gif"
import basketbox from "../../Assets/Games/BasketBox.gif";
import shooterobstacle from "../../Assets/Games/ShooterObstacle.gif";

function Games()
{
     return (
          <Container fluid className="project-section">
               <Particle />
               <Container>
                    <h1 className="project-heading">
                         My Recent <strong className="purple">Games </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                         Here are my <span className="purple">Games</span> that I've been released.
                    </p>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                         <Col md={4} className="project-card">
                              <GamesCard
                                   imgPath={weadowrise}
                                   isBlog={false}
                                   title="Weadow Rise"
                                   description="Weadow Rise is a beautiful 2D Battle Game that you can play as a Reaper Man you can attack all the enemy monsters in the forest."
                                   link="https://billyfrcs.itch.io/weadowrise"
                              />
                         </Col>

                         <Col md={4} className="project-card">
                              <GamesCard
                                   imgPath={basketbox}
                                   isBlog={false}
                                   title="Basket Box"
                                   description="Basket Box is a 3D Basketball game with Low Poly Graphics and you can play against some bot and get the best high score."
                                   link="https://billyfrcs.itch.io/basketbox"
                              />
                         </Col>

                         <Col md={4} className="project-card">
                              <GamesCard
                                   imgPath={shooterobstacle}
                                   isBlog={false}
                                   title="Shooter Obstacle"
                                   description="Simple 3D Runner Shooter Game that you can run on each platform every time and shoot some enemy that trying to push you up."
                                   link="https://billyfrcs.itch.io/shooterobstacle"
                              />
                         </Col>
                    </Row>
               </Container>
          </Container>
     );
}

export default Games;
