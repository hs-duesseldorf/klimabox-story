
import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_fahrrad_auswahl.png";
import Plx from "react-plx";
import { ScrollData } from "../interface/Chapter2ScrollData";

export const Bicycle: React.FC<{ scrollData: ScrollData }> = ({ scrollData }) => {

  const [bicycle, setBicycleWidth] = React.useState(0);
  React.useEffect(() => setBicycleWidth(document.getElementById("bicycle")?.getBoundingClientRect().width as number), [bicycle]);

  const parallaxData = [
    {
      start: scrollData.clientHeight,
      end: 4000,
      properties: [
        {
          startValue: 0,
          endValue: ( 1 - (bicycle/(scrollData.clientWidth)) ) * 2000,
          property: 'translateX',
        }
      ]
    },
  ];

  return (
    <div id="bicycle" className={`${styles.bicycle} absolute`}>
      <Plx parallaxData={parallaxData}>
        <img
          src={img}
          alt="Bicycle"
        />
      </Plx>
    </div>

  )
}