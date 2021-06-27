import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_graffiti.png";
import graffitiTextBackgroundImg from "../asset/kapitel2_graffiti_text_background.png";

export const Graffiti: React.FC = () => (
  <div className="absolute left-full w-full">
    <img src={img} alt="graffiti" className={`${styles.graffiti} absolute`}></img>
    <img src={graffitiTextBackgroundImg} alt="graffitiBackground" className={`${styles.graffitiBackground} absolute`} />
  </div>
);
