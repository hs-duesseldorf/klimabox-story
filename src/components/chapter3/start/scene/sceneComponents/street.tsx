import React from "react";
import img from "../../asset/kapitel3_strasse-End.png";
import styles from "../../start.module.css"

export const Street: React.FC = () => {
  return(
    <img src={img} alt="street" className={`absolute ${styles.street}`} />
  )
}