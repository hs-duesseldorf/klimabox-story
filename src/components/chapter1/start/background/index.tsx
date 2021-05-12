import React from "react";

import img from "./background.png";

export const Background: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none bg-gray-800">
    <img
      src={img}
      alt="Nachthimmel"
      className="responsive-inset object-cover pointer-events-none select-none"
    />
  </div>
);
