import React from "react";

import img from "./asset/kapitel1_intro_stars_background.png";

export const Background: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none bg-gray-800">
    <img
      src={img}
      alt="Nachthimmel"
      className="responsive-inset object-cover pointer-events-none select-none"
    />
  </div>
);
