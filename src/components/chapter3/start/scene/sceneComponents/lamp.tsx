import React from "react";

import img from "../../asset/kapitel3_strassenlaterne.png";
import styles from "../../start.module.css"

export const Lamp: React.FC = () => {
  return(
    <img id="lamp" src={img} alt="lamp" className={`absolute ${styles.lamp}`}/>
  )
}