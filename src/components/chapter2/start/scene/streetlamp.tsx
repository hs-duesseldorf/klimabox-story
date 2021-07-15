import React from "react";

import Plx from "react-plx";
import streetLampImg from "../asset/kapitel2_strassenlaterne.png";
import styles from "../start.module.css";

export const StreetLamp: React.FC<{ parallaxData: [] }> = ({
  parallaxData,
}) => {
  return (
    <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
      <img
        src={streetLampImg}
        alt="streetLamp"
        className={`${styles.streetlamp} absolute`}
      />
    </Plx>
  );
};
