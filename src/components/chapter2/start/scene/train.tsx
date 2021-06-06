import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";

export const Train: React.FC<{ scrollStart: number }> = ({ scrollStart }) => {

  const parallaxData = [
    {
      start: scrollStart,
      end: 4000,
      properties: [
        {
          startValue: 0,
          endValue: 500,
          property: 'translateX',
        }
      ]
    },
  ];

  return (
    <div className={`${styles.train} absolute`}>
      <Plx parallaxData={parallaxData}>
        <img
          src={img}
          alt="train"
        />
      </Plx>
    </div>
  )
}