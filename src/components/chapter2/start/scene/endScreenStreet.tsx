import React from "react";

import Plx from "react-plx";

import streetImg from "../asset/kapitel2_strasse-End.png";
import styles from "../start.module.css";

export const EndscreenStreet: React.FC<{ parallaxData: [] }> = ({
  parallaxData,
}) => {
  return (
    <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
      <img
        src={streetImg}
        alt="streetEnd"
        className={`${styles.streetEnd} absolute`}
      />
    </Plx>
  );
};
