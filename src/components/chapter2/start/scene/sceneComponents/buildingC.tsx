import React from "react";
import styles from "../../start.module.css";
import img from "../../asset/kapitel1_intro_building-3.png";

export const BuildingC: React.FC = () => {
  return (
    <div className={`${styles.buildingC} absolute -top-96`}>
      <img src={img} alt="buildingC" className={`absolute`} />
    </div>
  );
};
