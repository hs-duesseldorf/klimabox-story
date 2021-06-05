import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_bahn_auswahl.png";

export const Train: React.FC = () => (
    <img
      src={img}
      alt="train"
      className={`${styles.train} absolute`}
    />
)