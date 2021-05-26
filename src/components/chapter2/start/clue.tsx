
import React from "react";

import styles from "./start.module.css";
import img from "./asset/kapitel1_intro_clue.png";

export const Clue: React.FC = () => (
    <img
      src={img}
      alt="Clue"
      className={`${styles.clue} absolute text-white`}
    />
)