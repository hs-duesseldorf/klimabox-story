import React from "react";

import styles from "./start.module.css";
import img from "./asset/kapitel1_intro_sunrise.png";

export const Sunrise: React.FC = () => (
    <img
      src={img}
      alt="Sternenhimmel"
      className={ `${styles.sun} fixed inset-0 w-full h-full`}
    />
)