
import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_fahrrad_auswahl.png";
import Plx from "react-plx";

export const Bicycle: React.FC<{ scrollStart: number }> = ({ scrollStart }) => {

  const parallaxData = [
    {
      start: scrollStart,
      end: 4000,
      properties: [
        {
          startValue: 0,
          endValue: 700,
          property: 'translateX',
        }
      ]
    },
  ];

  return (
    <div className={`${styles.bicycle} absolute`}>
      <Plx parallaxData={parallaxData}>
        <img
          src={img}
          alt="Bicycle"
        />
      </Plx>
    </div>

  )
}