import React from "react";
import Plx from "react-plx";
import styles from "../start.module.css";
import img from "../asset/kapitel2_intro_building-2.png";

export const BuildingB: React.FC<{ parallaxData: any }> = ({
                                                             parallaxData
                                                           }) => {
  return (
    <div className={`${styles.buildingB} absolute -top-96`}>
      {/*<Plx parallaxData={parallaxData}
      animateWhenNotInViewport={true}>*/}
      <img src={img} alt="buildingB" className={`absolute`} />
      {/*</Plx>*/}
    </div>
  );
};
