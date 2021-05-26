import React from "react";

import img from "./asset/kapitel1_intro_stars_background.png";

export const Background: React.FC = () => (
  <div className="fixed inset-0">
    <img
      src={img}
      alt="Nachthimmel"
      className="responsive-inset object-cover"
    />
  </div>
);
