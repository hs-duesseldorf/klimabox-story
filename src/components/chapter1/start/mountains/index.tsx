import React from "react";

import img from "./mountains.png";

export const Mountains: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none w-full">
    <img
      src={img}
      alt="Gebirge"
      className="responsive-inset object-cover pointer-events-none select-none max-w-full"
    />
  </div>
);
