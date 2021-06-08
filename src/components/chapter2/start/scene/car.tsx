import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_auto_auswahl.png";
import Plx from "react-plx";
import { ScrollData } from "../interface/Chapter2ScrollData";


export const Car: React.FC<{ scrollData: ScrollData }> = ({ scrollData }) => {
  const [carWidth, setCarWidth] = React.useState(0);
  React.useEffect(() => setCarWidth(document.getElementById("car")?.getBoundingClientRect().width as number), [carWidth]);
  console.log(scrollData.clientWidth - carWidth)

  console.log(scrollData.clientWidth)
  const parallaxData = [
    {
      start: scrollData.clientHeight,
      end: 4000,
      properties: [
        {
          startValue: 0,
          endValue: ( 1 - (carWidth/(scrollData.clientWidth)) ) * 2000,
          property: 'translateX',
        }
      ]
    },
  ];
  return (
    <div id="car" className={`${styles.car} absolute `}>
      <Plx parallaxData={parallaxData} >
        <img
          src={img}
          alt="car"
        />
      </Plx>
    </div>
  )
}