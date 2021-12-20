import React from "react";
import Typewriter from "typewriter-effect";

function Type()
{
  return (
    <Typewriter
      options={{
        strings: [
          "CS Student",
          "Game Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        typeSpeed: 100,
      }}
    />
  );
}

export default Type;
