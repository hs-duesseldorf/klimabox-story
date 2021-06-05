import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_auto_auswahl.png";

export const Car: React.FC = () => (
    <img
      src={img}
      alt="car"
      className={`${styles.car} absolute`}
    />
)