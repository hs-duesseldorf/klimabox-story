import React from "react";

import imageURL from "./kapitel1_table_background-1.png";
import Plx from "react-plx";

export const Fridge: React.FC = () => {
  const parallaxData = [
    {
      start: 2800,
      end: 3100,
      easing: "easeIn",
      properties: [
        {
          startValue: 100,
          endValue: 0,
          unit: "%",
          property: "translateX"
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity"
        }
      ]
    }
  ];

  return (
    <Plx parallaxData={parallaxData} className="absolute bottom-0 opacity-0" style={{ top: "240vh" }}>
      <div className="pointer-events-none">
        <img src={imageURL} alt="Fridge" className="w-full select-none" />
      </div>
    </Plx>

  );
};
