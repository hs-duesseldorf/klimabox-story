import React from "react";
import img from "../../asset/kapitel3_hochhaus.png";
import styles from "../../start.module.css";


export const Hochhaus: React.FC= () => {
  return(
    <img src={img} alt="hochahus" className={`absolute ${styles.hochhaus}`} />
  )
}