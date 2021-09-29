import React from "react";

import imgTV from "../../asset/kapitel3_tv.png";
import imgLaptop from "../../asset/kapitel3_laptop.png";
import imgLamp from "../../asset/kapitel3_scheinwerfer.png";
import imgIndoor from "../../asset/kapitel3_indoor.png";
import imgDrone from "../../asset/kapitel3_drone.png";
import styles from "../../start.module.css";
import { Plants } from "./plants";

export const Indoor: React.FC = () => {
  return (
    <div className={` w-full h-full `}>
      <img id="indoor" src={imgIndoor} alt="indoor" />
      <img id="laptop" src={imgLaptop} alt="laptop" className={`absolute ${styles.laptop}`} />
      <img id="tv" src={imgTV} alt="tv" className={`absolute ${styles.tv}`} />
      <img id="lamp" src={imgLamp} alt="lamp" className={`absolute ${styles.indoorLamp}`} />
      <img id="imgDrone" src={imgDrone} alt="drone" className={`absolute ${styles.drone}`} />
      <Plants styleName={styles.plant1}></Plants>
      <Plants styleName={styles.plant2}></Plants>
      <Plants styleName={styles.plant3}></Plants>
    </div>
  );
};