import React from "react";

import imageURL from "./kapitel1_table_background-1.png";
import Plx from "react-plx";

export const Fridge: React.FC = () => {
  const parallaxData = [
    {
      start: 3300,
      end: 3350,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity"
        }

      ]
    }
  ];

  return (
    <Plx parallaxData={parallaxData} className="absolute opacity-0 bottom-0" style={{ top: "220vh" }}>
      <div className="pointer-events-none">
        <img src={imageURL} alt="Fridge" className="w-full select-none" />
      </div>
    </Plx>

  );
};
