import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function PageNotFound()
{
     return (
          <Container fluid className="error-section">
               <Container>
                    <h1 className="error-heading">
                         Error <strong className="purple">404</strong>
                    </h1>
                    <p style={{ color: "white" }}>
                         <span className="purple">Aha!</span> You see! You can be wrong! {""}
                         <br />
                         Just go <Link to={"/"}><span className="purple">back</span></Link>
                    </p>
               </Container>

               <Particle />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
          </Container>
     );
}

export default PageNotFound;
