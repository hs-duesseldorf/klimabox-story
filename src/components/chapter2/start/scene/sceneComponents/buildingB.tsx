import React from "react";
import styles from "../../start.module.css";
import img from "../../asset/kapitel2_intro_building-2.png";

export const BuildingB: React.FC = () => {
  return (
    <div className={`${styles.buildingB} absolute -top-96`}>
      <img src={img} alt="buildingB" className={`absolute`} />
    </div>
  );
};
