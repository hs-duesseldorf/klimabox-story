import React from "react";

import imageURL1 from "./kapitel1_table_background-1.png";
import imageURL2 from "./kapitel1_table_background-2.png";
import imageURL3 from "./kapitel1_table_background-3.png";
import imageURL4 from "./kapitel1_table_background-4.png";
import imageURL5 from "./kapitel1_table_meat.png";
import imageURL6 from "./kapitel1_table_avocado.png";
import imageURL7 from "./kapitel1_table_milk.png";

import Plx from "react-plx";
import styles from "../start.module.css";

export const Fridge: React.FC = () => {
  const parallaxData1 = [
    {
      start: 2800,
      end: 2900,
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

  const parallaxData2 = [
    {
      start: 2900,
      end: 3000,
      easing: "easeIn",
      properties: [
        {
          startValue: 0,
          endValue: 0.5,
          property: "opacity"
        }
      ]
    }
  ];

  const parallaxData3 = [
    {
      start: 3000,
      end: 3050,
      easing: "easeIn",
      properties: [
        {
          startValue: 0,
          endValue: 0.6,
          property: "opacity"
        }
      ]
    }
  ];

  const parallaxData4 = [
    {
      start: 3050,
      end: 3100,
      easing: "easeIn",
      properties: [
        {
          startValue: 0.90,
          endValue: 1,
          property: "opacity"
        }
      ]
    },
    {
      start: 3100,
      end: 3290,
      properties: [
        {
          startValue: 1,
          endValue: 1.8,
          property: "scale"
        },
        {
          startValue: 0,
          endValue: 20,
          unit: "%",
          property: "translateX"
        }
      ]
    }
  ];

  return (
    <>
      <Plx parallaxData={parallaxData1} className="absolute bottom-0 opacity-0" style={{ top: "220vh" }}>
        <div className="pointer-events-none">
          <img src={imageURL1} alt="Fridge" className="w-full select-none" />
        </div>
      </Plx>
      <Plx parallaxData={parallaxData2} className="absolute bottom-0 opacity-0" style={{ top: "250vh" }}>
        <div className="pointer-events-none">
          <img src={imageURL2} alt="Fridge" className="w-full select-none" />
        </div>
      </Plx>
      <Plx parallaxData={parallaxData3} className="absolute bottom-0 opacity-0" style={{ top: "250vh" }}>
        <div className="pointer-events-none">
          <img src={imageURL3} alt="Fridge" className="w-full select-none" />
        </div>
      </Plx>
      <Plx parallaxData={parallaxData4} className="absolute bottom-0 opacity-0" style={{ top: "250vh" }}>
        <div className="pointer-events-none relative">
          <img src={imageURL4} alt="Fridge" className="w-full select-none" />
          <div className="absolute" style={{ top: "74%", left: "19%" }}> <img src={imageURL5} alt="Meat" className="w-48 select-none" /></div>
          <div className="absolute" style={{ top: "71%", left: "30%" }}> <img src={imageURL6} alt="Avocado" className="w-36 select-none" /></div>
          <div className="absolute" style={{ top: "64%", left: "41%" }}> <img src={imageURL7} alt="Milk" className="w-20 select-none" /></div>
          <div className="absolute text-xl xs:text-2xl sm:text-3xl text-black font-bold max-w-sm" style={{ top: "60%", left: "20%" }}> Wähle aus, was du am liebsten isst</div>
        </div>
      </Plx>
      <div className="h-64 bg-black" style={{ top: "270vh" }} />
    </>
  );
};
