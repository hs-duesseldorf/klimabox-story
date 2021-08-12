import React from "react";
import Plx from "react-plx";
import styles from "../start.module.css";
import img from "../asset/kapitel1_intro_building-1.png";

export const BuildingA: React.FC<{ parallaxData: any }> = ({
  parallaxData,
}) => {
  return (
    <div className={`${styles.buildingA} absolute`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={img} alt="buildingA" className={`absolute`} />
      </Plx>
    </div>
  );
};
