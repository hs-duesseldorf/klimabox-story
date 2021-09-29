import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel3_auto.png";
import Plx from "react-plx";

export const Car: React.FC<{ parallaxData: []; }> = ({ parallaxData, }) => {
  return (
      <Plx className={`absolute ${styles.car}`} parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img id="car" src={img} alt="car" className={` w-full`}/>
      </Plx>
  );
};
