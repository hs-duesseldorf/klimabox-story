import React from "react";

import styles from "./start.module.css";
import Plx from "react-plx";

export const Heading: React.FC = () => {

  const parallaxData = [
    {
      start: 0,
      end: 400,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ];

  return (
    <Plx parallaxData = {parallaxData}>
      <div className="center-box pt-40 2xl:pt-56">
        <h1 className={`${styles.heading} font-bold uppercase`}>
          Vom Esstisch
          <br />
          in die Arktis
        </h1>
      </div>
    </Plx>
  );
};
