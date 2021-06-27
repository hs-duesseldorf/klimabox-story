import React from "react";
import styles from "../start.module.css";
import img from "../asset/kapitel2_hochhaus.png";

export const BuildingD: React.FC = () => (
  <img
    src={img}
    alt="hochhaus"
    className={`${styles.hochhaus} absolute`}
  />
);
