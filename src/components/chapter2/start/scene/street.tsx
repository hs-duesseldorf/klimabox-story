import React from "react";

import styles from "../start.module.css";
import img from "../asset/kapitel2_straße_front.png";

export const Street: React.FC = () => {

  return (
    <img
      id="Street"
      src={img}
      alt="street"
      className={`${styles.street} relative`}
    />
  )
}