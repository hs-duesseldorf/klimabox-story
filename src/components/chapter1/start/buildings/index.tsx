import React from "react";

import imageURL from "./buildings.png";

export const Buildings: React.FC = () => (
  <div className="pointer-events-none">
    <img src={imageURL} alt="Stadtd" className="w-full select-none" />
  </div>
);
