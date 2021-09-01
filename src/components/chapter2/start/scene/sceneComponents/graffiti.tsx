import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_graffiti.png";
import werbetafelImg from "../../asset/kapitel2_werbetafel_vertikal.png";
import { Massenvisualisierung } from "./massenvisualisierung";
import { Chapter2Content } from "../../interface/interface";
import { AdContent } from "./adContent";

export const Graffiti: React.FC<{
  chapter2Content: Chapter2Content;
  parallaxDataMassenvisualsierung: [];
  parallaxDataMassenvisualsierungBackground: [];
}> = ({
        chapter2Content,
        parallaxDataMassenvisualsierung,
        parallaxDataMassenvisualsierungBackground
      }) => {
  return (
    <div className="absolute w-full">
      <img
        src={img}
        alt="graffiti"
        className={`${styles.graffiti} absolute`}
      ></img>

      <img src={werbetafelImg} alt="werbetafel" className={`absolute ${styles.werbetafel} `}></img>

      <AdContent chapter2Content={chapter2Content}></AdContent>
      <Massenvisualisierung
        parallaxData={parallaxDataMassenvisualsierung}
        massenvisualisierungBackground={
          parallaxDataMassenvisualsierungBackground
        }
      />
    </div>
  );
};
