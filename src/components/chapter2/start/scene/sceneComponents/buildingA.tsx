import React from "react";
import styles from "../../start.module.css";
import img from "../../asset/kapitel1_intro_building-1.png";

export const BuildingA: React.FC<{ buildingStyle: string }> = ({
                                                                 buildingStyle
                                                               }) => {
  return (
    <div className={`${buildingStyle} absolute`}>
      <img src={img} alt="buildingA" className={`absolute`} />
    </div>
  );
};
