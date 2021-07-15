import React from "react";

import Plx from "react-plx";
import styles from "../start.module.css";
import img from "../asset/kapitel2_hochhaus.png";

export const BuildingD: React.FC<{ parallaxData: any }> = ({
  parallaxData,
}) => {
  return (
    <div className={`${styles.hochhaus} absolute w-full`}>
      <Plx parallaxData={parallaxData}
      animateWhenNotInViewport={true}>
        <img src={img} alt="buildingD" className={`absolute `} />
      </Plx>
    </div>
  );
};
