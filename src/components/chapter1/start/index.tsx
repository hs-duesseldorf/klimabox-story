import React from "react";

import bgImg from "./background.png";

export const Start: React.FC = () => (
  <div className="relative h-screen bg-gray-800 text-white">
    <img
      src={bgImg}
      alt="Nachthimmel"
      className="responsive-inset object-cover pointer-events-none select-none"
    />
    <div className="responsive-inset">
      <div className="center-box mt-56">
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold uppercase">
          Vom Esstisch
          <br />
          in die Arktis
        </h1>
      </div>
    </div>
  </div>
);
