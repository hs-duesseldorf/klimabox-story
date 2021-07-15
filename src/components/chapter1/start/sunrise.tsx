import React from "react";

import styles from "./start.module.css";
import Plx from "react-plx";

export const Sunrise: React.FC = () => {

  const parallaxData = [
    {
      start: ".morning",
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
    <Plx parallaxData={parallaxData} className="opacity-0">
      <div id="sunrise" className={`${styles.sunrise} fixed inset-0 w-full h-full pointer-events-none`}
      />
    </Plx>
  );
};
