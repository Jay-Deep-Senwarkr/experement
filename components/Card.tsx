import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { items } from "@/constants/data";

const Card = () => {
  return (
    <div id="services">
      <h2 className="text-center text-3xl font-bold">Services</h2>
      <HoverEffect items={items} className="whitespace-pre-line"/>
    </div>
  );
};

export default Card;
