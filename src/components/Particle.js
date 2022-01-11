import React from "react";
import Particles from "react-particles-js";

function Particle()
{
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 2000,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "top",
            speed: 0.5,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
