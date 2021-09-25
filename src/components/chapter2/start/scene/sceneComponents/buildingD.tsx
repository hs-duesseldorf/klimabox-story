import React from "react";

import styles from "../../start.module.css";
import img from "../../asset/kapitel2_hochhaus.png";

export const BuildingD: React.FC = () => {
  return (
    <div className={`${styles.hochhaus} absolute`}>
      <img src={img} alt="buildingD" className={`absolute `} />
    </div>
  );
};
