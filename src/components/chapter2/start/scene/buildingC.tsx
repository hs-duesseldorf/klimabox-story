import React from "react";
import Plx from "react-plx";
import styles from "../start.module.css";
import img from "../asset/kapitel1_intro_building-3.png";

export const BuildingC: React.FC<{ parallaxData: any }> = ({
  parallaxData,
}) => {
  return (
    <div className={`${styles.buildingC} absolute -top-96`}>
      <Plx parallaxData={parallaxData} animateWhenNotInViewport={true}>
        <img src={img} alt="buildingC" className={`absolute`} />
      </Plx>
    </div>
  );
};
