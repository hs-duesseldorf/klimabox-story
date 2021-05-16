import React from "react";

import styles from "./start.module.css";
import img from "./asset/kapitel1_intro_building-2.png";

export const BuildingB: React.FC = () => (
    <img
      src={img}
      alt="BuildingB"
      className={`${styles.buildingB} absolute`}
    />
)