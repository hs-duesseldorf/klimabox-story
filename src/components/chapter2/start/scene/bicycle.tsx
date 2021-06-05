
import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_fahrrad_auswahl.png";

export const Bicycle: React.FC = () => (
    <img
      src={img}
      alt="Bicycle"
      className={`${styles.bicycle} absolute`}
    />
)