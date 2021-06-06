import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";

export const Train: React.FC = () => {
  const [streetHeight, setStreetHeight] = React.useState(1024);
  React.useEffect(() => {
    const height = document.getElementById("Street")?.getBoundingClientRect().height;
    setStreetHeight(height !== undefined ? height : 1024);
    console.log(height);
  }, [])

  const parallaxData = [
    {
      start: streetHeight,
      end: '200vh',
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
    <Plx parallaxData={ parallaxData }>
      <img
        src={img}
        alt="train"
        className={`${styles.train} absolute`}
      />
    </Plx>
  )
}