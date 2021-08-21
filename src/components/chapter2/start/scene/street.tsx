import React from "react";

import Plx from "react-plx";
import styles from "../start.module.css";
import img from "../asset/kapitel2_straße_front.png";

export const Street: React.FC<{}> = ({}) => {
  return (
    <div>
      <img
        id="Street"
        src={img}
        alt="street"
        className={`${styles.street} absolute -top-96`}
      />
    </div>
  );
};
