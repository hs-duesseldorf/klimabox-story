import React from "react";
import Plx from "react-plx";
import humanImg from "../asset/kapitel2_menschen.png";
import styles from "../start.module.css";

export const Human: React.FC<{ parallaxData: [] }> = ({
  parallaxData,
}) => {
  return (
    <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
      <img src={humanImg} alt="human" className={`${styles.human} absolute`} />
    </Plx>
  );
};
