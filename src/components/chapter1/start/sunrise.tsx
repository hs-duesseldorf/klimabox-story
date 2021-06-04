import React from "react";

import styles from "./start.module.css";
import Plx from "react-plx";

export const Sunrise: React.FC = () => {

  const parallaxData = [
    {
      start: 0,
      end: 40,
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
    <Plx parallaxData={parallaxData}>
      <div id="sunrise" className={`${styles.sunrise} fixed inset-0 w-full h-full pointer-events-none`}
      />
    </Plx>
  );
};
