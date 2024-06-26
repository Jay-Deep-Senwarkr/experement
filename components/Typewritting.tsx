import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { text } from "stream/consumers";
const Typewritting = () => {
  const word = [
    { text: "GST" },
    { text: "Suvidha" },
    { text: "kendra" },
    { text: "main" },
    { text: "aapka" },
    { text: "swagat" },
    { text: "hai" },
  ];
  return (
    <div>
      <TypewriterEffect
        words={word}
        loop={true}
      />
    </div>
  );
};

export default Typewritting;
