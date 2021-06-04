import React from "react";

import imageURL from "./buildings.png";
import Plx from "react-plx";

export const Buildings: React.FC = () => {
  const parallaxData = [
    {
      start: 2000,
      end: 2500,
      properties: [
        {
          startValue: 1,
          endValue: 2.2,
          property: "scale"
        },
        {
          startValue: 100,
          endValue: -800,
          property: "translateX"
        },
      ]
    },
    {
      start: 3440,
      end: 3500,
      properties: [
        {
          startValue: 0,
          endValue: 10,
          property: "blur"
        },
      ]
    }
  ];
  return (
    <Plx parallaxData={parallaxData}>
      <div className="pointer-events-none">
        <img src={imageURL} alt="Stadtd" className="w-full select-none" />
      </div>
    </Plx>
  );
};
