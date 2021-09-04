import React from "react";

import streetLampImg from "../../asset/kapitel2_strassenlaterne.png";
import styles from "../../start.module.css";

export const StreetLamp: React.FC = () => {
  return (
    <img
      src={streetLampImg}
      alt="streetLamp"
      className={`${styles.streetlamp} absolute`}
    />
  );
};
