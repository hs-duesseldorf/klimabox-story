import React from "react";

import imageURL from "./buildings.png";
import Plx from "react-plx";

export const Buildings: React.FC = () => {
  const parallaxData = [
    {
      start: 1800,
      end: 2300,
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
        }
      ]
    },
    {
      start: 2640,
      end: 2900,
      properties: [
        {
          startValue: 0,
          endValue: 10,
          property: "blur"
        }
      ]
    }
  ];
  return (
    <Plx parallaxData={parallaxData}>
      <div className="pointer-events-none overflow-x-hidden">
        <img src={imageURL} alt="Stadt" className="w-full select-none" />
      </div>
    </Plx>
  );
};
