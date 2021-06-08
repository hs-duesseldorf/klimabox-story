import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_bahn_auswahl.png";
import Plx from "react-plx";
import { ScrollData } from "../interface/Chapter2ScrollData";

export const Train: React.FC<{ scrollData: ScrollData }> = ({ scrollData }) => {

  const [trainWidth, setTrainWidth] = React.useState(0);
  React.useEffect(() => setTrainWidth(document.getElementById("train")?.getBoundingClientRect().width as number), [trainWidth]);

  const parallaxData = [
    {
      start: scrollData.clientHeight,
      end: 4000,
      properties: [
        {
          startValue: 0,
          endValue: ( 1 - (trainWidth/(scrollData.clientWidth)) ) * 4500,
          property: 'translateX',
        }
      ]
    },
  ];

  return (
    <div id="train" className={`${styles.train} absolute`}>
      <Plx parallaxData={parallaxData}>
        <img
          src={img}
          alt="train"
        />
      </Plx>
    </div>
  )
}