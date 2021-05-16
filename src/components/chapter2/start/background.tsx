import React from "react";

import img from "./asset/kapitel1_intro_stars_background.png";

export const Background: React.FC = () => (
    <img
      src={img}
      alt="Sternenhimmel"
      className="fixed w-full top-0 z-0"
    />
)