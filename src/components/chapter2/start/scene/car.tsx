import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_auto_auswahl.png";
import Plx from "react-plx";

export const Car: React.FC<{scrollStart: number}> = ({scrollStart}) => {
  const parallaxData = [
    {
      start: 1000,
      end: 3000,
      properties: [
        {
          startValue: 100,
          endValue: 200,
          property: "translateX"
        },
      ]
    },
  ];
  return (
    <Plx parallaxData={parallaxData}>
      <img
        src={img}
        alt="car"
        className={`${styles.car} absolute`}
      />
    </Plx>
  )
}