import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_auto_auswahl.png";
import Plx from "react-plx";


export const Car: React.FC<{ scrollStart: number }> = ({ scrollStart }) => {
  const parallaxData = [
    {
      start: scrollStart,
      end: 4000,
      properties: [
        {
          startValue: 0,
          endValue: 300,
          property: 'translateX',
        }
      ]
    },
  ];
  return (
    <div className={`${styles.car} absolute `}>
      <Plx parallaxData={parallaxData} >
        <img
          src={img}
          alt="car"
        />
      </Plx>
    </div>
  )
}